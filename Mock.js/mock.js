var obj = {'aa':'11', 'bb':'22', 'cc':'33', 'dd':'44'};

// Mock响应模板
Mock.mock('http://test.com/api/default', {
  "user|1-3": [{   // 随机生成1到3个数组元素
    'name': '@cname',  // 中文名称
    'id|+1': 88,    // 属性值自动加 1，初始值为88
    'age|18-28': 0,   // 18至28以内随机整数, 0只是用来确定类型
    'birthday': '@date("yyyy-MM-dd")',  // 日期
    'city': '@city(true)',   // 中国城市
    'color': '@color',  // 16进制颜色
    'isMale|1': true,  // 布尔值
    'isFat|1-2': true,  // true的概率是1/3
    'fromObj|2': obj,  // 从obj对象中随机获取2个属性
    'fromObj2|1-3': obj,  // 从obj对象中随机获取1至3个属性
    'brother|1': ['jack', 'jim'], // 随机选取 1 个元素
    'sister|+1': ['jack', 'jim', 'lily'], // array中顺序选取元素作为结果
    'friends|2': ['jack', 'jim'] // 重复2次属性值生成一个新数组
  },{
    'gf': '@cname'
  }]
});

Mock.mock('http://test.com/api/one', 'get', function() {
  return Mock.mock({
    "user|1-3": [{
      'name': '@cname',
      'id|+10': 88
    }
    ]
  });
});

Mock.mock('http://test.com/api/two', function(options) {
  console.log(options);
  return Mock.mock({
    "user|1-3": [{
      'name': '@cname',
      'id|+1': 88
    }
    ]
  });
});

// 设置4秒后再响应
// Mock.setup({ timeout: 4000 });

// 设置1秒至4秒间响应
Mock.setup({ timeout: '1000-3000' });