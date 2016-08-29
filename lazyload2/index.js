var LazyLoad = function LazyLoad(els, isAni, speed) {
  this.els = els || document.querySelectorAll('.lazy');
  this.isAni = isAni || true;
  this.speed = speed || 1000;
  if (!(els instanceof Array)) {
    this.els = [].slice.call(els);
  }

  // var _this = this;
  // this.els.forEach(function (el, index) {
  //   el.addEventListener('load', function () {
  //     _this.setOpacity(el, 0);
  //     _this.fadeIn(el, _this.speed);
  //   });
  // });
};

LazyLoad.prototype = {
  constructor: LazyLoad,
  getOffsetTop: function(el) {
    var offsetTop = 0;
    while (el) {
      offsetTop += el.offsetTop;
      el = el.offsetParent;
    }

    return offsetTop;
  },

  shouldLoad: function(el) {
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var scrollTop = document.body.scrollTop;
    var threshold = 0;
    var elOffsetTop = this.getOffsetTop(el);
    var distance = elOffsetTop - scrollTop - threshold;

    if (distance <= viewportHeight) {
      return true;
    }

    return false;
  },

  setOpacity: function(el, opacity) {
    if (el.style.opacity != undefined) {
      el.style.opacity = opacity;
    } else {
      el.style.filter = 'alpha(opacity=' + (opacity * 100) + ')';
    }
  },

  fadeIn: function (el, speed) {
    var timer = null;
    var opacity = 0;

    var _this = this;
    timer = window.setInterval(function() {
      if (opacity < 1) {
        opacity += 50 / _this.speed;
        _this.setOpacity(el, opacity);
        console.log(opacity, el.style.opacity);
      } else {
        window.clearInterval(timer);
      }
    }, 50);
  },

  load: function() {

    for (var i = 0; i < this.els.length; ++i) {
      if (this.shouldLoad(this.els[i])) {
        this.els[i].src = this.els[i].getAttribute('data-src');
        this.els.splice(i, 1);
        --i;
      } else {
        return ;
      }
    }
  }
};

window.onload = function() {
  window.lazyload = new LazyLoad(document.querySelectorAll('img'));
  lazyload.load();
}
window.onscroll = function() {
  lazyload.load();
};
