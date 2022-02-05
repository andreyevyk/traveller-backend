import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

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
  image: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(
    name: string,
    description: string,
    sub_description: string,
    image: string
  ) {
    if (!this.id) {
      this.id = uuidV4();
    }
    this.name = name;
    this.description = description;
    this.sub_description = sub_description;
    this.image = image;
  }
}

export { City };
