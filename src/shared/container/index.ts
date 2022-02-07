import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICitiesRepository } from "../../modules/cities/repositories/ICitiesRepository";
import { CitiesRepository } from "../../modules/cities/repositories/implementations/CitiesRepository";

import "./providers";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
