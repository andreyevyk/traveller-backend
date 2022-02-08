import { inject, injectable } from "tsyringe";

import IStorageProvider from "@modules/cities/providers/StorageProvider/models/IStorageProvider";

@injectable()
class UploadImageUseCase {
  constructor(
    @inject("StorageProvider")
    private storageProvider: IStorageProvider
  ) {}

  public async execute(imageFilename: string): Promise<string> {
    const filename = await this.storageProvider.saveFile(imageFilename);

    return filename;
  }
}

export { UploadImageUseCase };
