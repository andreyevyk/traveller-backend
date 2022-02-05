import { City } from "../../entities/City";
import { ICityRepository } from "../../repositories/ICitiesRepository";

class ListCitiesUseCase {
  constructor(private citiesRepository: ICityRepository) {}

  async execute(): Promise<City[]> {
    const cities = await this.citiesRepository.list();
    return cities;
  }
}

export { ListCitiesUseCase };
