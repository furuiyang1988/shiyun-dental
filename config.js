// ============================================================
// 诗韵口腔 · 种植牙计算器 · 配置文件
// 修改此文件即可自定义所有内容
// 修改后刷新页面即可生效
// ============================================================

// ==================== 诊所信息 ====================
var CLINIC_CONFIG = {
  name: "诗韵口腔",
  subtitle: "自由搭配 · 透明定价",
  headerTitle: "选择您的\n种植方案",
  headerSubtitle: "产品 · 技术服务 · 质保 — 三大项自由组合",
  contact: "",          // 诊所联系电话
  logo: "",             // 诊所logo图片路径（可选）
};

// ==================== 产品 - 种植体（国家集采） ====================
var implants = [
  { id:'nobel',      name:'诺贝尔',   brand:'Nobel Biocare',   origin:'🇸🇪 瑞典',  feat:'全球种植牙发明者 · 亲水表面 · 愈合快',             price:7800,  icon:'N',  tag:'高端' },
  { id:'straumann',  name:'士卓曼',   brand:'Straumann',        origin:'🇨🇭 瑞士',  feat:'瑞士精工 · Roxolid材质 · 长期稳定',                price:6500,  icon:'S',  tag:'高端' },
  { id:'osstem',     name:'奥齿泰',   brand:'Osstem',           origin:'🇰🇷 韩国',  feat:'亚洲人适配 · 性价比之王 · 百万例临床',             price:3800,  icon:'O',  tag:'中端' },
  { id:'dentium',    name:'登腾',     brand:'Dentium',          origin:'🇰🇷 韩国',  feat:'SLA表面处理 · 高性价比 · 适应症广',              price:2800,  icon:'D',  tag:'中端' },
  { id:'domestic',   name:'百康特',   brand:'国产集采',         origin:'🇨🇳 中国',  feat:'集采中选品牌 · 质量可靠 · 价格惠民',             price:1800,  icon:'百', tag:'集采' }
];

// ==================== 产品 - 牙冠（国家集采） ====================
var crowns = [
  { id:'lava',    name:'LAVA全瓷冠',     brand:'3M Lava',      origin:'🇺🇸 美国',  feat:'顶级美学 · 强度1400MPa · 前牙首选',      price:3500,  icon:'L',  tag:'高端' },
  { id:'wieland', name:'威兰德全瓷冠',   brand:'Wieland',      origin:'🇩🇪 德国',  feat:'高透美学 · 德国精工 · 内外兼修',          price:2500,  icon:'W',  tag:'中高端' },
  { id:'upcera',  name:'爱尔创全瓷冠',   brand:'Upcera',       origin:'🇨🇳 中国',  feat:'国产高端 · 性价比之选 · 集采中选',         price:1500,  icon:'爱', tag:'集采' },
  { id:'pfm',     name:'烤瓷冠',         brand:'钴铬合金',      origin:'🇨🇳 中国',  feat:'经济实惠 · 后牙适用 · 基础款',            price:800,   icon:'烤', tag:'基础' }
];

// ==================== 技术服务 - 医生（分级调控） ====================
var doctors = [
  { id:'zhang', name:'张伟', title:'主任医师',   years:25,  cases:5000,  spec:'全口种植 · 即刻负重 · 骨增量',             baseFee:3500, avatar:'张' },
  { id:'li',    name:'李明', title:'副主任医师', years:15,  cases:2000,  spec:'数字化导板 · 前牙美学 · 微创种植',         baseFee:2500, avatar:'李' },
  { id:'wang',  name:'王芳', title:'主治医师',    years:8,   cases:800,   spec:'常规种植 · 微创种植 · 牙周治疗',            baseFee:1500, avatar:'王' }
];

// ==================== 技术服务 - 种植方案（医生基础费上叠加） ====================
var techniques = [
  { id:'digital',    name:'🎯 数字化导板精准种植',  desc:'CBCT+口扫+3D打印导板，精准到0.1mm，微创出血少，恢复快',  price:1500 },
  { id:'navigation', name:'🧭 3D打印手术导板辅助', desc:'术前模拟+定制导板，定位准确，手术时间缩短30%',               price:1000 },
  { id:'standard',   name:'✋ 标准种植',             desc:'经验丰富的医生凭手感操作，适合常规简单病例',                  price:0    }
];

// ==================== 技术服务 - 附加术式 ====================
var addons = [
  { id:'immediate',  name:'⚡ 即刻种植（即拔即种）',  desc:'拔牙当天植入种植体，减少就诊次数与等待周期',              price:2000 },
  { id:'bonegraft',  name:'🦴 骨增量（植骨）',        desc:'骨量不足患者的必备术式，为种植体打好地基',                price:3000 },
  { id:'sinus',      name:'🔼 上颌窦提升',            desc:'上颌后牙区骨高度不足时的必要术式',                      price:3000 },
  { id:'sedation',   name:'😴 静脉镇静（舒适化治疗）', desc:'全程浅眠状态，无恐惧感，醒来已完成手术',                price:800  },
  { id:'aftercare',  name:'💊 术后修复护理套装',       desc:'含医用漱口水、冰敷袋、护理指南，加速愈合',              price:298  }
];

// ==================== 质保 - 产品质保选项 ====================
var productWarrantyOpts = [
  { id:'pw5',    label:'基础5年产品质保',   badge:'含',  price:0    },
  { id:'pw10',   label:'延长至10年产品质保', badge:'推荐', price:800  },
  { id:'pwlife', label:'终身产品质保',       badge:'顶配', price:2000 }
];

// ==================== 质保 - 医疗质保选项 ====================
var medicalWarrantyOpts = [
  { id:'mw1',  label:'基础1年医疗质保',   badge:'含',  price:0    },
  { id:'mw3',  label:'延长至3年医疗质保', badge:'推荐', price:1500 },
  { id:'mw5',  label:'延长至5年医疗质保', badge:'顶配', price:2500 }
];

// ==================== 页面文案配置 ====================
var TEXT_CONFIG = {
  policyBanner: '国家集采 · 耗材0差价  |  医疗服务分级调控价\n产品价格与国家集采目录一致，技术服务按国家指导价执行',
  productDesc: '植体+配件+牙冠，价格与国家集采目录一致，门诊不加一分钱',
  techDesc: '选医生 → 选方案 → 选附加术式，按国家分级调控定价',
  warrantyDesc: '产品质保 + 医疗质保，自由选择保障时长',
  trustBar: '医疗质保承诺：医生技术原因导致失败，技术服务费全额退还，免费重做',
  receiptFooter: '到院出示方案单，享免费CBCT检查',
  qrHint: '扫码预约',
};
