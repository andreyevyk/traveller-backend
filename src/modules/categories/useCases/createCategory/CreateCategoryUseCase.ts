import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "@modules/categories/repositories/ICategoryRepository";

interface IRequest {
  name: string;
  iconName: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}
  async execute({ name, iconName }: IRequest): Promise<void> {
    await this.categoryRepository.create({ name, iconName });
  }
}

export { CreateCategoryUseCase };
