import { getRepository, Repository } from "typeorm";

import { ICreatePlaceDTO } from "@modules/places/dtos/ICreatePlaceDTO";
import { IPlaceRepository } from "@modules/places/repositories/IPlaceRepository";

import { Place } from "../entities/Place";

class PlaceRepository implements IPlaceRepository {
  private repository: Repository<Place>;

  constructor() {
    this.repository = getRepository(Place);
  }

  async create({ name, description, city_id }: ICreatePlaceDTO): Promise<void> {
    const place = this.repository.create({
      name,
      description,
      city_id,
    });

    await this.repository.save(place);
  }
  async findByName(name: string): Promise<Place | undefined> {
    const place = await this.repository.findOne({ name });

    return place;
  }
  async findByCategory(category_id?: string): Promise<Place[]> {
    const placeQuery = this.repository.createQueryBuilder("p");

    if (category_id) {
      placeQuery.andWhere("c.category_id =: category_id", { category_id });
    }

    const places = await placeQuery.getMany();
    return places;
  }
}
export { PlaceRepository };
