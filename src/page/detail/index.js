import '@/layout/layout';
import './index.less';
import '@/component/base/menu/menu'
// import '@/component/base/bread/bread'
// import '@/component/detail/detailItem/detailItem'


// import './detailItem.less'
import '@/component/detail/detailApi/detailApi'
import '@/component/detail/detailData/detailData'
import Cookies from 'js-cookie'
import {urlParse} from "@/common/util";
import {request} from "@/common/request";

import renderDetailApi from '@/component/detail/detailApi/detailApi.art'
import renderDetailData from '@/component/detail/detailData/detailData.art'

import renderComment from '@/component/base/comment/comment.art'
import urlConfig from "@/api/urlConfig";


let urlObj = urlParse();

class Detail {
  constructor() {
    this.dataData = {}
    this.apiData = {}
  }

  getComment() {
    const _this = this;
    request('GET_COMMENT', 'post', {
      conditions: {
        resId: urlObj.id
      },
      pageNumber: 1,
      pageSize: 20
    }).then(res => {
      res = res.data.data;
      let renderCommentHtml = renderComment({total: res.total, data: res.rows});
      $('.commentArea').replaceWith(renderCommentHtml);
      //发布评论
      $('.releaseSend').click(function () {
        if (!Cookies.get('uToken')) {
          let currentHref = encodeURIComponent(location.href);
          location.href = urlConfig.loginRedirectUrl + 'sso/readyLogin.html?redirect=' + currentHref;  //跳到预登录页面
        } else {
          if (!$('.commentContent').val()) {
            $.$alert('danger', '你个傻逼不写内容还想评论？');
          } else {
            request('RELEASE_COMMENT', 'post', {
              "content": {
                "parentId": "0",  // 发表评论为0， 回复评论为评论的id
                "resId": urlObj.id,
                "comment": $('.commentContent').val(),
                "admireCount": "0"  // 固定值0
              }
            }).then(res => {
              res = res.data;
              if (res.code == '200') {
                $.$alert('success', '评论成功');
                _this.getComment();
              }
            })
          }
        }
      })
      //点赞和取消点赞
      $('.c-star').click(function () {
        let {admireid} = $(this).data();
        let {commentid} = $(this).data();
        admireid = admireid ? admireid : null;
        let count = $(this).find('span').html().split(' ')[1];
        request('COMMENT_STAR', 'post', {
          id: commentid,
          admireCount: count
        }, {}, admireid).then(res => {
          res = res.data;
          _this.getComment()
        })
      })
    })
  }

  //点击立即申请
  addApply() {
    $('.addApply').click(function () {
      if (!Cookies.get('uToken')) {
        let currentHref = encodeURIComponent(location.href);
        location.href = urlConfig.loginRedirectUrl + 'sso/readyLogin.html?redirect=' + currentHref;  //跳到预登录页面
      } else {
        request('ADD_APPLY', 'get', urlObj.id).then(res => {
          res = res.data;
          if (res.code == '200') {
            $.$alert('succes', '申请成功')
          } else {
            $.$alert('danger', res.message);
          }
        })
      }
    })
  }

  common() {
    $('#main>.content>.api div.heart').hover(function () {
        $(this).find('i').removeClass('fa-heart-o').addClass('fa-heart');
      }, function () {
        $(this).find('i').removeClass('fa-heart').addClass('fa-heart-o');
      }
    )
    $('.tabBox .tabs>p').click(function () {
      $(this).addClass('active').siblings().removeClass('active');
      let index = $(this).index();
      $('.tabBox .contentBox>div').hide().eq(index).show();
    })
    this.addApply();
    //获取评论列表
    this.getComment();
  }

  async initData() {
    let detailBase = await request('SOURCE_DETAIL', 'post', {
      conditions: {
        id: urlObj.id
      }
    });
    let obj = detailBase.data.data.rows[0];
    for (let key in obj) {
      if (obj[key] in $.$findKey) {
        obj['old'+key]=obj[key];
        obj[key] = $.$findKey[obj[key]];
      }
    }
    this.dataData.detailBase = obj;
    return this.dataData;
  }

  async initApi() {
    let detailBase = await request('SOURCE_DETAIL', 'post', {
      conditions: {
        id: urlObj.id
      }
    });
    let obj = detailBase.data.data.rows[0];
    for (let key in obj) {
      if (obj[key] in $.$findKey) {
        obj['old'+key]=obj[key];
        obj[key] = $.$findKey[obj[key]];
      }
    }
    this.apiData.detailBase = obj;
    return this.apiData;
  }
}

let detailObj = new Detail();

if (urlObj.type == 'service' || urlObj.type == 'data') {
  detailObj.initApi().then(data => {
    document.title = data.detailBase.name + '_' + data.detailBase.catalog.map((item) => {
      return item.catalog_name;
    }).join('、');
    let apiDetailHtml = renderDetailApi(data);
    $('#main>.content').html(apiDetailHtml)
    detailObj.common();
  })
} else {
  detailObj.initData().then(data => {
    document.title = data.detailBase.name + '_' + data.detailBase.catalog.map((item) => {
      return item.catalog_name;
    }).join('、');
    let dataDetailHtml = renderDetailData(data);
    $('#main>.content').html(dataDetailHtml)
    detailObj.common();
  })
}
