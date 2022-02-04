import { v4 as uuidV4 } from "uuid";

class City {
  id?: string;
  name: string;
  description: string;
  sub_description: string;
  image: string;
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
    this.created_at = new Date();
  }
}

export { City };
