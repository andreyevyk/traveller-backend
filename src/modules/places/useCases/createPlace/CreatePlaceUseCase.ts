import { inject, injectable } from "tsyringe";

import { IPlaceRepository } from "@modules/places/repositories/IPlaceRepository";
import { AppError } from "@shared/errors/AppErrors";

interface IRequest {
  name: string;
  description: string;
  city_id: string;
}

@injectable()
class CreatePlaceUseCase {
  constructor(
    @inject("PlaceRepository")
    private placeRepository: IPlaceRepository
  ) {}
  async execute({ name, description, city_id }: IRequest): Promise<void> {
    const placeAlreadyExists = await this.placeRepository.findByName(name);

    if (placeAlreadyExists) {
      throw new AppError("Place already exists");
    }

    await this.placeRepository.create({
      name,
      description,
      city_id,
    });
  }
}

export { CreatePlaceUseCase };
