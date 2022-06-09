import { Injectable } from '@nestjs/common';
import { propertyMutualProduct, endpoints } from '@src/domain/constants';
import { ProductEntity } from '@src/domain/dtos/product';
import { HttpService } from '@src/infra/http/services';
import { GenericObject } from '@src/types/global';

@Injectable()
export class CloudProductService {
  constructor(private readonly httpService: HttpService) {}

  private getCloudProduct(product: ProductEntity): GenericObject {
    const arr = Object.entries(product);

    return arr.reduce<GenericObject>((acc, item) => {
      const [key, value] = item;

      if (!propertyMutualProduct.includes(key)) return acc;

      acc[key] = value;

      return acc;
    }, {});
  }

  public updateProduct(data: ProductEntity): void {
    const url = `${endpoints.product.UPDATE_PRODUCT}${data.id}`;
    const cloudProduct = this.getCloudProduct(data);

    this.httpService.put(url, cloudProduct).catch(_ => console.error('Tentar novamente'));
  }
}
