import { ICreateCategoryDTO } from "@modules/categories/dtos/ICreateCategoryDTO";
import { Category } from "@modules/categories/infra/typeorm/entities/Category";

import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async create({ name }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      name,
    });
    this.categories.push(category);
  }

  async findAll(): Promise<Category[]> {
    const { categories } = this;

    return categories;
  }
}

export { CategoryRepositoryInMemory };
