import { instanceToInstance } from "class-transformer";

import { ICityResponseDTO } from "../dtos/ICityResponseDTO";
import { City } from "../infra/typeorm/entities/City";

class CityMap {
  static toDto({
    id,
    name,
    description,
    sub_description,
    places,
    thumbnail,
    thumbnail_url,
  }: City): ICityResponseDTO {
    const city = instanceToInstance({
      id,
      name,
      description,
      sub_description,
      thumbnail,
      thumbnail_url,
      places,
    });

    return city;
  }
}

export { CityMap };
