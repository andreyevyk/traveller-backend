import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "@modules/categories/dtos/ICreateCategoryDTO";
import { ICategoryRepository } from "@modules/categories/repositories/ICategoryRepository";

import { Category } from "../entities/Category";

class CategoryRepository implements ICategoryRepository {
  repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
  async create({ name, iconName }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      icon: iconName,
    });

    await this.repository.save(category);
  }
  findAll(): Promise<Category[]> {
    const categories = this.repository.find();

    return categories;
  }
}

export { CategoryRepository };
