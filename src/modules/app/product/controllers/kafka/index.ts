import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { topics } from '@src/domain/constants';
import { MutualProductDTO } from '@src/domain/dtos/product';
import { MessageResponse } from '@src/types/responses';
import { UpdateProductUseCase } from '../../useCases';
import * as Settings from '@src/server/settings';

@Controller()
export class KafkaProductController {
  constructor(private readonly service: UpdateProductUseCase) {}

  @MessagePattern(topics.UPDATE_PRODUCT)
  public update(@Payload() message: MessageResponse<MutualProductDTO>): void {
    const { originId, ...product } = message.value;

    if (originId !== Settings.STORE_ID) {
      this.service.cloudUpdate(product).catch(err => console.error(err));
    }
  }
}
