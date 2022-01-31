import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class temperature {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
    timestamp: Date;

    @Column('double')
    temperature_inside_1: number;

    @Column('double')
    temperature_inside_2: number;

    @Column('double')
    temperature_outside: number;

    @Column('double')
    temperature_water: number;

}