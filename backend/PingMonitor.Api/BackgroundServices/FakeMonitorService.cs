using Microsoft.AspNetCore.SignalR;
using PingMonitor.Api.Hubs;
using PingMonitor.Core.Interfaces;

namespace PingMonitor.Api.BackgroundServices;

public class MonitorBackgroundService : BackgroundService
{
    private readonly IServiceScopeFactory _scopeFactory;
    private readonly IHubContext<MonitorHub> _hubContext;

    public MonitorBackgroundService(
        IServiceScopeFactory scopeFactory,
        IHubContext<MonitorHub> hubContext)
    {
        _scopeFactory = scopeFactory;
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using var scope = _scopeFactory.CreateScope();

            var monitorService = scope.ServiceProvider.GetRequiredService<IMonitorService>();
            var snapshot = await monitorService.CheckAsync(stoppingToken);

            await _hubContext.Clients.All.SendAsync("MonitorUpdate", snapshot, stoppingToken);

            await Task.Delay(1000, stoppingToken);
        }
    }
}