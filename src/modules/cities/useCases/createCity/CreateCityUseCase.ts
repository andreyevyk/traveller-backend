import { ICityRepository } from "../../repositories/ICitiesRepository";

interface IRequest {
  name: string;
  description: string;
  sub_description: string;
  image: string;
}

class CreateCityUseCase {
  constructor(private citiesRepository: ICityRepository) {}

  execute({ name, description, sub_description, image }: IRequest): void {
    const cityAlreadyExists = this.citiesRepository.findByName(name);
    if (cityAlreadyExists) {
      throw new Error("City Already Exists");
    }
    this.citiesRepository.create({ name, description, sub_description, image });
  }
}

export { CreateCityUseCase };
