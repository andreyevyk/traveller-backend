import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { createCityController } from "../modules/cities/useCases/createCity";
import { listCitiesController } from "../modules/cities/useCases/listCities";

const citiesRoutes = Router();

const upload = multer(uploadConfig.multer);

citiesRoutes.post("/", upload.single("image"), (request, response) => {
  return createCityController.handle(request, response);
});

citiesRoutes.get("/", (request, response) => {
  return listCitiesController.handle(request, response);
});

citiesRoutes.post("/import", upload.single("image"), (request, response) => {
  return response.send();
});

export { citiesRoutes };
