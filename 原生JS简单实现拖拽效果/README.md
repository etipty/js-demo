# 原理
通过鼠标事件来实现，基本思想如下：
0. 为元素添加mousedown事件，开始监听拖拽
1. 给document对象添加mousemove事件，监听鼠标在页面上的移动
2. 给元素添加mouseup事件处理程序，释放监听状态

当要移动的元素被“拖拽”时，首先获得鼠标相对元素的位置，然后通过event对象获得在文档中移动过程中的位置信息，并实时刷新元素在页面中的位置，当元素的mouseup事件被触发时，拖拽结束。

# 实现
```javascript
/**
 * 拖动元素
 * @param elementId 元素id
 */
function drag(elementId) {
    var element = document.getElementById(elementId);
    var position = {
        offsetX: 0, //点击处偏移元素的X
        offsetY: 0, //偏移Y值
        state: 0 //是否正处于拖拽状态，1表示正在拖拽，0表示释放
    };

    //获得兼容的event对象
    function getEvent(event) {
        return event || window.event;
    }

    //元素被鼠标拖住
    element.addEventListener('mousedown', function (event) {

        //获得偏移的位置以及更改状态
        var e = getEvent(event);
        position.offsetX = e.offsetX;
        position.offsetY = e.offsetY;
        position.state = 1;
    }, false);

    //元素移动过程中
    document.addEventListener('mousemove', function (event) {

        var e = getEvent(event);
        if (position.state) {
            position.endX = e.clientX;
            position.endY = e.clientY;
            //设置绝对位置在文档中，鼠标当前位置-开始拖拽时的偏移位置
            element.style.position = 'absolute';
            element.style.top = position.endY - position.offsetY + 'px';
            element.style.left = position.endX - position.offsetX + 'px';
        }
    }, false);

    //释放拖拽状态
    element.addEventListener('mouseup', function (event) {
        position.state = 0;
    }, false);
}

drag('block');
```
完整实现，见上面demo
