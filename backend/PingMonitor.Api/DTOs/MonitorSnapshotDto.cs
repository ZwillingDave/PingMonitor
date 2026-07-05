using System;

namespace PingMonitor.Api.DTOs;

public class MonitorSnapshotDto
{
    public DateTime Timestamp { get; set; } = DateTime.Now;
    public string Status { get; set; } = "OK";

    public int RouterLatencyMs { get; set; }
    public int AverageLatencyMs { get; set; }
    public int MinLatencyMs { get; set; }
    public int MaxLatencyMs { get; set; }
    public int JitterMs { get; set; }
    public int PacketLossPercent { get; set; }

    public int SuccessfulPings { get; set; }
    public int TotalPings { get; set; }
    public int SuccessfulHttpChecks { get; set; }
    public int TotalHttpChecks { get; set; }
}