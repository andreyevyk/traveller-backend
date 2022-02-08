import { container } from "tsyringe";

import "./providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CitiesRepository } from "@modules/cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/cities/repositories/ICitiesRepository";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
