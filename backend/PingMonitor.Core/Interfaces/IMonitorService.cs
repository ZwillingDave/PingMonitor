using PingMonitor.Core.Models;

namespace PingMonitor.Core.Interfaces;

public interface IMonitorService
{
    Task<MonitorSnapshot> CheckAsync(CancellationToken cancellationToken);
}