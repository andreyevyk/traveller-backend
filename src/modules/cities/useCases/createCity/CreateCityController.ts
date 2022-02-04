import { Request, Response } from "express";

import { CreateCityUseCase } from "./CreateCityUseCase";
import { UploadImageUseCase } from "./UploadImageUseCase";

class CreateCityController {
  constructor(
    private createCityUseCase: CreateCityUseCase,
    private uploadImageUseCase: UploadImageUseCase
  ) {}

  public async handle(request: Request, response: Response) {
    const { name, description, sub_description } = request.body;
    const { file } = request;

    const filename = await this.uploadImageUseCase.execute(file!.filename);

    this.createCityUseCase.execute({
      name,
      description,
      sub_description,
      image: filename,
    });

    return response.status(201).send();
  }
}

export { CreateCityController };
