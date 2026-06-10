import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '功能类-下单成功后弹窗',
      desc: '点击关闭[X]',
      enable: false,
      rules: [
        {
          matches: ['TextView[text*="下单成功"]', '@Button[text="关闭弹窗"]'],
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageMaskActivity'],
        },
      ],
    },
  ],
});
