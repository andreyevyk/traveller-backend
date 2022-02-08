import { container } from "tsyringe";

import uploadConfig from "@config/upload";
import DiskStorageProvider from "@modules/cities/providers/StorageProvider/implementations/DiskStorageProvider";
import IStorageProvider from "@modules/cities/providers/StorageProvider/models/IStorageProvider";

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  providers[uploadConfig.driver]
);
