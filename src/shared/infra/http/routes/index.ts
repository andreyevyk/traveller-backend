import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { categoriesRoutes } from "./categories.routes";
import { citiesRoutes } from "./cities.routes";
import { placesRoutes } from "./places.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/users", userRoutes);
router.use("/places", placesRoutes);
router.use("/categories", categoriesRoutes);
router.use(authenticateRoutes);

export { router };
