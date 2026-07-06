import * as signalR from "@microsoft/signalr";

export const monitorConnection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5233/hubs/monitor")
  .withAutomaticReconnect()
  .build();