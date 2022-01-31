import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { wifiInfo } from 'src/modules/wifi/models/wifiInfo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WifiRepository {
    constructor(
        @InjectRepository(wifiInfo)
        private wifiRepo: Repository<wifiInfo>,
    ) {}

    saveWifiInfo(wifi: wifiInfo): Promise<wifiInfo> {
        return this.wifiRepo.save(wifi)
    }

}
