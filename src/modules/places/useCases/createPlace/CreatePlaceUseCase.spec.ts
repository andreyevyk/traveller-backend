import { PlaceRepositoryInMemory } from "@modules/places/repositories/in-memory/PlaceRepositoryInMemory";
import { AppError } from "@shared/errors/AppErrors";

import { CreatePlaceUseCase } from "./CreatePlaceUseCase";

let createPlaceUseCase: CreatePlaceUseCase;
let placeRepository: PlaceRepositoryInMemory;

describe("Create Place", () => {
  beforeEach(() => {
    placeRepository = new PlaceRepositoryInMemory();
    createPlaceUseCase = new CreatePlaceUseCase(placeRepository);
  });
  it("should be able to create a new place", async () => {
    const place = {
      name: "Test",
      description: "This is a place to test",
      city_id: "city",
    };
    await createPlaceUseCase.execute(place);
    const placeCreated = await placeRepository.findByName(place.name);

    expect(placeCreated).toHaveProperty("id");
  });
  it("should not able to create place with exists name", async () => {
    expect(async () => {
      await createPlaceUseCase.execute({
        name: "Same Name",
        description: "This is a place to test",
        city_id: "city",
      });
      await createPlaceUseCase.execute({
        name: "Same Name",
        description: "This is a place to test",
        city_id: "city",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
