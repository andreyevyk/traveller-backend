import { ICityRepository } from "../../repositories/ICitiesRepository";

interface IRequest {
  name: string;
  description: string;
  sub_description: string;
  image: string;
}

class CreateCityUseCase {
  constructor(private citiesRepository: ICityRepository) {}

  async execute({
    name,
    description,
    sub_description,
    image,
  }: IRequest): Promise<void> {
    const cityAlreadyExists = await this.citiesRepository.findByName(name);
    if (cityAlreadyExists) {
      throw new Error("City Already Exists");
    }
    this.citiesRepository.create({ name, description, sub_description, image });
  }
}

export { CreateCityUseCase };
