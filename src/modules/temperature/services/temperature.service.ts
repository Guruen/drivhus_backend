import { Injectable } from '@nestjs/common';
import { TemperatureRepository } from 'src/database/repositories/temperature.repository';
import { currentTemperature } from '../models/currentTemperature.dto';
import { temperature } from '../models/temperature.entity';

@Injectable()
export class TemperatureService {
  constructor(private tempRepo: TemperatureRepository) {}

  saveTemperature(temp: currentTemperature): void {
    let saveTemp = new temperature()
    saveTemp.temperature_inside_1 = temp.temperature_inside_1
    saveTemp.temperature_inside_2 = temp.temperature_inside_2
    saveTemp.temperature_outside = temp.temperature_outside
    saveTemp.temperature_water = temp.temperature_water
    this.tempRepo.saveTemperature(saveTemp)
  }

}
