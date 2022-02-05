import { Request, Response } from "express";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

class ListCitiesController {
  constructor(private listCitiesUseCase: ListCitiesUseCase) {}

  handle(request: Request, response: Response): Response {
    const cities = this.listCitiesUseCase.execute();

    return response.status(200).json(cities);
  }
}

export { ListCitiesController };
