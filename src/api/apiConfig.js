import urlConfig from './urlConfig'

let singleLogin = {
  //注意：单点登录的接口的baseUrl跟项目全局的baseUrl不一样，于是这里的接口写全路径，不然会受到axios已配置的全局baseUrl影响
  'GET_STOKEN': urlConfig.loginBaseUrl + 'auth/oauth/token',
  // 'USER_LOGIN': urlConfig + 'auth/user/token/login',
  'CHECK_UTOKEN': urlConfig.loginBaseUrl + 'auth/user/token',
  'CHECK_STOKEN': urlConfig.loginBaseUrl + 'auth/user/token/sys',
  'GET_USER_INFO': urlConfig.loginBaseUrl + 'auth/currentUser',
  'LOGOUT':urlConfig.loginBaseUrl+'auth/user/token/logout'
};

let index={
  'GET_HOT_OR_NEW':'http://192.168.1.241:9096/service/process/getResourceByPage1',
  'GET_DYNAMIC':'http://192.168.1.241:9096/service/process/getIndustryByPage'
}

let info={
  'GET_MENU':'http://192.168.1.241:9096/service/process/getAllCatalog',
  'RESOURCE_LIST':'http://192.168.1.241:9096/service/process/getResourceByPage1'
}

let detail={
  'GET_COMMENT':'comment/getCommentList',
  'RELEASE_COMMENT':urlConfig.publishUrl+'service/process/saveComment',
  'ADD_APPLY':'resource/saveApplyList',
  'COMMENT_STAR':'comment/executeAdmire?admireId=',
  'SOURCE_DETAIL':'http://192.168.1.241:9096/service/process/getResourceDetail'
}

export default {
  ...singleLogin,
  ...index,
  ...info,
  ...detail
}
