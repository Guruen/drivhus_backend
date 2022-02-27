import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { temperature } from "src/modules/temperature/models/temperature.entity";
import { Between, Equal, LessThan, MoreThan, MoreThanOrEqual, Raw, Repository } from "typeorm";

@Injectable()
export class TemperatureRepository {
    constructor(
        @InjectRepository(temperature)
        private tempRepo: Repository<temperature>,
    ) {}

    saveTemperature(temp: temperature): Promise<temperature> {
        return this.tempRepo.save(temp)
    }

    async getTemperatureData(date: string, period: string): Promise<temperature[]> {
        const today = new Date(date)
        const month = today.getMonth() + 1
        const year = today.getFullYear()

        switch (period) {
            case 'day':
                return await this.tempRepo.createQueryBuilder('temperature')
                .where('DATE(timestamp) = :date', { date: today })
                .getMany()
                break;
            case 'month':
                return await this.tempRepo.createQueryBuilder('temperature')
                .where('YEAR(timestamp) = :year', { year: year })
                .andWhere('MONTH(timestamp) = :month', { month: month})
                .andWhere('HOUR(timestamp) IN (:hours)', { hours: [0, 3, 7, 11, 15, 19, 23] })
                .andWhere('MINUTE(timestamp) BETWEEN :first AND :second', { first: 55, second: 59}).getMany()
                break;
            case 'year':
                return await this.tempRepo.createQueryBuilder('temperature')
                .where('YEAR(timestamp) = :year', { year: year })
                .andWhere('DAY(timestamp) IN (:days)', { days: [1, 9, 18, 27]})
                .andWhere('HOUR(timestamp) IN (:hours)', { hours: [15] })
                .andWhere('MINUTE(timestamp) BETWEEN :first AND :second', { first: 55, second: 59}).getMany()
                break;
            default:
                return null;
        }

    }
}