// $(window).on('scroll', function () {
//   console.log('scroll');
// });
//
// $(window).on('touchstart', function () {
//   console.log('touchstart');
// });
//
// $(window).on('touchmove', function () {
//   console.log('touchmove');
// });
//
// $(window).on('touchend', function() {
//   console.log('touchend');
// });

var count = 0,
  timer = null,
  start = true,
  timestart = 0,
  timeend = 0;
var oldTop = newTop = $(window).scrollTop(); //为了方便起见，使用jquery或者zepto框架
function log(e) {

  if (start) {
    timestart = e.timeStamp
    console.log('start', timestart);
    start = false;
  }

  if (timer) {
    clearTimeout(timer);
  }
  newTop = $(window).scrollTop();
  console.log('scroll');

  if (newTop === oldTop) {
    clearTimeout(timer);
    console.log('stop', e.timeStamp);
    console.log('spend ' + (e.timeStamp - timestart));
    start = true;
  } else {
    oldTop = newTop;
    timer = setTimeout(log.bind(null, e), 50);
  }
}
$(window).on('scroll', log);
