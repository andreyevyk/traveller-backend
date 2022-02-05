import { Request, Response } from "express";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {
  constructor(private listCitiesUseCase: ListCitiesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const cities = await this.listCitiesUseCase.execute();

    return response.status(200).json(cities);
  }
}

export { ListCitiesController };
