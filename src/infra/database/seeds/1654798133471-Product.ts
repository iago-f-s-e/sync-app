import { MigrationInterface, QueryRunner } from 'typeorm';
import { Product } from '../entities';
import { productFixture } from '../fixtures/product';

export class Product1654798133471 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection
      .createQueryBuilder(Product, 'product')
      .insert()
      .values(productFixture)
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.connection.createQueryBuilder(Product, 'product').delete().execute();
  }
}
