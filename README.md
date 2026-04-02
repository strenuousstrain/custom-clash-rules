# 简介

自用 clash 分流规则集与全局扩展脚本，不定期更新。

## 规则集链接

- https://raw.githubusercontent.com/strenuousstrain/custom-clash-rules/main/mihomo.yaml

## 使用方法

<details>
<summary>clash</summary>

```yaml
rule-providers:
  applications:
    type: http
    behavior: classical
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt
    path: ./ruleset/applications.yaml
    interval: 86400
  emos_proxy:
    type: http
    behavior: classical
    format: yaml
    url: https://raw.githubusercontent.com/binaryu/emos-proxy-rule/main/rules/emos-mihomo.yaml
    path: ./ruleset/emos-mihomo.yaml
    interval: 86400
  private:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt
    path: ./ruleset/private.yaml
    interval: 86400
  reject:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt
    path: ./ruleset/reject.yaml
    interval: 86400
  direct:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt
    path: ./ruleset/direct.yaml
    interval: 86400
  icloud:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt
    path: ./ruleset/icloud.yaml
    interval: 86400
  apple:
    type: http
    behavior: domain
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt
    path: ./ruleset/apple.yaml
    interval: 86400
  lancidr:
    type: http
    behavior: ipcidr
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt
    path: ./ruleset/lancidr.yaml
    interval: 86400
  cncidr:
    type: http
    behavior: ipcidr
    url: https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt
    path: ./ruleset/cncidr.yaml
    interval: 86400

rules:
  - RULE-SET,applications,DIRECT
  - RULE-SET,emos_proxy,DIRECT
  - RULE-SET,private,DIRECT
  - RULE-SET,reject,DIRECT
  - RULE-SET,direct,DIRECT
  - RULE-SET,icloud,DIRECT
  - RULE-SET,apple,DIRECT
  - RULE-SET,lancidr,DIRECT
  - RULE-SET,cncidr,DIRECT
```

</details>

## 注意事项

- 本项目中的规则集和脚本仅供参考，不保证其准确性和稳定性。