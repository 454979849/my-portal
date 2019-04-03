import '@/layout/layout';
import './index.less';
import '@/component/case/case'

import renderCase from '@/component/case/case.art'

let caseHtml=renderCase({
  data:[{
    imgUrl:'https://www.bocweb.cn/upload/2019/03/06/15518572477423vmodh.jpg',
    title1:'ARCFOX',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  },{
    imgUrl:'https://www.bocweb.cn/upload/2019/01/21/15480530523842add2w.jpg',
    title1:'lovefun',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  },{
    imgUrl:'https://www.bocweb.cn/upload/2019/01/02/15464400526892naxkq.jpg',
    title1:'南孚电池',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  },{
    imgUrl:'https://www.bocweb.cn/upload/2018/10/09/15390760291289ihpac.jpg',
    title1:'东风风光',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  },{
    imgUrl:'https://www.bocweb.cn/upload/2018/09/26/15379339704638o6b9k.jpg',
    title1:'大乘汽车',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  },{
    imgUrl:'https://www.bocweb.cn/upload/2018/09/26/153794013051988h6du.jpg',
    title1:'正泰网络',
    title2:'官方网站建设',
    type1:'用户体验',
    type2:'移动平台开发'
  }]
})

$('ul.case-flexBox').replaceWith(caseHtml);
