import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadImageUseCase } from "@shared/useCases/uploadImage/UploadImageUseCase";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const { file } = request;
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const uploadImageUseCase = container.resolve(UploadImageUseCase);

    const iconName = await uploadImageUseCase.execute(file!.filename);
    await createCategoryUseCase.execute({ name, iconName });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
