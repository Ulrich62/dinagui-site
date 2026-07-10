import * as migration_20260710_120218_initial from './20260710_120218_initial';
import * as migration_20260710_124434_remove_price from './20260710_124434_remove_price';

export const migrations = [
  {
    up: migration_20260710_120218_initial.up,
    down: migration_20260710_120218_initial.down,
    name: '20260710_120218_initial',
  },
  {
    up: migration_20260710_124434_remove_price.up,
    down: migration_20260710_124434_remove_price.down,
    name: '20260710_124434_remove_price'
  },
];
