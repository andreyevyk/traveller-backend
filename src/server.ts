import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";
import uploadConfig from "./config/upload";
import { router } from "./routes";
import swaggerFile from "./swagger.json";
import "./shared/container";

const PORT = 3333;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/files", express.static(uploadConfig.uploadsFolder));

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
