import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateCategoryController } from "@modules/categories/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "@modules/categories/useCases/listCategories/ListCategoriesController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticate";

const upload = multer(uploadConfig.multer);

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
  "/",
  ensureAuthenticated,
  upload.single("icon"),
  createCategoryController.handle
);

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
