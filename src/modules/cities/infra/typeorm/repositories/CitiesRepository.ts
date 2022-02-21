import { getRepository, Repository } from "typeorm";

import { ICreateCityDTO } from "@modules/cities/dtos/ICreateCityDTO";
import { ISearchCityDTO } from "@modules/cities/dtos/ISearchCityDTO";
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

  async list({ searchBy, type }: ISearchCityDTO): Promise<City[]> {
    const citiesQuery = this.repository
      .createQueryBuilder("c")
      .leftJoinAndSelect("c.places", "places");

    if (searchBy) {
      citiesQuery.andWhere("c.name like '%' || :searchBy || '%'", { searchBy });
    }

    const places = await citiesQuery.getMany();

    return places;
  }

  async findByName(name: string): Promise<City | undefined> {
    const city = await this.repository.findOne({ name });

    return city;
  }
}

export { CitiesRepository };
