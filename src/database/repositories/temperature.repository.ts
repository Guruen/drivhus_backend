import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { temperature } from "src/modules/temperature/models/temperature.entity";
import { Repository } from "typeorm";

@Injectable()
export class TemperatureRepository {
    constructor(
        @InjectRepository(temperature)
        private tempRepo: Repository<temperature>,
    ) {}

    saveTemperature(temp: temperature): Promise<temperature> {
        return this.tempRepo.save(temp)
    }

}