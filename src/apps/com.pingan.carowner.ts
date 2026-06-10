import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.carowner',
  name: '平安车主',
  groups: [
    {
      key: 1,
      name: '广告-升级/中浮窗广告',
      desc: '点×',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.pingan.carowner.activity.MainActivity',
          matches:
            'ImageView[vid="ad_cancel"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
