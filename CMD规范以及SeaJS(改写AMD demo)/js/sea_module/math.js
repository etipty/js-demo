/**
 * Created by jiavan on 16-3-27.
 */
define(function (require, exports, module) {
    var print = require('print');
    var add = function (x, y) {
        print.log(x + y);
    };
    exports.add = add;
});