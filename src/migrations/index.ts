import * as migration_20260710_120218_initial from './20260710_120218_initial';

export const migrations = [
  {
    up: migration_20260710_120218_initial.up,
    down: migration_20260710_120218_initial.down,
    name: '20260710_120218_initial'
  },
];
