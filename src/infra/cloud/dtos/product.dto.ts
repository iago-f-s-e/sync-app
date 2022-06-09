import { MutualProductDTO } from '@src/domain/dtos/product';

export type CloudProduct = MutualProductDTO & {
  storeGroupId: number;
};
