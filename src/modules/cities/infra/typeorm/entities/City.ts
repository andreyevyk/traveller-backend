import { Expose } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import uploadConfig from "@config/upload";
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

  @Expose({ name: "thumbnail_url" })
  thumbnail_url(): string {
    switch (uploadConfig.driver) {
      case "disk":
        return `${process.env.APP_API_URL}/files/${this.thumbnail}`;
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/${this.thumbnail}`;
      default:
        return null;
    }
  }

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
