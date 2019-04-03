import './header.less';
import {urlParse} from '@/common/util'
import {request} from "@/common/request";
import Cookies from 'js-cookie'
import urlConfig from '@/api/urlConfig'

let pathName = location.pathname;
let i = pathName.lastIndexOf('/');
let j = pathName.lastIndexOf('.');
let fileName = pathName.slice(i + 1, j);

// if(fileName=='info'){
//   let urlObj=urlParse();
//   if(urlObj.type=='data'){
//     fileName='infoData'
//   }else{
//     fileName='infoApi'
//   }
// }


$('header.header .menu a').each(function (i, v) {
  let id = $(this).attr('id');
  if (id) {
    if (id == fileName) {
      $(this).parent().addClass('active');
      if($(this).closest('.subList').length){
        $(this).closest('.subList').parent().addClass('active');
      }
    }
  }
});

$('#noLogin').click(function(){
  let currentHref = encodeURIComponent(location.href);
  // location.href = urlConfig.loginRedirectUrl+'sso/readyLogin.html?redirect=' + currentHref;  //跳到预登录页面
  location.href='../views/login.html'
})

$('header.header .user').hover(function(){
  if(document.getElementById('noLogin').style.display=='none'){
    $('.user-panel').show();
  }
},function(){
  $('.user-panel').hide();
})

$('li.logout').click(function(){
  request('LOGOUT','get').then(res=>{
    if(res.data.code=='200'){
      Cookies.remove('sToken');
      Cookies.remove('uToken');
      Cookies.remove('userInfo');
      location.href='../views/index.html';
    }
  })
})
