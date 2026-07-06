namespace PingMonitor.Core.Models;

public class TargetResult
{
    public string Name { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public long? LatencyMs { get; set; }
    public int? StatusCode { get; set; }
}