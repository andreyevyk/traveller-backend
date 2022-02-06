import { container } from "tsyringe";

import { ICitiesRepository } from "../../modules/cities/repositories/ICitiesRepository";
import { CitiesRepository } from "../../modules/cities/repositories/implementations/CitiesRepository";
import "./providers";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);
