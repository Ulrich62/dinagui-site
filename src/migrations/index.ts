import * as migration_20260709_122841_initial from './20260709_122841_initial';

export const migrations = [
  {
    up: migration_20260709_122841_initial.up,
    down: migration_20260709_122841_initial.down,
    name: '20260709_122841_initial'
  },
];
