import { CategoryRepositoryInMemory } from "@modules/categories/repositories/in-memory/CategoryRepositoryInMemory";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepository: CategoryRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoryRepository = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
  });
  it("should be able to create a category", async () => {
    await createCategoryUseCase.execute({ name: "Test", iconName: "icon.png" });
  });
});
