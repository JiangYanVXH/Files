# 电信套餐查询 ‼️无效
# cron "20 23 * * *" script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/telecomInfinity.js, enabled=true, tag=电信套餐查询

# 叮咚买菜
# cron "10 6 8 * * *" script-path=https://raw.githubusercontent.com/chavyleung/scripts/master/mcdd/mcdd.js,tag=叮咚买菜

# 叮咚农场
cron "1 8,12,17 * * *" script-path=https://raw.githubusercontent.com/iepngs/Script/master/dingdong/index.js,tag=叮咚养鱼

# 来客有礼
cron "18 0 * * *" script-path=https://raw.githubusercontent.com/Sunert/Scripts/master/Task/lkyl.js, enabled=true, tag=来客有礼

# 京豆变动通知
cron "5 9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_bean_change.js, tag=京豆变动通知

# 京东国际环球挑战赛
cron "2 9 8-31 3 *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_global.js, tag=京东国际环球挑战赛

# 城城分现金
# cron "12 0 19-24 3 *" script-path=https://raw.githubusercontent.com/i-chenzhe/qx/main/z_city_cash.js, tag=城城分现金

# 东东爱消除
# cron "0 * * * *" script-path=https://qxzy.top/rules/QuantumultX/js/jd_xxl.js, enabled=true, tag=东东爱消除

# 京东排行榜
cron "11 9,10 * * *" script-path=https://raw.githubusercontent.com/yangtingxiao/QuantumultX/master/scripts/jd/jd_rankingList.js,tag=京东排行榜

# 领京豆额外奖励
cron "12 7,8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_bean_home.js, tag=领京豆额外奖励

# 京东汽车
cron "10 7,8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_car.js, tag=京东汽车

# 京东汽车兑换
cron "1 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_car_exchange.js, tag=京东汽车兑换

# 签到领现金
cron "7 0-23/4 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_cash.js,tag=签到领现金

# 摇京豆
cron "5 2,4 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_club_lottery.js,tag=摇京豆

# crazyJoy任务
cron "12 7,8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_crazy_joy.js,tag=crazyJoy任务

# 监控crazyJoy分红
# cron "10 12 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_crazy_joy_bonus.js,tag=监控crazyJoy分红

# 东东农场
cron "5 6-18/6 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_fruit.js,tag=东东农场

# 获取互助码
cron "22 13 * * 6" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_get_share_code.js, tag=获取互助码

# 京东国际盲盒
cron "2 9,12,20,21 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_global_mh.js,tag=京东国际盲盒

# 东东工厂
# cron "10 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_jdfactory.js,tag=东东工厂

# 京东赚赚
cron "22 2,4 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_jdzz.js,tag=京东赚赚

# 宠汪汪
cron "15 0-23/2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy.js,tag=京东宠汪汪

# 宠汪汪喂食
cron "15 0-23/1 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_feedPets.js,tag=京东宠汪汪喂食

# 宠汪汪强制为别人助力
# http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力

# 宠汪汪积分兑换奖品
cron "0 0-16/8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_reward.js,tag=宠汪汪积分兑换奖品

# 宠汪汪赛跑
cron "15 10 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_run.js, tag=宠汪汪邀请助力与赛跑助力

# 宠汪汪助力更新Token
http-response ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/addUser\?code= script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_run.js, requires-body=true, timeout=10, tag=宠汪汪助力更新Token

# 宠汪汪助力获取Token
http-request ^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/api\/user\/user\/detail\?openId= script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_run.js, timeout=3600, tag=宠汪汪助力获取Token

# 宠汪汪偷好友积分与狗粮
cron "10 0-21/3 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_steal.js,tag=宠汪汪偷好友积分与狗粮

# 京东快递签到
cron "24 2,4 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_kd.js, tag=京东快递签到

# 摇钱树
cron "3 0-23/2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_moneyTree.js,tag=摇钱树

# 秒秒币
cron "10 8,9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_ms.js,tag=秒秒币

# 点点券
cron "10 2,4,20 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_necklace.js,tag=点点券

# 抽奖机
cron "11 1 * * *" script-path=https://raw.githubusercontent.com/yangtingxiao/QuantumultX/master/scripts/jd/jd_lotteryMachine.js, tag=京东抽奖机

# 东东萌宠
cron "15 6-18/6 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_pet.js,tag=东东萌宠

# 种豆得豆
cron "1 7-21/2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_plantBean.js,tag=种豆得豆

# 全民开红包
cron "1 1,2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_redPacket.js, tag=全民开红包

# 闪购盲盒
cron "20 8,9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_sgmh.js, tag=闪购盲盒

# 进店领豆
cron "8,10 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_shop.js,tag=进店领豆

# 东东小窝
cron "16 12,22 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_small_home.js, tag=东东小窝

# 天天加速
cron "8 0-23/3 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_speed.js,tag=天天加速

# 东东超市
cron "11 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_superMarket.js,tag=东东超市

# 东东超市兑换奖品
cron "3 0 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_blueCoin.js,tag=东东超市兑换奖品

# 赚京豆
cron "10 7,8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_syj.js, tag=赚京豆

# 小米运动
# cron "15 17 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/xmSports.js, tag=小米运动

# 小米运动获取Token
# http-response ^https:\/\/account\.huami\.com\/v2\/client\/login script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/xmSports.js, requires-body=true, timeout=3600, tag=小米运动获取Token

# 天天提鹅
# cron "10 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_daily_egg.js,tag=天天提鹅

# 京喜农场
# cron "0 9,12,18 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_jxnc.js,tag=京喜农场

# 京喜工厂
# cron "10 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_dreamFactory.js,tag=京喜工厂

# 京喜财富岛
# cron "5 0,8,13,19 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_cfd.js,tag=京喜财富岛

# 金融养猪
# cron "12 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_pigPet.js, tag=京东金融养猪猪

# 京东到家
# cron "15 10 8 * * *" script-path=https://raw.githubusercontent.com/barrym-chen/Script/master/jddj/jddj.js, tag=京东到家


# 京东保价
# cron "0 2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_price.js,tag=京东保价

# 京东物流
# cron "0 12 * * *" script-path=https://raw.githubusercontent.com/id77/QuantumultX/master/task/jdWuLiu.js, tag=京东物流

# 取关京东店铺和商品
cron "55 23 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_unsubscribe.js,tag=取关京东店铺商品