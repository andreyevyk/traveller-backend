import { getRepository, Repository } from "typeorm";

import { ICreateCityDTO } from "@modules/cities/dtos/ICreateCityDTO";
import { ICitiesRepository } from "@modules/cities/repositories/ICitiesRepository";

import { City } from "../entities/City";

class CitiesRepository implements ICitiesRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({
    name,
    description,
    sub_description,
    thumbnail,
  }: ICreateCityDTO): Promise<void> {
    const city = this.repository.create({
      name,
      description,
      sub_description,
      thumbnail,
    });
    await this.repository.save(city);
  }

  async list(): Promise<City[]> {
    const cities = await this.repository.find({
      relations: ["places"],
    });
    return cities;
  }

  async findByName(name: string): Promise<City | undefined> {
    const city = await this.repository.findOne({ name });

    return city;
  }
}

export { CitiesRepository };
