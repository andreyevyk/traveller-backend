import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", ensureAuthenticated, createUserController.handle);

export { userRoutes };
