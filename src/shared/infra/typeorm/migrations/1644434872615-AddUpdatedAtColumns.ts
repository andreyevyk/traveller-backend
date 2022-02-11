import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUpdatedAtColumns1644434872615 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "cities",
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: "now()",
      })
    );
    await queryRunner.addColumn(
      "places",
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("cities", "updated_at");
    await queryRunner.dropColumn("places", "updated_at");
  }
}
