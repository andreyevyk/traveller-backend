import DiskStorageProvider from "../../providers/StorageProvider/implementations/DiskStorageProvider";
import { CitiesRepository } from "../../repositories/implementations/CitiesRepository";
import { CreateCityController } from "./CreateCityController";
import { CreateCityUseCase } from "./CreateCityUseCase";
import { UploadImageUseCase } from "./UploadImageUseCase";

export default (): CreateCityController => {
  const citiesRepository = new CitiesRepository();
  const createCityUseCase = new CreateCityUseCase(citiesRepository);
  const storageProvider = new DiskStorageProvider();

  const uploadImageUseCase = new UploadImageUseCase(storageProvider);

  const createCityController = new CreateCityController(
    createCityUseCase,
    uploadImageUseCase
  );
  return createCityController;
};
