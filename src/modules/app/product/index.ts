import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { InfraModule } from '@src/infra';
import * as Controllers from './controllers';

const controllers = Object.values(Controllers);

@Module({
  imports: [InfraModule],
  controllers
})
export class ProductModule {}

export const productChildren: RouteTree = {
  path: '/product',
  module: ProductModule
};
