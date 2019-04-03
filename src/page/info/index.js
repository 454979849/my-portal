import '@/layout/layout';
import './index.less';

import '@/vendor/pagination/myPagination.css'
import Page from '@/vendor/pagination/myPagination'

import '@/component/base/menu/menu'
import '@/component/info/thList/thList'
import '@/component/info/list/list'

import renderThList from '@/component/info/thList/thList.art'
import renderList from '@/component/info/list/list.art'

import {urlParse} from "@/common/util";
import {request} from "@/common/request";

$(document).on('scroll', () => {
  let scTop = $(document).scrollTop();
  if (scTop <= 360) {
    $('header.header').removeClass('scroll');
  } else {
    $('header.header').addClass('scroll');
  }
})

const urlObj = urlParse();


function toggleList(pageNum, pageSize, orderFields) {
  let bigId = urlObj.bigType;
  let smallId = urlObj.smallType;
  let conditions;
  if ((!bigId) && (!smallId)) {
    conditions = {}
  } else {
    let catalogId = smallId ? `'${bigId}','${smallId}'` : `'${bigId}'`;
    conditions = {catalog_id: catalogId}
  }
  request('RESOURCE_LIST', 'post', {
    "orderFields": orderFields, //默认为最热排序，可通过页面变化
    "pageNumber": pageNum,
    "pageSize": pageSize, // 大图展示方式为24，列表方式为10
    "conditions": conditions
  }).then(res => {
    let rows = res.data.data.rows.map(item => {
      item.oldtype=item.type;
      item.type = $.$findKey[item.type];
      return item;
    });

    if (rows.length) {
      let listHtml;
      if (pageSize == 10) {
        listHtml = renderList({
          data: rows
        })
      } else if (pageSize == 24) {
        listHtml = renderThList({
          data: rows
        })
      }

      $('#main .listBox').html(listHtml);
      new Page({
        id: 'pagination',
        pageTotal: res.data.data.totalPageNum, //必填,总页数
        pageAmount: pageSize,  //每页多少条
        dataTotal: res.data.data.total, //总共多少条数据
        curPage: pageNum, //初始页码,不填默认为1
        pageSize: 5, //分页个数,不填默认为5
        showPageTotalFlag: true, //是否显示数据统计,不填默认不显示
        showSkipInputFlag: true, //是否支持跳转,不填默认不显示
        getPage: function (page) {
          //获取当前页数
          toggleList(page, pageSize, {apply_number: 'desc'});
        }
      })
    }

  })
}

toggleList(1, 24, {apply_number: 'desc'});


$('.viewType>div').click(function () {
  if ($(this).hasClass('active')) {
    return;
  }
  $(this).addClass('active').siblings().removeClass('active');
  if ($(this).hasClass('grid')) {
    toggleList(1, 24, {apply_number: 'desc'});
  } else if ($(this).hasClass('list')) {
    toggleList(1, 10, {apply_number: 'desc'});

  }
})

// $(document).on('click', '.listBox a.item', function () {
//   let id = $(this).attr('id');
//   let {type} = $(this).data();
//   window.open(`../views/detail.html?type=${type}&id=${id}`, '_blank');
// })

//点击最新和最热的按钮的切换
$('.new,.hot').click(function () {
  let method = $(this).data().method;
  let newC, v;
  if ($(this).hasClass('active')) {
    let c = $(this).find('i').attr('class');
    newC = c == 'top' ? 'bottom' : 'top';
  } else {
    $(this).addClass('active').siblings('div').removeClass('active').find('i').attr('class', 'bottom');
    newC = 'bottom';
  }
  $(this).find('i').attr('class', newC);
  v = newC == 'bottom' ? 'desc' : 'asc';
  let orderFields = {};
  orderFields[method] = v;
  let pageSize;
  if ($('.viewType>div.grid').hasClass('active')) {
    pageSize = 24;
  } else {
    pageSize = 10;
  }
  toggleList(1, pageSize, orderFields);
})
