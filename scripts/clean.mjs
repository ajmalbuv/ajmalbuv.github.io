#!/usr/bin/env node

import { rmSync } from 'node:fs';

const dirs = ['dist', '.astro', 'node_modules', 'bun.lock'];

for (const dir of dirs) {
  rmSync(dir, {
    recursive: true,
    force: true,
  });
}
