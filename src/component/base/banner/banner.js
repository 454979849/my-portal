import '@/vendor/swiper/swiper.min.css';

let Swiper = require('@/vendor/swiper/swiper.min.js');
import './banner.less';


new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素
      this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时运行当前slide动画
      this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
    }
  }
});


