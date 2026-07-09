import * as migration_20260709_100149_initial from './20260709_100149_initial';

export const migrations = [
  {
    up: migration_20260709_100149_initial.up,
    down: migration_20260709_100149_initial.down,
    name: '20260709_100149_initial'
  },
];
