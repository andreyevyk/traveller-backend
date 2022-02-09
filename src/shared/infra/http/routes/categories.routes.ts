import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCategoryController } from "@modules/categories/useCases/createCategory/CreateCategoryController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const upload = multer(uploadConfig.multer);

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  upload.single("icon"),
  createCategoryController.handle
);

export { categoriesRoutes };
