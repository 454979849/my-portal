import '@/layout/layout';
import './index.less';
import {request} from "@/common/request";

import '@/component/base/banner/banner';
import '@/component/index/hotData/hotData';
import '@/component/index/newData/newData';
import '@/component/index/dynamic/dynamic';

import renderHotData from '@/component/index/hotData/hotData.art'
import renderNewData from '@/component/index/newData/newData.art'
import renderDynamic from '@/component/index/dynamic/dynamic.art'

$(document).on('scroll', () => {
  let scTop = $(document).scrollTop();
  if (scTop <= 520) {
    $('header.header').removeClass('scroll');
  } else {
    $('header.header').addClass('scroll');
  }
})
//最热资源
request('GET_HOT_OR_NEW', 'post', {
  "orderFields": {"apply_number": "desc"},
  "pageNumber": 1,
  "pageSize": 8
}).then(res => {
  let rows = res.data.data.rows.map(item => {
    item.oldtype=item.type;
    item.type = $.$findKey[item.type];
    return item;
  })
  let hotDataHtml = renderHotData({
    data: rows
  })
  $('.hotData').replaceWith(hotDataHtml);

})

//最新资源
request('GET_HOT_OR_NEW', 'post', {
  "orderFields": {"create_date": "desc"},
  "pageNumber": 1,
  "pageSize": 8
}).then(res => {
  let rows = res.data.data.rows.map(item => {
    item.oldtype=item.type;
    item.type = $.$findKey[item.type];
    return item;
  })
  let newDataHtml = renderNewData({
    data: rows
  })
  $('.newData').replaceWith(newDataHtml);

})

//平台动态
request('GET_DYNAMIC', 'post', {
  "orderFields": {"create_date": "desc"},
  "pageNumber": 1,
  "pageSize": 8
}).then(res => {
  res = res.data.data.rows;
  let dynamicHtml = renderDynamic({
    leftData: res.slice(0, 4),
    rightData: res.slice(4, 8)
  })
  $('.dynamic').replaceWith(dynamicHtml);
})



