import { City } from "../../entities/City";
import { ICitiesRepository, ICreateCityDTO } from "../ICitiesRepository";

class CitiesRepositoryInMemory implements ICitiesRepository {
  cities: City[] = [];

  async create({
    name,
    description,
    sub_description,
    thumbnail,
  }: ICreateCityDTO): Promise<void> {
    const city = new City(name, description, sub_description, thumbnail);
    this.cities.push(city);
  }

  async list(): Promise<City[]> {
    const all = this.cities;
    return all;
  }

  async findByName(name: string): Promise<City | undefined> {
    const city = this.cities.find((city) => city.name === name);

    return city;
  }
}

export { CitiesRepositoryInMemory };
