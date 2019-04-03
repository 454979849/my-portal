//webpack的DefinePlugin插件配置了env.NODE_ENV环境变量，用来判断是开发环境还是生产环境
let env = process.env.NODE_ENV == 'development' ? 'dev' : 'prod';
let urlConfig = {
  dev: {
    baseUrl: 'http://192.168.1.183:9097/',
    loginBaseUrl: 'http://192.168.1.139:9091/',
    loginRedirectUrl:'http://localhost:9999/',
    publishUrl:'http://192.168.1.139:9096/'
  },
  prod: {
    baseUrl: '',
    loginBaseUrl: '',
    loginRedirectUrl:''
  }
}[env];

export default urlConfig
