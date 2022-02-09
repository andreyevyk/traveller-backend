import { ICreatePlaceDTO } from "@modules/places/dtos/ICreatePlaceDTO";
import { Place } from "@modules/places/infra/typeorm/entities/Place";

import { IPlaceRepository } from "../IPlaceRepository";

class PlaceRepositoryInMemory implements IPlaceRepository {
  places: Place[] = [];

  async create({ name, description, city_id }: ICreatePlaceDTO): Promise<void> {
    const place = new Place();

    Object.assign(place, {
      name,
      description,
      city_id,
    });

    this.places.push(place);
  }

  async findByName(name: string): Promise<Place | undefined> {
    const place = this.places.find((place) => place.name === name);

    return place;
  }

  async findByCategory(category_id?: string): Promise<Place[]> {
    const { places } = this;
    return places;
  }
}

export { PlaceRepositoryInMemory };
