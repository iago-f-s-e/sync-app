import 'dotenv/config';

import { bootstrap } from './server';

console.log('ok')

bootstrap().catch(err => console.error(err));
