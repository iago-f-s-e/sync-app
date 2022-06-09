import { Nil } from '@src/types/global';

export type SpecificProductDTO = {
  realQuantity?: number | Nil;
  accountingQuantity?: number | Nil;
  wholesaleRetailQuantity?: number | Nil;
  price: number;
  newPrice: number;
  wholesaleValue?: number | Nil;
  newWholesaleValue?: number | Nil;
  shelfDescription?: string | Nil;
  activeDescription?: string | Nil;
  taxSituationDescription?: string | Nil;
  taxationCode: string;
  deleteProductLoyalty?: boolean | Nil;
  isActive?: boolean | Nil;
  updateDate?: Date | Nil;
};
