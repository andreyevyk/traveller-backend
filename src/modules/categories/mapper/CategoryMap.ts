import { instanceToInstance } from "class-transformer";

import { ICategoryResponseDTO } from "../dtos/ICategoryResponseDTO";
import { Category } from "../infra/typeorm/entities/Category";

class CategoryMap {
  static toDto({ id, name, icon, icon_url }: Category): ICategoryResponseDTO {
    const category = instanceToInstance({
      id,
      name,
      icon,
      icon_url,
    });

    return category;
  }
}

export { CategoryMap };
