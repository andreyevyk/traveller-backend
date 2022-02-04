import { City } from "../../model/City";
import { ICityRepository } from "../../repositories/ICitiesRepository";

class ListCitiesUseCase {
  constructor(private citiesRepository: ICityRepository) {}

  execute(): City[] {
    const cities = this.citiesRepository.list();

    return cities;
  }
}

export { ListCitiesUseCase };
