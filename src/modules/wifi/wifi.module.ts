import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { WifiRepository } from "src/database/repositories/wifi.repository";
import { wifiInfo } from "./models/wifiInfo.entity";
import { WifiService } from "./services/wifi.service";

@Module({
    imports: [TypeOrmModule.forFeature([wifiInfo])],
    providers: [WifiService, WifiRepository],
    exports: [WifiService]
})
export class wifiModule {}