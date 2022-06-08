import { Provider } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

export const provider: Provider = {
  provide: 'SYNC_CONSUMER',
  useFactory: async (client: ClientKafka) => client.connect(),
  inject: ['KAFKA_CONNECTION']
};
