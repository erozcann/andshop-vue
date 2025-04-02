// plugins/signalr.js
import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7032/ChatHub") // senin backend URL’in
  .withAutomaticReconnect()
  .build();

export default connection;
