import { CategoryRepositoryInMemory } from "@modules/categories/repositories/in-memory/CategoryRepositoryInMemory";

import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

let listCategoriesUseCase: ListCategoriesUseCase;
let categoryRepository: CategoryRepositoryInMemory;

describe("List Categories", () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepositoryInMemory();
    listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository);
  });
  it("should be able to list categories", async () => {
    await listCategoriesUseCase.execute();
  });
});
