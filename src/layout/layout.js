// 页面中引用了header组件，所以这里要引入header组件的js和less
import '@/component/base/header/header';
import '@/component/base/footer/footer';

// 引入公共样式，公共js
import '@/common/style/common.less';
import '@/common/module/common';

import './layout.less';

$(document).on('scroll', () => {
  let scTop = $(document).scrollTop();
  if (scTop > 0) {
    $('#toTop').addClass('show');
  } else {
    $('#toTop').removeClass('show');
  }
})

$('#toTop').click(function () {
  console.log($('body').scrollTop());
  $('html,body').animate({
    scrollTop: 0
  }, 400)
})
