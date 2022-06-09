import { Module } from '@nestjs/common';
import { CloudModule } from './cloud';
import { ContainerModule } from './container';
import { DatabaseModule } from './database';
import { HttpModule } from './http';
import { KafkaModule } from './kafka';
import { RedisModule } from './redis';

@Module({
  imports: [DatabaseModule, KafkaModule, RedisModule, HttpModule, CloudModule, ContainerModule],
  exports: [DatabaseModule, KafkaModule, RedisModule, HttpModule, CloudModule, ContainerModule]
})
export class InfraModule {}
