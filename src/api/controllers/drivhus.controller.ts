import { Controller, Get, Query } from "@nestjs/common";
import { temperature } from "src/modules/temperature/models/temperature.entity";
import { TemperatureService } from "src/modules/temperature/services/temperature.service";

@Controller('drivhus')
export class drivhusController {
    constructor(private tempService: TemperatureService) {}

    @Get()
    public async getTemperature(
        @Query() query
    ): Promise<temperature[]> {
        return await this.tempService.getTemperatureData(query.date, query.period);
    }
}