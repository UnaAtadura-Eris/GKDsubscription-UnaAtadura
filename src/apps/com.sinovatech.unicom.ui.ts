import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '中国联通-首页福利弹窗',
      desc: '点击X',
      rules: [
        {
          matches: [
            '[text="广告"] +2 @Image[clickable=true && visibleToUser=true]',
          ],
          activityIds: ['com.sinovatech.unicom.basic.ui.activity.MainActivity'],
        },
      ],
    },
  ],
});
