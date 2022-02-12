import { inject, injectable } from "tsyringe";

import { ICategoryResponseDTO } from "@modules/categories/dtos/ICategoryResponseDTO";
import { CategoryMap } from "@modules/categories/mapper/CategoryMap";
import { ICategoryRepository } from "@modules/categories/repositories/ICategoryRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}
  async execute(): Promise<ICategoryResponseDTO[]> {
    const categories = await this.categoryRepository.findAll();

    const categoriesDTO = categories.map((category) =>
      CategoryMap.toDto(category)
    );
    return categoriesDTO;
  }
}

export { ListCategoriesUseCase };
