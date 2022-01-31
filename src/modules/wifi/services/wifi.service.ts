import { Injectable } from '@nestjs/common';
import { WifiRepository } from 'src/database/repositories/wifi.repository';
import { currentWifi } from '../models/currentWifi.dto';
import { wifiInfo } from '../models/wifiInfo.entity';

@Injectable()
export class WifiService {
    constructor(private wifiRepo: WifiRepository) {}

    saveWifiInfo(wifi: currentWifi): void {
        let saveWifi = new wifiInfo()
        saveWifi.rssi = wifi.rssi
        this.wifiRepo.saveWifiInfo(saveWifi)
    }

}
