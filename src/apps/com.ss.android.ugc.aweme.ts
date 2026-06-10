import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '广告-上滑继续看视频',
      desc: '点击不感兴趣',
      enable: false,
      rules: [
        {
          matches: [
            'FlattenUIText[text="上滑继续看视频"] -6 @*[text="不感兴趣"][clickable=true]',
          ],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-标题含广告',
      desc: '点击首页跳过广告',
      enable: false,
      rules: [
        {
          matches: [
            'TextView[text*=" 广告" && id="com.ss.android.ugc.aweme:id/desc" && visibleToUser=true]',
            '@FrameLayout[clickable=true] TextView[text="首页"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-推荐短剧',
      desc: '点击首页刷新，从而跳过广告',
      enable: false,
      rules: [
        {
          matches: [
            'TextView[text*="广告"] [id="com.ss.android.ugc.aweme:id/desc"]',
            '@FrameLayout[clickable=true] TextView[text="首页"]',
          ],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '全屏广告-推荐直播',
      desc: '点击首页刷新，从而跳过广告',
      enable: false,
      rules: [
        {
          matches: [
            'TextView[text*="直播"&& visibleToUser=true && text.length>5]',
            '@FrameLayout[clickable=true] TextView[text="首页"]',
          ],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '更新提示+内测邀请自动关闭',
      enable: true,
      fastQuery: true,
      actionMaximum: 1,
      resetMatch: 'app',
      snapshotUrls: [
        // 'https://i.gkd.li/import/12534016',
        // 'https://i.gkd.li/import/13328599',
      ],
      activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
      rules: [
        {
          matches: [
            '@[text="以后再说"] +2 [text="立即升级"]',
            '[text="新版本内测邀请"] +2 * >2 * @[text="以后再说"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '全屏广告-上滑继续看视频',
      desc: '上滑继续看视频',
      enable: false,
      rules: [
        {
          action: 'back',
          matches: ['[text="上滑继续看视频"&& visibleToUser=true]'],
        },
      ],
    },
    {
      key: 7,
      name: '广告-绿色定位小图标',
      rules: [
        {
          action: 'back',
          matches: [
            '@ImageView[width=70][height=70][visibleToUser=true] < LinearLayout < LinearLayout < LinearLayout < FrameLayout < LinearLayout',
          ],
          //   snapshotUrls: ['https://i.gkd.li/snapshot/1777293747095'],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
  ],
});
