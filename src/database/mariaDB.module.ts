import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { temperature } from "src/modules/temperature/models/temperature.entity";
import { wifiInfo } from "src/modules/wifi/models/wifiInfo.entity";


@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                type: 'mariadb',
                host: config.get('DB_HOST'),
                port: config.get('DB_PORT'),
                database: config.get('DB_DATABASE'),
                username: config.get('DB_USERNAME'),
                password: config.get('DB_PASSWORD'),
                entities: [ wifiInfo, temperature ],
                synchronize: config.get('DB_SYNCHRONIZE'),
                autoLoadEntities: true,
            })
        })
    ]
})

export class mariaDBModule {}