import { Category } from "../infra/typeorm/entities/Category";

interface ICreateCategoryDTO {
  name: string;
  iconName: string;
}

interface ICategoryRepository {
  create({ name, iconName }: ICreateCategoryDTO): Promise<void>;
  findAll(): Promise<Category[]>;
}

export { ICategoryRepository, ICreateCategoryDTO };
