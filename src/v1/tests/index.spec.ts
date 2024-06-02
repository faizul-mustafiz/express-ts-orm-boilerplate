/**
 * * During the test we are going to use test environment config
 * * as mongo will use auction_test db and redis will use test db.
 * * for local redis use redis db index 15
 * @example redis://redis:6379/15
 * * please set the test env variable pointing to your test db connection string
 */
process.env.NODE_ENV = 'testing';

import * as ExampleTest from './example.spec';

export { ExampleTest };
