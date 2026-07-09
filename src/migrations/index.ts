import * as migration_20260709_135653_initial from './20260709_135653_initial';

export const migrations = [
  {
    up: migration_20260709_135653_initial.up,
    down: migration_20260709_135653_initial.down,
    name: '20260709_135653_initial'
  },
];
