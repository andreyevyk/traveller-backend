import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateCityController } from "../modules/cities/useCases/createCity/CreateCityController";
import { ListCitiesController } from "../modules/cities/useCases/listCities/ListCitiesController";

const citiesRoutes = Router();

const upload = multer(uploadConfig.multer);

const createCityController = new CreateCityController();
const listCitiesController = new ListCitiesController();

citiesRoutes.post(
  "/",
  upload.single("thumbnail"),
  ensureAuthenticated,
  createCityController.handle
);

citiesRoutes.get("/", listCitiesController.handle);

export { citiesRoutes };
