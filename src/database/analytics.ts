// import Sequelize from 'sequelize';

// import { EREN_DB_DATABASE,EREN_DB_PASSWORD,EREN_DB_HOST,EREN_DB_PORT,EREN_DB_USER, NODE_ENV } from '../config';

// import { logger } from '../utils/logger';

// const sequelize = new Sequelize.Sequelize(EREN_DB_DATABASE, EREN_DB_USER, EREN_DB_PASSWORD, {
//   dialect: 'mssql',
//   host: EREN_DB_HOST,
//   port: EREN_DB_PORT as any,
//   pool: {
//     min: 0,
//     max: 5,
//   },
//   dialectOptions: {
//     multipleStatements: true,
//     options: {
//       requestTimeout: 1000000,
//     },
//   },
//   logQueryParameters: NODE_ENV === 'development',
//   logging: (query, time) => {
//     logger.info(time + 'ms' + ' ' + query);
//   },
//   benchmark: true,
// });

// sequelize
//   .authenticate()
//   .then(async () => {
//     console.log('Connected to database shmarket');
//   })
//   .catch(() => {
//     console.log('Not connected to database shmarket');
//   });

// export const DB = {
//   Sequelize, // library
//   sequelize, // connection instance (RAW queries)
// };
import { Sequelize } from '@sequelize/core';
import { MySqlDialect } from '@sequelize/mysql';

import {
  EREN_DB_DATABASE,
  EREN_DB_PASSWORD,
  EREN_DB_HOST,
  EREN_DB_PORT,
  EREN_DB_USER,
  NODE_ENV,
} from '../config';
import { logger } from '../utils/logger';
const port = Number(EREN_DB_PORT);

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: EREN_DB_DATABASE,
  user: EREN_DB_USER,
  password: EREN_DB_PASSWORD,
  host: EREN_DB_HOST,
  port: port,
  pool: {
    min: 0,
    max: 5,
  },

  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

sequelize
  .authenticate()
  .then(async () => {
    console.log('Connected to database eren-db');
  })
  .catch((error) => {
    console.error('Not connected to database eren-db', error);
  });

export const DB = {
  Sequelize, // library
  sequelize, // connection instance (RAW queries)
};
