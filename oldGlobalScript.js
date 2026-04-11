// Define main function (script entry)
/**
 * 配置中的规则"config.rules"是一个数组，通过新旧数组合并来添加
 * @param prependRule 添加的数组
 */
const prependRule = [
  "DOMAIN-KEYWORD,lyezi,DIRECT",  //叶子线路
  "DOMAIN-KEYWORD,epicgames,DIRECT",  //epic
  "DOMAIN-SUFFIX,ihop.dpdns.org,DIRECT",  //自用反代 HR版
  "DOMAIN-SUFFIX,ihop.us.ci,DIRECT",  //自用反代 玛卡巴卡版
  "DOMAIN-SUFFIX,dolby.dpdns.org,DIRECT",  //luo反代
  "DOMAIN-SUFFIX,liuerao.dpdns.org,DIRECT",  //aoao反代1
  "DOMAIN-SUFFIX,liuer.bbroot.com,DIRECT",  //aoao反代2
  "DOMAIN-SUFFIX,embys.dpdns.org,DIRECT",  //空白反代
  "DOMAIN-SUFFIX,dirige.de5.net,DIRECT",  //蒂日反代(三网)
  "DOMAIN-SUFFIX,255432.cc.cd,DIRECT",  //蒂日反代(移动)
  "DOMAIN-SUFFIX,255432.de5.net,DIRECT",  //蒂日反代(联通)
  "DOMAIN-SUFFIX,ada.6yhy.top,DIRECT",  //a大反代
  "DOMAIN-SUFFIX,emby.noomi.eu.cc,DIRECT",  //通用反代(仅国内)
  "DOMAIN-SUFFIX,fx.emby1.ccwu.cc,DIRECT",  //Fx反代1
  "DOMAIN-SUFFIX,fx.emby2.ccwu.cc,DIRECT",  //Fx反代2
  "DOMAIN-SUFFIX,fx.emby3.ccwu.cc,DIRECT",  //Fx反代3
  "DOMAIN-SUFFIX,duckoj.com,DIRECT",  //Lily服群友蔡徐坤反代
  "DOMAIN-SUFFIX,sbz.mac89.com,DIRECT", //Mirai线路2推流地址
  "DOMAIN-SUFFIX,mi2.miraiemby.com,DIRECT", //Mirai线路2
  "DOMAIN-SUFFIX,fd1.kingemby.xyz,DIRECT",  //小虾米公益官方反代
  "DOMAIN-SUFFIX,yz.200036.xyz,DIRECT",  //叶子测试线路
  "DOMAIN-SUFFIX,saodu6.top,DIRECT",  //MDL公益线路电信一
  "DOMAIN-SUFFIX,saodu6.cn,DIRECT",  //MDL公益线路电信二
  "DOMAIN-SUFFIX,5165163.xyz,DIRECT",  //MDL公益线路联通一
  "DOMAIN-SUFFIX,v4.iemby.cn,DIRECT",  //不吃香菜v4
  "DOMAIN-SUFFIX,e.iemby.cn,DIRECT",  //不吃香菜v6
  "DOMAIN-SUFFIX,ap-cn01.emby.bangumi.ca,DIRECT", //Nya大陆线路1
  "DOMAIN-SUFFIX,ap-cn02.emby.bangumi.ca,DIRECT",  //Nya大陆线路2
  "DOMAIN-SUFFIX,cm.cdn.bgp.yt,DIRECT",  //二次元CF线路
  "DOMAIN-SUFFIX,okemby.wangjunqiang.dev,DIRECT",  //okemby反代2
  "DOMAIN-SUFFIX,okemby.wangjunqiang.indevs.in,DIRECT",  //okemby反代1
  "DOMAIN-SUFFIX,ok.1653.us.ci,DIRECT",  //okemby反代6
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
