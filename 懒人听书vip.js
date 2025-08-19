/***********************************

// ==UserScript==
// @ScriptName        懒人听书[VIP]
// @Author            zocodo
// @UpdateTime        2025-08-19
// @Attention         使用中若有问题请发邮件！
// @Suitable          自行观看“# > ”注释内容
// @Attention         如需引用请注明出处，谢谢合作！
// ==/UserScript==

[rewrite_local]
# > 开屏广告
https?:\/\/us\.l\.qq\.com\/exapp url reject-200
# > 会员
https?:\/\/gzapi\.mting\.info\/yyting\/user\/vipInfo url script-response-body https://raw.githubusercontent.com/zocodo/adwars-rules/refs/heads/main/%E6%87%92%E4%BA%BA%E5%90%AC%E4%B9%A6vip.js

[mitm]

hostname = *.mting.info, us.l.qq.com

***********************************/

var obj = JSON.parse($response.body);
var expireTime = 2071102838000;
if (obj.status === 0) {
  var obj2 = {
    expireTime: expireTime,
    vipRightsLevel: 30,
    payExpireTime: expireTime,
    experienceExpireTime: expireTime,
    subscribeStatus: 1,
    freeExpireTime: expireTime,
    vipUser: true,
    experienceCardExpireTime: 0,
    experienceCardStartTime: 0,
  };
  data = Object.assign(obj.data, obj2);
  obj.data = data;
}

$done({
  body: JSON.stringify(obj),
});