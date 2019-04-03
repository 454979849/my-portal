import '@/layout/layout';
import './index.less'

$(document).on('scroll', () => {
  let scTop = $(document).scrollTop();
  if (scTop <= 440) {
    $('header.header').removeClass('scroll');
  } else {
    $('header.header').addClass('scroll');
  }
})
