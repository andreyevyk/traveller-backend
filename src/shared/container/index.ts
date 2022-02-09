import { container } from "tsyringe";

import "./providers";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { CategoryRepository } from "@modules/categories/infra/typeorm/repositories/CategoryRepository";
import { ICategoryRepository } from "@modules/categories/repositories/ICategoryRepository";
import { CitiesRepository } from "@modules/cities/infra/typeorm/repositories/CitiesRepository";
import { ICitiesRepository } from "@modules/cities/repositories/ICitiesRepository";
import { PlaceRepository } from "@modules/places/infra/typeorm/repositories/PlaceRepository";
import { IPlaceRepository } from "@modules/places/repositories/IPlaceRepository";

container.registerSingleton<ICitiesRepository>(
  "CitiesRepository",
  CitiesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IPlaceRepository>(
  "PlaceRepository",
  PlaceRepository
);

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);
