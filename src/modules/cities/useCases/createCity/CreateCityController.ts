import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCityUseCase } from "./CreateCityUseCase";
import { UploadImageUseCase } from "./UploadImageUseCase";

class CreateCityController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, sub_description } = request.body;
    const { file } = request;

    const uploadImageUseCase = container.resolve(UploadImageUseCase);
    const createCityUseCase = container.resolve(CreateCityUseCase);

    const filename = await uploadImageUseCase.execute(file!.filename);

    await createCityUseCase.execute({
      name,
      description,
      sub_description,
      image: filename,
    });

    return response.status(201).send();
  }
}

export { CreateCityController };
