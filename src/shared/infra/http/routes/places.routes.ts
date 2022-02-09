import { Router } from "express";

import { CreatePlaceController } from "@modules/places/useCases/createPlace/CreatePlaceController";
import { ListPlacesController } from "@modules/places/useCases/listPlaces/ListPlacesController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const placesRoutes = Router();

const createPlaceController = new CreatePlaceController();
const listPlacesController = new ListPlacesController();

placesRoutes.post("/", ensureAuthenticated, createPlaceController.handle);
placesRoutes.get("/", listPlacesController.handle);

export { placesRoutes };
