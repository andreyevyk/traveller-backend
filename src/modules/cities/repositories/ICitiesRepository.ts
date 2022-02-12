import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { City } from "../infra/typeorm/entities/City";

interface ICitiesRepository {
  create({
    name,
    description,
    sub_description,
    thumbnail: string,
  }: ICreateCityDTO): Promise<void>;
  list(): Promise<City[]>;
  findByName(name: string): Promise<City | undefined>;
}

export { ICitiesRepository };
