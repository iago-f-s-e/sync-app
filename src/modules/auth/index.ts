import { Module } from '@nestjs/common';
import { RouteTree } from '@nestjs/core';
import { Jwt } from './config';

import * as Services from './services';

const services = Object.values(Services);

@Module({
  imports: [Jwt],
  exports: services,
  providers: services
})
export class AuthModule {}

export const authPrefix: RouteTree = {
  path: '/auth',
  module: AuthModule
};
