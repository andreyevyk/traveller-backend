import { container } from "tsyringe";

import uploadConfig from "@config/upload";

import { IDateProvider } from "./DateProvider/IDateProvider";
import { DayjsDateProvider } from "./DateProvider/implementations/DayjsDateProvider";
import { LocalStorageProvider } from "./StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "./StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "./StorageProvider/IStorageProvider";

const storageProviders = {
  disk: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  storageProviders[uploadConfig.driver]
);

container.registerSingleton<IDateProvider>("DateProvider", DayjsDateProvider);
