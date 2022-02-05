import { getRepository, Repository } from "typeorm";

import { City } from "../../entities/City";
import { ICityRepository, ICreateCityDTO } from "../ICitiesRepository";

class CitiesRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({
    name,
    description,
    sub_description,
    image,
  }: ICreateCityDTO): Promise<void> {
    const city = this.repository.create({
      name,
      description,
      sub_description,
      image,
    });
    await this.repository.save(city);
  }

  async list(): Promise<City[]> {
    const cities = await this.repository.find();
    return cities;
  }

  async findByName(name: string): Promise<City | undefined> {
    const city = await this.repository.findOne({ name });

    return city;
  }
}

export { CitiesRepository };
