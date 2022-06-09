import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import * as Controllers from './controllers';

const controllers = Object.values(Controllers);

@Module({
  controllers
})
export class ProductModule {}

export const productChildren: RouteTree = {
  path: '/product',
  module: ProductModule
};
