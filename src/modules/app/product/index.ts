import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';

import * as Controllers from './controllers';
import * as UseCase from './useCases';

const controllers = Object.values(Controllers);
const useCases = Object.values(UseCase);

@Module({
  imports: [InfraModule],
  providers: useCases,
  controllers
})
export class ProductModule {}

export const productChildren: RouteTree = {
  path: '/product',
  module: ProductModule
};
