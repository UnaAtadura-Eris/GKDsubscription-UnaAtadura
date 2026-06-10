import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dxy.medicinehelper',
  name: '用药助手',
  groups: [
    {
      key: 1,
      name: '新版本更新',
      desc: '点击X',
      rules: [
        {
          matches: [
            '[text="发现新版本"||text*="绑定手机号"] <2 * < * +3 ImageView[clickable=true && visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '绑定手机号',
      desc: '点击X',
      rules: [
        {
          matches: [
            '[text*="绑定手机号"] +4 @ImageView[id="cn.dxy.medicinehelper:id/iv_close" && visibleToUser=true && clickable=true]',
          ],
        },
      ],
    },
  ],
});
