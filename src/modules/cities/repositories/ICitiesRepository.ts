import { City } from "../entities/City";

interface ICreateCityDTO {
  name: string;
  description: string;
  sub_description: string;
  image: string;
}

interface ICityRepository {
  create({
    name,
    description,
    sub_description,
    image: string,
  }: ICreateCityDTO): Promise<void>;
  list(): Promise<City[]>;
  findByName(name: string): Promise<City | undefined>;
}

export { ICityRepository, ICreateCityDTO };
