import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';
import { appStoreModule } from './AppStoreModule';

export const store = createStoreon([
  appStoreModule,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
]);
