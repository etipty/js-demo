# 相关文档
- CMD模块定义及相关规范https://github.com/seajs/seajs/issues/242
- SeaJS相关API https://github.com/seajs/seajs/issues/266

# 改写RequireJS demo
```javascript
/**
 * Created by jiavan on 16-3-27.
 * main.js
 */
seajs.config({
    base: './js/sea_module', //配置模块根目录
    alias: {}
});

//启动主模块
seajs.use('math', function (math) {
    math.add(1, 2);
});

/*
多模块
seajs.use(['mod1', 'mod2'], function (mod1, mod2) {....});
*/
```

```javascript
/**
 * Created by jiavan on 16-3-27.
 * math.js 
 * 按照CMD规范写的一个相加模块，并暴露add接口
 */
define(function (require, exports, module) {
    var print = require('print');
    var add = function (x, y) {
        print.log(x + y);
    };
    exports.add = add;
});
```

```javascript
/**
 * Created by jiavan on 16-3-27.
 * print.js
 * 用于输出信息的模块，并导出log方法
 */
define(function (require, exports, module) {
    var log = function (str) {
        console.log(str);
    };

    exports.log = log;
});
```

完整例程请看上方html/js代码
