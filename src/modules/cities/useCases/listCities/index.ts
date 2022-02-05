import { CitiesRepository } from "../../repositories/implementations/CitiesRepository";
import { ListCitiesController } from "./ListCitiesController";
import { ListCitiesUseCase } from "./ListCitiesUseCase";

export default (): ListCitiesController => {
  const citiesRepository = new CitiesRepository();
  const listCitiesUseCase = new ListCitiesUseCase(citiesRepository);

  const listCitiesController = new ListCitiesController(listCitiesUseCase);
  return listCitiesController;
};
