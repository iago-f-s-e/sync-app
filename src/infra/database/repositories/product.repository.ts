import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MutualProductDTO, ProductEntity } from '@src/domain/dtos/product';
import { Repository, UpdateResult } from 'typeorm';
import { Product } from '../entities';

@Injectable()
export class ProductRepository {
  constructor(@InjectRepository(Product) private readonly product: Repository<Product>) {}

  public update(data: ProductEntity | MutualProductDTO): Promise<UpdateResult> {
    const { id, ...product } = data;

    return this.product.update({ id }, product);
  }
}
