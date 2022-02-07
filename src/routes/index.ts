import { Router } from "express";

import { citiesRoutes } from "./cities.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/cities", citiesRoutes);
router.use("/users", userRoutes);

export { router };
