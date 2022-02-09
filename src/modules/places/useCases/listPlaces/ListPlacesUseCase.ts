import { inject, injectable } from "tsyringe";

import { Place } from "@modules/places/infra/typeorm/entities/Place";
import { IPlaceRepository } from "@modules/places/repositories/IPlaceRepository";

@injectable()
class ListPlacesUseCase {
  constructor(
    @inject("PlaceRepository")
    private placesRepository: IPlaceRepository
  ) {}
  async execute(category?: string): Promise<Place[]> {
    const places = await this.placesRepository.findByCategory(category);
    return places;
  }
}

export { ListPlacesUseCase };
