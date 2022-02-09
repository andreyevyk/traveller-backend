import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPlacesUseCase } from "./ListPlacesUseCase";

class ListPlacesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { category_id } = request.query;

    const listPlacesUseCase = container.resolve(ListPlacesUseCase);

    const places = await listPlacesUseCase.execute(category_id as string);

    return response.json(places);
  }
}

export { ListPlacesController };
