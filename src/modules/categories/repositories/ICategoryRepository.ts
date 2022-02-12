import { ICreateCategoryDTO } from "../dtos/ICreateCategoryDTO";
import { Category } from "../infra/typeorm/entities/Category";

interface ICategoryRepository {
  create({ name, iconName }: ICreateCategoryDTO): Promise<void>;
  findAll(): Promise<Category[]>;
}

export { ICategoryRepository };
