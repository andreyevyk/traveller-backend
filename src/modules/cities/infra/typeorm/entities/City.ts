import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Place } from "@modules/places/infra/typeorm/entities/Place";

@Entity("cities")
class City {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  sub_description: string;

  @Column()
  thumbnail: string;

  @OneToMany(() => Place, (place) => place.city)
  places: Place[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor(
    name: string,
    description: string,
    sub_description: string,
    thumbnail: string
  ) {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.name = name;
    this.description = description;
    this.sub_description = sub_description;
    this.thumbnail = thumbnail;
  }
}

export { City };
