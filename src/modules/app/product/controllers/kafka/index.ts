import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { topics } from '@src/domain/constants';
import { MutualProductDTO } from '@src/domain/dtos/product';
import { MessageResponse } from '@src/types/responses';
import { UpdateProductUseCase } from '../../useCases';
import * as Settings from '@src/server/settings';

@Controller()
export class ProductControllerKafka {
  constructor(private readonly service: UpdateProductUseCase) {}

  @MessagePattern(topics.UPDATE_PRODUCT)
  public async update(@Payload() message: MessageResponse<MutualProductDTO>): Promise<void> {
    const { originId, ...product } = message.value;

    console.log('origin: ', originId);

    if (originId !== Settings.STORE_ID) {
      await this.service.cloudUpdate(product);
    }
  }
}
