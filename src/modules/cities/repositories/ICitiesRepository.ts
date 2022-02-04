import { City } from "../model/City";

interface ICreateCityDTO {
  name: string;
  description: string;
  sub_description: string;
  image: string;
}

interface ICityRepository {
  findByName(name: string): City | undefined;
  list(): City[];
  create({
    name,
    description,
    sub_description,
    image: string,
  }: ICreateCityDTO): void;
}

export { ICityRepository, ICreateCityDTO };
