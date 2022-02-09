import { PlaceRepositoryInMemory } from "@modules/places/repositories/in-memory/PlaceRepositoryInMemory";

import { ListPlacesUseCase } from "./ListPlacesUseCase";

let listPlacesUseCase: ListPlacesUseCase;
let placesRepository: PlaceRepositoryInMemory;

describe("List Places", () => {
  beforeEach(() => {
    placesRepository = new PlaceRepositoryInMemory();
    listPlacesUseCase = new ListPlacesUseCase(placesRepository);
  });
  it("should be able to list places", async () => {
    await placesRepository.create({
      name: "Place 1",
      description: "Place description",
      city_id: "city_id",
    });

    const places = await listPlacesUseCase.execute();

    expect(places).toHaveLength(1);
  });

  // it("should be able to list places by categoty: ", () => {});
});
