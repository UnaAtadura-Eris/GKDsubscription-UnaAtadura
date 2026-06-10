import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '功能类-自动领取红包',
      desc: '自动领取淘宝红包',
      enable: false,
      fastQuery: true,
      rules: [
        {
          key: 1,
          name: '点击聊天中红包',
          matches: [
            'View[desc="查看红包"] <n @FrameLayout[clickable=true][top>1750]',
          ],
          actionDelay: 10,
          snapshotUrls: [
            // 'https://i.gkd.li/snapshot/1780502739523',
          ],
          activityIds: ['com.taobao.message.activity.ChatActivity'],
        },
        {
          key: 2,
          name: '匹配 weex_render_view (ImageView路径)',
          action: 'click',
          matches: [
            '@ImageView < FrameLayout <3 FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < [vid="weex_render_view"][visibleToUser=true]',
          ],
          actionDelay: 10,
          activityIds: [],
        },
        {
          key: 3,
          name: '匹配关闭按钮',
          action: 'click',
          matches: ['[desc="关闭"][visibleToUser=true]'],
          actionDelay: 5000,
          activityIds: [],
        },
        {
          key: 4,
          name: '匹配红包消息',
          action: 'click',
          matches: ['[desc="红包"][visibleToUser=true]'],
          actionDelay: 10,
          activityIds: [],
        },
        {
          key: 5,
          name: '匹配 weex_render_view (FrameLayout路径变体)',
          action: 'click',
          matches: [
            '@FrameLayout < FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < [vid="weex_render_view"][visibleToUser=true]',
          ],
          actionDelay: 5000,
          activityIds: [],
        },
      ],
    },
  ],
});
