import Cookies from 'js-cookie'
import {fetch, request} from '@/common/request'
import urlConfig from '@/api/urlConfig'

export function urlParse(key) {
  let url = key ? window.location[key] : window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return obj;
}

export async function getSToken() {
  // 获取sToken，多页面任何一个页面都需要sToken
  if (!Cookies.get('sToken')) {
    let res = await request('GET_STOKEN', 'post', {
      grant_type: 'client_credentials',
      client_id: 'portal',
      client_secret: 'web',
    },{"Content-Type": "application/x-www-form-urlencoded"});
    let sToken = res.data.access_token;
    Cookies.set('sToken', sToken);
    location.reload();
  } else {
    let sToken = Cookies.get('sToken');
    $('#pageLoading').hide();
    fetch.defaults.headers.common['Authorization'] = 'Bearer ' + sToken;
    //如果cookie里已有sToken，就验证其有效性
    let res = await request('CHECK_STOKEN', 'get', sToken);
    if (res.data.data.active !== true) {
      //如果sToken失效，就再请求获取一次
      let res = await request('GET_STOKEN', 'post', {
        grant_type: 'client_credentials',
        client_id: 'portal',
        client_secret: 'web',
      });
      let sToken = res.data.access_token;
      Cookies.set('sToken', sToken);
      fetch.defaults.headers.common['Authorization'] = 'Bearer ' + sToken;
      location.reload();
    }
  }
}

export async function afterLogin(bool) {
  let uToken = Cookies.get('uToken') || urlParse('hash').uToken || urlParse().uToken;
  if (!uToken) { //公共页面进入页面时或者刷新页面时cookie里没有uToken的情况下，不做任何拦截
    return false;
  } else {
      // 获取uToken后验证其有效性
      let res = await request('CHECK_UTOKEN', 'get', uToken);
      if (res.data.data.active === true) {
        Cookies.set('uToken', uToken);
        fetch.defaults.headers.common['user-login-token'] = uToken;
        //给页头添加已登录的用户信息名展示
        if (!Cookies.get('userInfo')) {
          let res = await request('GET_USER_INFO', 'get');
          Cookies.set('userInfo', JSON.stringify(res.data.data.user));
          let userName = res.data.data.user.username;
          $('#noLogin').hide();
          $('#yesLogin').show().html(userName);
        } else {
          let userName = JSON.parse(Cookies.get('userInfo')).username;
          $('#noLogin').hide();
          $('#yesLogin').show().html(userName);
        }
        return true;
      } else {
        if(!bool) { //个人中心页面才做uToken验证，其他页面正常浏览
          //uToken失效，需要跳转到登录页面login.html
          Cookies.remove('sToken');
          Cookies.remove('uToken');
          Cookies.remove('userInfo');
          let currentHref = encodeURIComponent(location.href);
          location.href = urlConfig.loginRedirectUrl+'sso/login.html?redirect=' + currentHref;
        }
      }

  }
}

// 个人中心页面的拦截器，需要对token有效验证
export async function intercept() {
  await getSToken();
  let currentHref = encodeURIComponent(location.href);
  if ((!Cookies.get('uToken')) && (!urlParse('hash').uToken) && (!urlParse().uToken)) {
    location.href = urlConfig.loginRedirectUrl+'sso/readyLogin.html?redirect=' + currentHref;  //跳到预登录页面
  } else {
    let bool = await afterLogin();
    return bool;
  }
}
