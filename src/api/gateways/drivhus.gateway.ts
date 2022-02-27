import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { currentTemperature } from 'src/modules/temperature/models/currentTemperature.dto';
import { TemperatureService } from 'src/modules/temperature/services/temperature.service';
import { currentWifi } from 'src/modules/wifi/models/currentWifi.dto';
import { WifiService } from 'src/modules/wifi/services/wifi.service';


@WebSocketGateway({ cors: true })
export class drivhusGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private wifiService: WifiService, private tempService: TemperatureService) {}
  @WebSocketServer() server: Server;

  // Temperature Info
  @SubscribeMessage('CurrentTemperature')
  async handleGetCurrentTempEvent(
    @MessageBody() currentTemp: currentTemperature,
    ): Promise<void> {
    this.server.emit('getCurrentTemperature', currentTemp);
  }

  @SubscribeMessage('saveTemperature')
  async handleSaveTemperature(
    @MessageBody() currentTemp: currentTemperature,
    ): Promise<void> {
      this.tempService.saveTemperature(currentTemp)
  }

  // Wifi info
  @SubscribeMessage('currentWifi')
  async handleCurrentWifiStrengthEvent(
    @MessageBody() wifi: currentWifi,
  ): Promise<void> {
    this.server.emit('getCurrentWifi', wifi);
  }

  @SubscribeMessage('saveWifi')
  async handleSaveWifiStrength(
    @MessageBody() wifi: currentWifi,
  ): Promise<void> {
    this.wifiService.saveWifiInfo(wifi)
  }

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`)
    console.log(`Client connected: ${client.handshake.address}`)
  }

  async handleDisconnect(client: Socket): Promise<void> {
    console.log(`Client disconnected: ${client.id}`);
    
  }
}
