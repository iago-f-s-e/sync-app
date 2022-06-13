import { Body, Controller, Get, HttpCode, HttpStatus, Put } from '@nestjs/common';
import { ProductClient } from '@src/domain/dtos/product';
import { productToEntity } from '@src/domain/toEntity';
import { Product } from '@src/infra/database/entities';
import { FindProductUseCase, UpdateProductUseCase } from '../../useCases';

@Controller()
export class HttpProductController {
  constructor(
    private readonly updateUseCase: UpdateProductUseCase,
    private readonly findUseCase: FindProductUseCase
  ) {}

  @Put()
  @HttpCode(HttpStatus.NO_CONTENT)
  public update(@Body() body: ProductClient): Promise<void> {
    return this.updateUseCase.exec(productToEntity(body));
  }

  @Get()
  public getAll(): Promise<Product[]> {
    return this.findUseCase.exec();
  }
}
