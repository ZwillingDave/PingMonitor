import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:5233/hubs/monitor")
    .withAutomaticReconnect()
    .build();

export default connection;