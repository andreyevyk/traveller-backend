import {
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { City } from "@modules/cities/infra/typeorm/entities/City";

@Entity("places")
class Place {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => City, (city) => city.places)
  @JoinColumn({ name: "city_id" })
  city: City;

  @Column()
  city_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.created_at = new Date();
    }
  }
}

export { Place };
