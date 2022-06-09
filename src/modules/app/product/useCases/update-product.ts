import { Injectable } from '@nestjs/common';
import { MutualProductDTO, ProductEntity } from '@src/domain/dtos/product';
import { CloudProductService } from '@src/infra/cloud/services';
import { ProductRepository } from '@src/infra/database/repositories';
import { UpdateResult } from 'typeorm';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly repository: ProductRepository,
    private readonly cloudService: CloudProductService
  ) {}

  public async cloudUpdate(data: MutualProductDTO): Promise<UpdateResult> {
    return this.repository.update(data);
  }

  public async exec(data: ProductEntity): Promise<void> {
    return this.repository.update(data).then(() => this.cloudService.updateProduct(data));
  }
}
