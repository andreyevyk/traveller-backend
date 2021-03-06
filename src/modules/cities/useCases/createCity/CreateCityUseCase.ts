import { injectable, inject } from "tsyringe";

import { ICitiesRepository } from "@modules/cities/repositories/ICitiesRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  name: string;
  description: string;
  sub_description: string;
  thumbnail: string;
}

@injectable()
class CreateCityUseCase {
  constructor(
    @inject("CitiesRepository")
    private citiesRepository: ICitiesRepository
  ) {}

  async execute({
    name,
    description,
    sub_description,
    thumbnail,
  }: IRequest): Promise<void> {
    const cityAlreadyExists = await this.citiesRepository.findByName(name);

    if (cityAlreadyExists) {
      throw new AppError("City Already Exists");
    }
    this.citiesRepository.create({
      name,
      description,
      sub_description,
      thumbnail,
    });
  }
}

export { CreateCityUseCase };
