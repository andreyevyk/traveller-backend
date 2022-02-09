import { ICreatePlaceDTO } from "../dtos/ICreatePlaceDTO";
import { Place } from "../infra/typeorm/entities/Place";

interface IPlaceRepository {
  create({ name, description, city_id }: ICreatePlaceDTO): Promise<void>;
  findByName(name: string): Promise<Place | undefined>;
  findByCategory(category_id?: string): Promise<Place[]>;
}

export { IPlaceRepository };
