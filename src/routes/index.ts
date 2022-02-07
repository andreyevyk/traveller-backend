import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { citiesRoutes } from "./cities.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/users", userRoutes);
router.use(authenticateRoutes);

export { router };
