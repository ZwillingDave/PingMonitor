using PingMonitor.Api.BackgroundServices;
using PingMonitor.Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSignalR();

builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        policy
            .WithOrigins(
                "http://localhost:5173",
                "https://localhost:5173"
            )
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

builder.Services.AddHostedService<FakeMonitorService>();

var app = builder.Build();

app.UseCors("Frontend");

app.MapControllers();
app.MapHub<MonitorHub>("/hubs/monitor");

app.Run();