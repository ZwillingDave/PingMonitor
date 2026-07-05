using Microsoft.AspNetCore.SignalR;
using PingMonitor.Api.DTOs;
using PingMonitor.Api.Hubs;
using System.Threading.Tasks;
using System.Threading;
using System;

namespace PingMonitor.Api.BackgroundServices;

public class FakeMonitorService : BackgroundService
{
    private readonly IHubContext<MonitorHub> _hubContext;
    private readonly Random _random = new();

    public FakeMonitorService(IHubContext<MonitorHub> hubContext)
    {
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            var average = _random.Next(10, 35);

            var snapshot = new MonitorSnapshotDto
            {
                Timestamp = DateTime.Now,
                Status = "OK",
                RouterLatencyMs = _random.Next(1, 5),
                AverageLatencyMs = average,
                MinLatencyMs = average - _random.Next(1, 5),
                MaxLatencyMs = average + _random.Next(1, 10),
                JitterMs = _random.Next(0, 8),
                PacketLossPercent = _random.Next(0, 3),
                SuccessfulPings = 3,
                TotalPings = 3,
                SuccessfulHttpChecks = 3,
                TotalHttpChecks = 3
            };

            await _hubContext.Clients.All.SendAsync("MonitorUpdate", snapshot, stoppingToken);

            await Task.Delay(1000, stoppingToken);
        }
    }
}