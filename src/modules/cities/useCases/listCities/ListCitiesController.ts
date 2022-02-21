import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

export interface IRequest {
  searchBy?: string;
  type?: "all" | "mostVisited";
}
class ListCitiesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { searchBy, type } = request.query as IRequest;
    const listCitiesUseCase = container.resolve(ListCitiesUseCase);

    const cities = await listCitiesUseCase.execute({ searchBy, type });

    return response.status(200).json(cities);
  }
}

export { ListCitiesController };
