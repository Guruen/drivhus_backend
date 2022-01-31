import { Module } from '@nestjs/common';
import { temperatureModule } from 'src/modules/temperature/temperature.module';
import { wifiModule } from 'src/modules/wifi/wifi.module';
import { drivhusGateway } from './gateways/drivhus.gateway';

@Module({
  imports: [
     wifiModule,
     temperatureModule
  ],
  providers: [
    drivhusGateway
  ],
})
export class ApiModule {}
