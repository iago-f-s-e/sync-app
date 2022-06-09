import { Injectable } from '@nestjs/common';
import { ProductEntity } from '@src/domain/dtos/product';
import { CloudProductService } from '@src/infra/cloud/services';
import { ProductRepository } from '@src/infra/database/repositories';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly repository: ProductRepository,
    private readonly cloudService: CloudProductService
  ) {}

  public async update(data: ProductEntity): Promise<void> {
    return this.repository.update(data).then(() => this.cloudService.updateProduct(data));
  }
}
