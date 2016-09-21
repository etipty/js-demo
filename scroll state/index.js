var timer = null;
var start = true;
var oldTop, newTop;
var debug = true;
oldTop = newTop = $(window).scrollTop();
var track = function() {
  if (start) {

    // start
    debug && console.log('start');
    start = false;
  }

  if (timer) {
    clearTimeout(timer);
  }
  newTop = $(window).scrollTop();

  // scrolling
  debug && console.log('scroll');

  if (newTop === oldTop) {

    // scroll stop todos
    clearTimeout(timer);
    start = true;
  } else {
    oldTop = newTop;
    timer = setTimeout(track, 100);
  }
};

window.addEventListener('scroll', track);
