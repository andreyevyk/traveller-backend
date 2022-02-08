import { City } from "../infra/typeorm/entities/City";

interface ICreateCityDTO {
  name: string;
  description: string;
  sub_description: string;
  thumbnail: string;
}

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

export { ICitiesRepository, ICreateCityDTO };
