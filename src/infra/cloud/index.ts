import { Module } from '@nestjs/common';
import { HttpModule } from '../http';

import * as Services from './services';

const services = Object.values(Services);

@Module({
  imports: [HttpModule],
  exports: services,
  providers: services
})
export class CloudModule {}
