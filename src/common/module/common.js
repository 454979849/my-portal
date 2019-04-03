// 所有页面都会执行的js
import {getSToken, afterLogin} from '../util'

require('@/vendor/font-awesome-4.7.0/css/font-awesome.min.css');
require('@/vendor/animate.min.css');

require('@/vendor/bootstrap4/css/bootstrap.min.css');
require('@/vendor/bootstrap4/js/bootstrap.min');
require('@/common/style/common.less');

// getSToken().then(() => {
//   afterLogin(true);
// });

//警告框全局方法
$.extend({
  $alert: function (status, content) {
    $('<div>').appendTo('body').addClass('alert alert-' + status).html(content).fadeIn().delay(3000).fadeOut();
  },
  $findKey: {
    service: 'web服务资源',
    data: '数据资源',
    gis: '地理信息服务资源',
    file: '文件资源',
    dljt_001: '道路交通',
    aqxy_002: '安全信用',
    jjjs_003: '经济建设',
    jyxx_004: '教育信息',
    dssj_005: '电商数据',
    yshy_006: '衣食行业',
    fcsj_007: '房产数据',
    lyxx_008: '旅游信息',
    xwzx_009: '新闻资讯',
    yyxx_010: '医药信息',
    secret_level: '保密级别',
    gk_01: '公开',
    mm_02: '秘密',
    jm_03: '机密',
    jm_04: '绝密',
    sthj_001:'生态环境',
    aqjk_002:'安全键康',
    jrfw_003:'金融服务',
    hjjc_004:'环境监测',
    txyq_005:'通讯舆情',
    dzsw_006:'电子商务',
    zwgk_007:'政务公开'
  }
})
