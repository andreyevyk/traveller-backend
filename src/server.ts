import express from "express";

import uploadConfig from "./config/upload";
import { router } from "./routes";

const PORT = 3333;
const app = express();

app.use(express.json());
app.use("/files", express.static(uploadConfig.uploadsFolder));

app.use(router);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
