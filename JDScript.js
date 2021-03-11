# IOS Loon Task&Cookies配置 By LXK9301
# TG通知频道 (https://t.me/jdfruit)
# Loon的Task&Cookies脚本订阅链接：https://raw.githubusercontent.com/Tartarus2014/Loon-Script/master/JD.conf
# 使用方法：打开APP，顶部的配置 -> 脚本 -> 订阅脚本- > 点击右上角+号 -> 添加url链接

hostname = api.m.jd.com, wq.jd.com, draw.jdfcloud.com, jdjoy.jd.com, account.huami.com

# 获取Cookie
http-request https:\/\/api\.m\.jd\.com\/client\.action.*functionId=signBean(Index|GroupStageIndex) max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, tag=京东
 
# 京豆变动通知
cron "5 9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_bean_change.js, tag=京豆变动通知

# 京东国际环球挑战赛
cron 2 9 8-31 3 * https://jdsharedresourcescdn.azureedge.net/jdresource/jd_global.js

# 领京豆额外奖励
cron "12 7 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_bean_home.js, tag=领京豆额外奖励

# 东东超市兑换奖品
# cron "0 0 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_blueCoin.js,tag=东东超市兑换奖品

# 京东汽车
cron "10 7 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_car.js, tag=京东汽车

# 京东汽车兑换
# cron "0 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_car_exchange.js, tag=京东汽车兑换

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

# 宠汪汪🐕喂食
cron "15 0-23/1 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_feedPets.js,tag=京东宠汪汪喂食

# 宠汪汪强制为别人助力
http-request ^https:\/\/draw\.jdfcloud\.com\/\/common\/pet\/enterRoom\/h5\?invitePin=.*(&inviteSource=task_invite&shareSource=\w+&inviteTimeStamp=\d+&openId=\w+)?&reqSource=weapp|^https:\/\/draw\.jdfcloud\.com(\/mirror)?\/\/pet\/helpFriend\?friendPin script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_joy_help.js, requires-body=true, timeout=3600, tag=宠汪汪强制为别人助力

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

# 京东摇钱树
cron "3 0-23/2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_moneyTree.js,tag=京东摇钱树

# 京东秒秒币
cron "10 7,9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_ms.js,tag=京东秒秒币

# 点点券
cron "10 2,4,20 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_necklace.js,tag=点点券

# 女装盲盒抽京豆
# cron "0 7 19-25 2 *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_nzmh.js,tag=女装盲盒

# 东东萌宠
cron "15 6-18/6 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_pet.js,tag=东东萌宠

# 京东种豆得豆
cron "1 7-21/2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_plantBean.js,tag=京东种豆得豆

# 京东保价
cron "0 2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_price.js,tag=京东保价

# 京东全民开红包
cron "1 1,2 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_redPacket.js, tag=京东全民开红包

# 闪购盲盒
cron "20 8,9 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_sgmh.js, tag=闪购盲盒

# 进店领豆
cron "4,5 0 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_shop.js,tag=进店领豆

# 东东小窝
cron "16 22 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_small_home.js, tag=东东小窝

# 天天加速
cron "8 0-23/3 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_speed.js,tag=京东天天加速

# 东东超市
cron "11 * * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_superMarket.js,tag=东东超市

# 赚京豆
cron "10 7,8 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_syj.js, tag=赚京豆

# 取关京东店铺和商品
cron "55 23 * * *" script-path=https://jdsharedresourcescdn.azureedge.net/jdresource/jd_unsubscribe.js,tag=取关京东店铺商品
