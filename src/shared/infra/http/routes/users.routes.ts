import { Router } from "express";

import { CreateUserController } from "@modules/accounts/useCases/createUser/CreateUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const userRoutes = Router();

const createUserController = new CreateUserController();

userRoutes.post("/", ensureAuthenticated, createUserController.handle);

export { userRoutes };
