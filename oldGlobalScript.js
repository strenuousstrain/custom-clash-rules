// Define main function (script entry)
/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param prependRule 添加的数组
 */
const prependRule = [
  "DOMAIN-KEYWORD,epicgames,DIRECT",  //epic
  "DOMAIN-SUFFIX,ihop.dpdns.org,DIRECT",  //自用反代 现用域名
  "DOMAIN-SUFFIX,ihop.ccwu.cc,DIRECT",  //自用反代 待用域名
  "DOMAIN-SUFFIX,dolby.dpdns.org,DIRECT",  //luo反代
  "DOMAIN-SUFFIX,liuerao.dpdns.org,DIRECT",  //liuer反代1
  "DOMAIN-SUFFIX,liuer.bbroot.com,DIRECT",  //liuer反代2
  "DOMAIN-SUFFIX,embys.dpdns.org,DIRECT",  //空白反代
  "DOMAIN-SUFFIX,dirige.de5.net,DIRECT",  //蒂日反代(三网)
  "DOMAIN-SUFFIX,255432.cc.cd,DIRECT",  //蒂日反代(移动)
  "DOMAIN-SUFFIX,255432.de5.net,DIRECT",  //蒂日反代(联通)
  "DOMAIN-SUFFIX,ada.6yhy.top,DIRECT",  //a大反代
  "DOMAIN-SUFFIX,emby.noomi.eu.cc,DIRECT",  //通用反代(仅国内)
  "DOMAIN-SUFFIX,fx.emby1.ccwu.cc,DIRECT",  //Fx反代1
  "DOMAIN-SUFFIX,fx.emby2.ccwu.cc,DIRECT",  //Fx反代2
  "DOMAIN-SUFFIX,fx.emby3.ccwu.cc,DIRECT",  //Fx反代3
  "DOMAIN-SUFFIX,lilyemby.cc,DIRECT",  //lily官方反代
  "DOMAIN-SUFFIX,zz.zhouou6.ccwu.cc,DIRECT",  //拾光群友睡觉反代
  "DOMAIN-SUFFIX,1653.us.ci,DIRECT",  //拾光群友吴亦凡反代
  "DOMAIN-SUFFIX,stream-2.miraiemby.com,DIRECT", //Mirai线路2推流地址
  "DOMAIN-SUFFIX,vip1.miraiemby.com,DIRECT",  //Mirai线路2
  "DOMAIN-SUFFIX,a.wedg.top,DIRECT",  //we主线路
  "DOMAIN-SUFFIX,tt.wedg.top,DIRECT",  //we主线路2
  "DOMAIN-SUFFIX,cf.wedg.top,DIRECT",  //we三网直连
  "DOMAIN-SUFFIX,jp.wedg.top,DIRECT",  //we三网直连2
  "DOMAIN-SUFFIX,cmcc.wedg.top,DIRECT",  //we移动线路
  "DOMAIN-SUFFIX,yz.200036.xyz,DIRECT",  //叶子测试线路
  "DOMAIN-SUFFIX,emby.taotu.ink,DIRECT", //乐蛙影视站线路
  "DOMAIN-SUFFIX,saodu6.top,DIRECT",  //MDL公益线路电信一
  "DOMAIN-SUFFIX,saodu6.cn,DIRECT",  //MDL公益线路电信二
  "DOMAIN-SUFFIX,5165163.xyz,DIRECT",  //MDL公益线路联通一
  "DOMAIN-SUFFIX,ty302.saodu.wang,DIRECT",  //MDL天翼302线路
  "DOMAIN-SUFFIX,emby.5625678.xyz,DIRECT",  //Coolgua线路
  "DOMAIN-SUFFIX,ap-cn01.emby.bangumi.ca,DIRECT", //Nya大陆线路1
  "DOMAIN-SUFFIX,ap-cn02.emby.bangumi.ca,DIRECT",  //Nya大陆线路2
  "DOMAIN-SUFFIX,cm.cdn.bgp.yt,DIRECT",  //二次元CF分流3线路
  "DOMAIN-SUFFIX,ct.cdn.bgp.yt,DIRECT",  //二次元VNPT分流4线路
  "DOMAIN-SUFFIX,okemby.wangjunqiang.dev,DIRECT",  //okemby反代2
  "DOMAIN-SUFFIX,okemby.wangjunqiang.indevs.in,DIRECT",  //okemby反代1
  "DOMAIN-SUFFIX,ct.772111.xyz,DIRECT",  //niubi电信直连线路
  "DOMAIN-SUFFIX,cu.772111.xyz,DIRECT",  //niubi联通直连线路
  "DOMAIN-SUFFIX,cm.772111.xyz,DIRECT",  //niubi移动直连线路
  "DOMAIN-SUFFIX,apps.microsoft.com,DIRECT",  //微软商店网页
  "DOMAIN,clash.razord.top,DIRECT",
  "DOMAIN,yacd.haishan.me,DIRECT",
  "DOMAIN,board.zash.run.place,DIRECT",
  "DOMAIN,yacd.metacubex.one,DIRECT",
  "PROCESS-NAME,tixati.exe,DIRECT",
  "PROCESS-NAME,cfst.exe,DIRECT"
];

function main(config) {
  // 把旧规则合并到新规则后面(也可以用其它合并数组的办法)
  let oldrules = config.rules;  // config["rules"]
  config.rules = prependRule.concat(oldrules);
  return config;
}
