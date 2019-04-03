import './menu.less'
import renderMenu from '@/component/base/menu/menu.art'
import {request} from "@/common/request";
import TreeUtil from '@/common/TreeUtil'
import {urlParse} from "@/common/util";

const urlObj = urlParse();

request('GET_MENU', 'post', {"pageNumber": -1}).then(res => {
  res = res.data.data.rows;
  res = res.map((item) => {
    let parentId = item['parent_id'];
    item.parentId = parentId;
    return item;
  })
  res = TreeUtil(res).children;
  let menuHtml = renderMenu({
    data: res
  })
  $('#main .leftMenu').replaceWith(menuHtml);

  //添加高亮
  $('.bigType').each(function () {
    if ($(this).data().bigid && ($(this).data().bigid === urlObj.bigType)) {
      $(this).addClass('active')
    }
  })
  $('.smallType').each(function(){
    if ($(this).data().smallid && ($(this).data().smallid === urlObj.smallType)) {
      $(this).addClass('active')
    }
  })
})


$('#main .leftMenu>ul>li').each(function () {
  $(this).hover(function () {
    $(this).find('.secondList').show();
    var data = $(this).data('sublength');
    if (data > 10) {
      $(this).find('.threeList').show();
    } else {
      $(this).find('.threeList').hide();
    }
  }, function () {
    $(this).find('.secondList').hide();
    $(this).find('.threeList').hide();
  })
})

$(document).on('click', '.bigType', function () {
  let bigId = $(this).data().bigid;
  location.href = '../views/info.html?bigType=' + bigId;
})
$(document).on('click', '.smallType', function () {
  let smallId = $(this).data().smallid;
  let bigId = $(this).data().bigid;
  location.href = '../views/info.html?bigType=' + bigId + '&smallType=' + smallId;
})
