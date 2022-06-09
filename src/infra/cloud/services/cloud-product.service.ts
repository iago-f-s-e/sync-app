import { Injectable } from '@nestjs/common';
import { propertyMutualProduct, endpoints } from '@src/domain/constants';
import { MutualProductDTO, ProductEntity } from '@src/domain/dtos/product';
import { HttpService } from '@src/infra/http/services';
import { STORE_GROUP_ID } from '@src/server/settings';
import { GenericObject } from '@src/types/global';
import { CloudProduct } from '../dtos';

@Injectable()
export class CloudProductService {
  constructor(private readonly httpService: HttpService) {}

  private getCloudProduct(product: ProductEntity): CloudProduct {
    const arr = Object.entries(product);

    const mutualProduct = arr.reduce<GenericObject>((acc, item) => {
      const [key, value] = item;

      if (!propertyMutualProduct.includes(key)) return acc;

      acc[key] = value;

      return acc;
    }, {}) as MutualProductDTO;

    return { ...mutualProduct, storeGroupId: STORE_GROUP_ID }; // TODO: passar pelo token
  }

  public updateProduct(data: ProductEntity): void {
    const url = `${endpoints.product.UPDATE_PRODUCT}${data.id}`;
    const cloudProduct = this.getCloudProduct(data);

    this.httpService.put(url, cloudProduct).catch(_ => console.error('Tentar novamente'));
  }
}
