import IStorageProvider from "../../providers/StorageProvider/models/IStorageProvider";

class UploadImageUseCase {
  constructor(private storageProvider: IStorageProvider) {}

  public async execute(imageFilename: string): Promise<string> {
    const filename = await this.storageProvider.saveFile(imageFilename);

    return filename;
  }
}

export { UploadImageUseCase };
