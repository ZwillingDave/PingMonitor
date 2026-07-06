namespace PingMonitor.Core.Models;

public class MonitorSnapshot
{
    public DateTime Timestamp { get; set; } = DateTime.Now;
    public string OverallStatus { get; set; } = "UNKNOWN";

    public bool RouterOk { get; set; }
    public long? RouterLatencyMs { get; set; }

    public int SuccessfulPings { get; set; }
    public int TotalPings { get; set; }

    public int SuccessfulHttpChecks { get; set; }
    public int TotalHttpChecks { get; set; }

    public int PacketLossPercent { get; set; }

    public long? AverageLatencyMs { get; set; }
    public long? MinLatencyMs { get; set; }
    public long? MaxLatencyMs { get; set; }
    public long? JitterMs { get; set; }

    public List<TargetResult> Results { get; set; } = new();
}