import { Module } from '@nestjs/common';
import { temperatureModule } from 'src/modules/temperature/temperature.module';
import { wifiModule } from 'src/modules/wifi/wifi.module';
import { drivhusController } from './controllers/drivhus.controller';
import { drivhusGateway } from './gateways/drivhus.gateway';

@Module({
  imports: [
     wifiModule,
     temperatureModule
  ],
  controllers: [
    drivhusController
  ],
  providers: [
    drivhusGateway
  ],
})
export class ApiModule {}
