import { Body, Controller, Put } from '@nestjs/common';
import { ProductClient } from '@src/domain/dtos/product';
import { productToEntity } from '@src/domain/toEntity';
import { CloudProductService } from '@src/infra/cloud/services';

@Controller()
export class ProductHttpController {
  constructor(private readonly cloudService: CloudProductService) {}

  @Put()
  public update(@Body() body: ProductClient): void {
    this.cloudService.updateProduct(productToEntity(body));
  }
}
