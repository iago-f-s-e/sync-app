import { Body, Controller, Put } from '@nestjs/common';
import { ProductClient } from '@src/domain/dtos/product';
import { productToEntity } from '@src/domain/toEntity';

@Controller()
export class ProductHttpController {
  @Put()
  public update(@Body() body: ProductClient): any {
    console.log(productToEntity(body));

    return productToEntity(body);
  }
}
