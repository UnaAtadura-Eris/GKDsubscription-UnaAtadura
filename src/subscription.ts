import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1587,
  name: 'UnaAtadura的订阅',
  version: 0,
  author: 'UnaAtadura',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/UnaAtadura-Eris/GKDsubscription-UnaAtadura',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
