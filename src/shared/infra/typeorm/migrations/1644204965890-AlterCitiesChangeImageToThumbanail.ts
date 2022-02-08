import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterCitiesChangeImageToThumbanail1644204965890
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "cities",
      "image",
      new TableColumn({
        name: "thumbnail",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "cities",
      "thumbnail",
      new TableColumn({
        name: "image",
        type: "varchar",
      })
    );
  }
}
