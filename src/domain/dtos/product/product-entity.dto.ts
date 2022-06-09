import { MutualProductDTO } from './mutual-product.dto';
import { SpecificProductDTO } from './specific-product.dto';

export type ProductEntity = MutualProductDTO & SpecificProductDTO;
