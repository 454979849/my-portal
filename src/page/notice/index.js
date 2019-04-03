import '@/layout/layout';
import './index.less'
import '@/component/notice/notice'
import '@/vendor/pagination/myPagination.css'
import Page from '@/vendor/pagination/myPagination'


$('.tplBox>.left>li').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  //请求过滤后的数据并重新渲染子模板
  //todo
})

//这个分页器应该是在数据请求后的回调中进行配置
new Page({
  id: 'pagination',
  pageTotal: 50, //必填,总页数
  pageAmount: 10,  //每页多少条
  dataTotal: 500, //总共多少条数据
  curPage: 1, //初始页码,不填默认为1
  pageSize: 5, //分页个数,不填默认为5
  showPageTotalFlag: true, //是否显示数据统计,不填默认不显示
  showSkipInputFlag: true, //是否支持跳转,不填默认不显示
  getPage: function (page) {
    //获取当前页数
    console.log(page);
  }
})
