using System.Diagnostics;
using System.Net.NetworkInformation;
using PingMonitor.Core.Interfaces;
using PingMonitor.Core.Models;

namespace PingMonitor.Infrastructure.Services;

public class MonitorService : IMonitorService
{
    private readonly HttpClient _httpClient;

    private readonly string _routerTarget = "192.168.178.1";

    private readonly string[] _pingTargets =
    {
        "8.8.8.8",
        "1.1.1.1",
        "9.9.9.9"
    };

    private readonly string[] _httpTargets =
    {
        "https://www.google.com",
        "https://www.cloudflare.com",
        "https://www.microsoft.com"
    };

    private long? _lastAverageLatency;

    public MonitorService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.Timeout = TimeSpan.FromSeconds(2);
    }

    public async Task<MonitorSnapshot> CheckAsync(CancellationToken cancellationToken)
    {
        var timestamp = DateTime.Now;

        var routerTask = PingTargetAsync("Router", _routerTarget, "ROUTER", cancellationToken);

        var pingTasks = _pingTargets
            .Select(target => PingTargetAsync(target, target, "PING", cancellationToken))
            .ToList();

        var httpTasks = _httpTargets
            .Select(target => HttpCheckAsync(target, target, cancellationToken))
            .ToList();

        await Task.WhenAll(new[] { routerTask }.Concat(pingTasks).Concat(httpTasks));

        var routerResult = await routerTask;
        var pingResults = pingTasks.Select(t => t.Result).ToList();
        var httpResults = httpTasks.Select(t => t.Result).ToList();

        var successfulPings = pingResults.Count(x => x.Status == "OK");
        var successfulHttp = httpResults.Count(x => x.Status == "OK");

        var latencies = pingResults
            .Where(x => x.LatencyMs.HasValue)
            .Select(x => x.LatencyMs!.Value)
            .ToList();

        var average = latencies.Count > 0 ? (long)Math.Round(latencies.Average()) : (long?)null;
        var min = latencies.Count > 0 ? latencies.Min() : (long?)null;
        var max = latencies.Count > 0 ? latencies.Max() : (long?)null;

        var jitter = average.HasValue && _lastAverageLatency.HasValue
            ? Math.Abs(average.Value - _lastAverageLatency.Value)
            : (long?)null;

        if (average.HasValue)
            _lastAverageLatency = average.Value;

        var packetLoss = (int)Math.Round((double)(_pingTargets.Length - successfulPings) / _pingTargets.Length * 100);

        var overallStatus =
            routerResult.Status != "OK" ? "ROUTER_DOWN" :
            successfulPings == 0 && successfulHttp == 0 ? "INTERNET_DOWN" :
            successfulPings == 0 && successfulHttp > 0 ? "PING_BLOCKED_HTTP_OK" :
            successfulPings > 0 && successfulHttp == 0 ? "HTTP_DOWN" :
            packetLoss > 0 ? "PARTIAL_LOSS" :
            average >= 500 ? "CRITICAL_LATENCY" :
            average >= 150 ? "HIGH_LATENCY" :
            "OK";

        return new MonitorSnapshot
        {
            Timestamp = timestamp,
            OverallStatus = overallStatus,

            RouterOk = routerResult.Status == "OK",
            RouterLatencyMs = routerResult.LatencyMs,

            SuccessfulPings = successfulPings,
            TotalPings = _pingTargets.Length,

            SuccessfulHttpChecks = successfulHttp,
            TotalHttpChecks = _httpTargets.Length,

            PacketLossPercent = packetLoss,

            AverageLatencyMs = average,
            MinLatencyMs = min,
            MaxLatencyMs = max,
            JitterMs = jitter,

            Results = new List<TargetResult>
            {
                routerResult
            }
            .Concat(pingResults)
            .Concat(httpResults)
            .ToList()
        };
    }

    private static async Task<TargetResult> PingTargetAsync(
        string name,
        string address,
        string type,
        CancellationToken cancellationToken)
    {
        using var ping = new Ping();

        try
        {
            var reply = await ping.SendPingAsync(address, 1000);

            if (reply.Status == IPStatus.Success)
            {
                return new TargetResult
                {
                    Name = name,
                    Address = address,
                    Type = type,
                    Status = "OK",
                    LatencyMs = reply.RoundtripTime
                };
            }

            return new TargetResult
            {
                Name = name,
                Address = address,
                Type = type,
                Status = reply.Status.ToString(),
                LatencyMs = null
            };
        }
        catch
        {
            return new TargetResult
            {
                Name = name,
                Address = address,
                Type = type,
                Status = "ERROR",
                LatencyMs = null
            };
        }
    }

    private async Task<TargetResult> HttpCheckAsync(
        string name,
        string url,
        CancellationToken cancellationToken)
    {
        try
        {
            var sw = Stopwatch.StartNew();

            using var request = new HttpRequestMessage(HttpMethod.Head, url);
            using var response = await _httpClient.SendAsync(request, cancellationToken);

            sw.Stop();

            return new TargetResult
            {
                Name = name,
                Address = url,
                Type = "HTTP",
                Status = response.IsSuccessStatusCode ? "OK" : "HTTP_ERROR",
                LatencyMs = sw.ElapsedMilliseconds,
                StatusCode = (int)response.StatusCode
            };
        }
        catch
        {
            return new TargetResult
            {
                Name = name,
                Address = url,
                Type = "HTTP",
                Status = "FAILED",
                LatencyMs = null,
                StatusCode = null
            };
        }
    }
}