import { Place } from "@modules/places/infra/typeorm/entities/Place";

interface ICityResponseDTO {
  id: string;
  name: string;
  description: string;
  sub_description: string;
  thumbnail: string;
  thumbnail_url(): string;
  places: Place[];
}

export { ICityResponseDTO };
