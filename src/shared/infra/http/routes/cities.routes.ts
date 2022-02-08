import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCityController } from "@modules/cities/useCases/createCity/CreateCityController";
import { ListCitiesController } from "@modules/cities/useCases/listCities/ListCitiesController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticate";

const citiesRoutes = Router();

const upload = multer(uploadConfig.multer);

const createCityController = new CreateCityController();
const listCitiesController = new ListCitiesController();

citiesRoutes.post(
  "/",
  ensureAuthenticated,
  upload.single("thumbnail"),
  createCityController.handle
);

citiesRoutes.get("/", listCitiesController.handle);

export { citiesRoutes };
