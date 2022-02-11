import { container } from "tsyringe";

import uploadConfig from "@config/upload";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import DiskStorageProvider from "./StorageProvider/implementations/DiskStorageProvider";
import IStorageProvider from "./StorageProvider/IStorageProvider";

const storageProviders = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  storageProviders[uploadConfig.driver]
);

container.registerSingleton<IDateProvider>("DateProvider", DayjsDateProvider);
