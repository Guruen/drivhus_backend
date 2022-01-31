import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class wifiInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    timestamp: Date;

    @Column()    
    rssi: number;
}