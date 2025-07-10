import knex from 'knex';
import config from '../config/knexfile';

export const db = knex(config);
