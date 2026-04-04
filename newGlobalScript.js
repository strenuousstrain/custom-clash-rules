const NEW_RULE_PROVIDERS = {
  "applications": {
    "type": "http",
    "behavior": "classical",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/applications.yaml",
    "interval": 86400
  },
  "emos_proxy": {
    "type": "http",
    "behavior": "classical",
    "format": "yaml",
    "url": "https://raw.githubusercontent.com/binaryu/emos-proxy-rule/main/rules/emos-mihomo.yaml",
    "path": "./ruleset/emos-mihomo.yaml",
    "interval": 86400
  },
  "custom": {
    "type": "http",
    "behavior": "classical",
    "format": "yaml",
    "url": "https://raw.githubusercontent.com/strenuousstrain/custom-clash-rules/main/mihomo.yaml",
    "path": "./ruleset/mihomo.yaml",
    "interval": 86400
  },
  "private": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/private.yaml",
    "interval": 86400
  },
  "reject": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/reject.yaml",
    "interval": 86400
  },
  "direct": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/direct.yaml",
    "interval": 86400
  },
  "icloud": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/icloud.yaml",
    "interval": 86400
  },
  "apple": {
    "type": "http",
    "behavior": "domain",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/apple.yaml",
    "interval": 86400
  },
  "lancidr": {
    "type": "http",
    "behavior": "ipcidr",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/lancidr.yaml",
    "interval": 86400
  },
  "cncidr": {
    "type": "http",
    "behavior": "ipcidr",
    "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/cncidr.yaml",
    "interval": 86400
  }
};

const NEW_RULES = [
  "RULE-SET,emos_proxy,DIRECT",  //emos反代规则集 
  "RULE-SET,custom,DIRECT",      //自用分流
  "RULE-SET,applications,DIRECT",
  "RULE-SET,private,DIRECT",
  "RULE-SET,reject,REJECT",
  "RULE-SET,icloud,DIRECT",
  "RULE-SET,apple,DIRECT",
  "RULE-SET,direct,DIRECT",
  "RULE-SET,lancidr,DIRECT",
  "RULE-SET,cncidr,DIRECT",
];

function main(config) {
  console.log("🚀 开始执行全局脚本");
  // 检查 config 是否存在
  if (!config) return config;
    
  // 处理 rule-providers
  // 检查是否不存在、为空或为 null
  if (!config["rule-providers"] || typeof config["rule-providers"] !== "object") {
    // 如果没有，直接赋值为我们定义的新规则集
    config["rule-providers"] = { ...NEW_RULE_PROVIDERS };
    console.log(`✅ 初始化并添加了 ${Object.keys(NEW_RULE_PROVIDERS).length} 个 rule-providers`);
  } else {
    // 如果已存在，我们需要将新的放在最前面
    const oldProviders = config["rule-providers"];
    // 用来存放旧配置里没有的新规则
    const newProviders = {}; 
    
    // 遍历新的 providers，如果旧配置里【没有】这个名字，才把它加入“待添加”列表
    for (const key in NEW_RULE_PROVIDERS) {
      if (!oldProviders.hasOwnProperty(key)) {
        newProviders[key] = NEW_RULE_PROVIDERS[key];
      } else {
        console.log(`ℹ️ 跳过重复规则集: ${key} (保留旧配置)`);
      }
    }
    
    // 覆盖原配置
    config["rule-providers"] = { ...newProviders, ...oldProviders };
    const addedCount = Object.keys(newProviders).length;
    console.log(`✅ 在最前端新增 ${addedCount} 个规则集，保留了所有原配置`);
  }

  // 处理 rules
  if (!Array.isArray(config.rules)) {
    config.rules = [];
  }
  
// 定义指纹提取函数：将 "RULE-SET,apple,DIRECT" 转换为 "RULE-SET,APPLE"
  const getFingerprint = (ruleStr) => {
    if (typeof ruleStr !== 'string') return '';
    const parts = ruleStr.split(',').map(p => p.trim().toUpperCase());
    // 如果有两部分以上，取前两部；否则取第一部分（如 MATCH）
    return parts.length > 2 ? `${parts[0]},${parts[1]}` : parts[0];
  };

  // 提取现有规则的“指纹库”
  const existingFingerprints = config.rules.map(getFingerprint);

  // 过滤：只保留指纹库里没有的新规则
  const toAdd = NEW_RULES.filter(rule => {
    const newFingerprint = getFingerprint(rule);
    const isDuplicate = existingFingerprints.includes(newFingerprint);
    
    if (isDuplicate) {
      // 这里的逻辑：如果前两段（对应 DOMAIN 或其他）或一段（对应 MATCH 或 FINAL）重复了，就跳过
      console.log(`ℹ️ 跳过重复规则 (前缀匹配): ${newFingerprint}`);
      return false;
    }
    return true;
  });

  // 执行插入：将真正需要新增的规则一次性推入数组开头
  if (toAdd.length > 0) {
    config.rules.unshift(...toAdd);
    console.log(`✅ 在最前端成功添加规则 ${toAdd.length} 条`);
  } else {
    console.log("⚠️ 无需添加规则（匹配后发现均已存在）");
  }

  console.log("🎉 配置更新完成");
  return config;
}