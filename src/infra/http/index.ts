import { Module } from '@nestjs/common';
import { AuthModule } from '@src/modules/auth';
import { HttpService } from './services';

@Module({
  imports: [AuthModule],
  exports: [HttpService],
  providers: [HttpService]
})
export class HttpModule {}
