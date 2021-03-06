import 'dotenv/config';

import { DataSource } from 'typeorm';

import * as Settings from '@src/server/settings';

const dataSource = new DataSource({
  type: 'mssql',
  host: 'localhost',
  migrationsTableName: 'seeds_migrations',
  port: Settings.DB_PORT,
  database: Settings.DB_NAME,
  username: Settings.DB_USER,
  password: Settings.DB_PASS,
  logging: Settings.DB_LOGGING,
  entities: [Settings.DB_PATH_ENTITIES],
  migrations: [Settings.DB_PATH_SEEDS],
  options: {
    connectTimeout: Settings.DB_TIMEOUT,
    encrypt: Settings.DB_ENCRYPT
  }
});

export default dataSource;
