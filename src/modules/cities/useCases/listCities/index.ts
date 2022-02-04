import { CitiesRepository } from "../../repositories/implementations/CitiesRepository";
import { ListCitiesController } from "./ListCitiesController";
import { ListCitiesUseCase } from "./ListCitiesUseCase";

const citiesRepository = CitiesRepository.getInstance();
const listCitiesUseCase = new ListCitiesUseCase(citiesRepository);

const listCitiesController = new ListCitiesController(listCitiesUseCase);

export { listCitiesController };
