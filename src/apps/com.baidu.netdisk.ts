import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    {
      key: 1,
      name: '百度网盘-容量超限提醒',
      desc: '点击X',
      rules: [
        {
          matches: [
            '[text="容量超限提醒"] - @ImageView[id="com.baidu.netdisk:id/dialog_close" && clickable=true]',
          ],
          fastQuery: true,
          activityIds: ['com.baidu.netdisk.ui.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '百度网盘-空间超限',
      desc: '点击返回',
      rules: [
        {
          matches: [
            '[text*="空间超限"] < * < * + @ImageView[id="com.baidu.netdisk:id/iv_close" && clickable=true]',
          ],
          activityIds: ['com.baidu.netdisk.ui.quota.QuotaLimitActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '百度网盘-体验超级会员',
      desc: '点击X',
      rules: [
        {
          matches: [
            'TextView[text*="体验超级会员"] -2 @ImageView[id="com.baidu.netdisk:id/iv_close" && clickable=true]',
          ],
          activityIds: ['com.baidu.netdisk.ui.MainActivity'],
        },
      ],
    },
  ],
});
