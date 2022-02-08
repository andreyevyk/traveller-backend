import { CitiesRepositoryInMemory } from "@modules/cities/repositories/in-memory/CitiesRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreateCityUseCase } from "./CreateCityUseCase";

let createCityUseCase: CreateCityUseCase;
let citiesRepositoryInMemory: CitiesRepositoryInMemory;

describe("Create City", () => {
  beforeEach(() => {
    citiesRepositoryInMemory = new CitiesRepositoryInMemory();
    createCityUseCase = new CreateCityUseCase(citiesRepositoryInMemory);
  });
  it("should be able to create a new City", async () => {
    const city = {
      name: "City Test",
      description: "City Description",
      sub_description: "City SubDescription",
      thumbnail: "image.test",
    };
    await createCityUseCase.execute(city);

    const categoryCreated = await citiesRepositoryInMemory.findByName(
      city.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able to create a new City with name exists", async () => {
    expect(async () => {
      const city = {
        name: "City Test",
        description: "City Description",
        sub_description: "City SubDescription",
        thumbnail: "image.test",
      };
      await createCityUseCase.execute(city);
      await createCityUseCase.execute(city);
    }).rejects.toBeInstanceOf(AppError);
  });
});
