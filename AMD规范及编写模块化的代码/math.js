//math.js
define(['print'], function (print) {
    var add = function (x, y) {
        print.log(x + y);
    };

    return {
        add: add
    };
});