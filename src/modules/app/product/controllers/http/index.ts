import { Body, Controller, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ProductClient } from '@src/domain/dtos/product';
import { productToEntity } from '@src/domain/toEntity';
import { UpdateProductUseCase } from '../../useCases/update-product';

@Controller()
export class HttpProductController {
  constructor(private readonly updateUseCase: UpdateProductUseCase) {}

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  public update(@Body() body: ProductClient): Promise<void> {
    return this.updateUseCase.exec(productToEntity(body));
  }
}
