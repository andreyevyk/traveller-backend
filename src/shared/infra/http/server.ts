import "reflect-metadata";
import "express-async-errors";
import "@shared/infra/typeorm";
import "@shared/container";

import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import uploadConfig from "@config/upload";
import { AppError } from "@shared/errors/AppErrors";
import { router } from "@shared/infra/http/routes";

import swaggerFile from "../../../swagger.json";

const PORT = 3333;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/files", express.static(uploadConfig.uploadsFolder));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});