import { Expose } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import uploadConfig from "@config/upload";

@Entity("categories")
class Category {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  icon: string;

  @Expose({ name: "icon_url" })
  icon_url(): string {
    switch (uploadConfig.driver) {
      case "disk":
        return `${process.env.APP_API_URL}/files/${this.icon}`;
      case "s3":
        return `${process.env.AWS_BUCKET_URL}/${this.icon}`;
      default:
        return null;
    }
  }

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Category };
