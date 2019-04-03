import '@/layout/layout';
import './index.less';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import router from './router';
import App from './App.vue';

Vue.use(BootstrapVue);

import 'bootstrap-vue/dist/bootstrap-vue.css';

import {DatePicker, Steps, Step, Upload, Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {intercept,getSToken} from '@/common/util'

Vue.use(DatePicker).use(Steps).use(Step).use(Upload).use(Button);

Vue.config.productionTip = false;

router.beforeEach((from, to, next) => {

  // intercept().then((bool) => {
  //   if (bool) {
  //     next();
  //   }
  // })

  next();
})

// getSToken().then(()=>{
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
// })

