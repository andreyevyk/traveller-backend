import { City } from "../../model/City";
import { ICityRepository, ICreateCityDTO } from "../ICitiesRepository";

class CitiesRepository implements ICityRepository {
  private cities: City[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CitiesRepository;

  private constructor() {
    this.cities = [];
  }

  public static getInstance() {
    if (!CitiesRepository.INSTANCE) {
      CitiesRepository.INSTANCE = new CitiesRepository();
    }
    return CitiesRepository.INSTANCE;
  }

  create({ name, description, sub_description, image }: ICreateCityDTO): void {
    const city = new City(name, description, sub_description, image);

    this.cities.push(city);
  }

  list(): City[] {
    return this.cities;
  }

  findByName(name: string): City | undefined {
    const city = this.cities.find((city) => city.name === name);

    return city;
  }
}

export { CitiesRepository };
