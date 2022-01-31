import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemperatureRepository } from "src/database/repositories/temperature.repository";
import { temperature } from "./models/temperature.entity";
import { TemperatureService } from "./services/temperature.service";

@Module({
    imports: [TypeOrmModule.forFeature([temperature])],
    providers: [TemperatureService, TemperatureRepository],
    exports: [TemperatureService]
})
export class temperatureModule {}