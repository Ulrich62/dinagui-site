import * as migration_20260710_120218_initial from './20260710_120218_initial';
import * as migration_20260710_124434_remove_price from './20260710_124434_remove_price';
import * as migration_20260716_025502_seed_admin from './20260716_025502_seed_admin';

export const migrations = [
  {
    up: migration_20260710_120218_initial.up,
    down: migration_20260710_120218_initial.down,
    name: '20260710_120218_initial',
  },
  {
    up: migration_20260710_124434_remove_price.up,
    down: migration_20260710_124434_remove_price.down,
    name: '20260710_124434_remove_price',
  },
  {
    up: migration_20260716_025502_seed_admin.up,
    down: migration_20260716_025502_seed_admin.down,
    name: '20260716_025502_seed_admin'
  },
];
