/*
 * This file is automatically generated.
 * Run 'pnpm run generate:locales' to update.
 */

import { Faker } from '../faker';
import tr from '../locales/tr';
import en from '../locales/en';

const faker = new Faker({
  locale: 'tr',
  localeFallback: 'en',
  locales: {
    tr,
    en,
  },
});

export = faker;
