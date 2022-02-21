import { ICreateCityDTO } from "../dtos/ICreateCityDTO";
import { ISearchCityDTO } from "../dtos/ISearchCityDTO";
import { City } from "../infra/typeorm/entities/City";

interface ICitiesRepository {
  create({
    name,
    description,
    sub_description,
    thumbnail: string,
  }: ICreateCityDTO): Promise<void>;
  list({ searchBy, type }: ISearchCityDTO): Promise<City[]>;
  findByName(name: string): Promise<City | undefined>;
}

export { ICitiesRepository };
