import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePlaceUseCase } from "./CreatePlaceUseCase";

class CreatePlaceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, city_id } = request.body;
    const createPlaceUseCase = container.resolve(CreatePlaceUseCase);

    await createPlaceUseCase.execute({ name, description, city_id });

    return response.status(201).send();
  }
}

export { CreatePlaceController };
