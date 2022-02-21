import { inject, injectable } from "tsyringe";

import { ICityResponseDTO } from "@modules/cities/dtos/ICityResponseDTO";
import { CityMap } from "@modules/cities/mapper/CityMap";
import { ICitiesRepository } from "@modules/cities/repositories/ICitiesRepository";

import { IRequest } from "./ListCitiesController";

@injectable()
class ListCitiesUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) {}

  async execute({ searchBy, type }: IRequest): Promise<ICityResponseDTO[]> {
    const cities = await this.citiesRepository.list({ searchBy, type });
    const citiesDTO = cities.map((city) => CityMap.toDto(city));
    return citiesDTO;
  }
}

export { ListCitiesUseCase };
