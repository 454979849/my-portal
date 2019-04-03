import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import MyIndex from '@/component/userCenter/myIndex';
import MyData from '@/component/userCenter/myData';
import Center from '@/component/userCenter/center';
import Account from '@/component/userCenter/account';
import OrderManage from '@/component/userCenter/orderManage';
import UserBase from '@/component/userCenter/center/userBase';
import ChangePwd from '@/component/userCenter/center/changePwd';
import RealName from '@/component/userCenter/center/realName';
import StarData from '@/component/userCenter/myData/starData';
import DownData from '@/component/userCenter/myData/downData';
import Cart from '@/component/userCenter/orderManage/cart';
import OrderList from '@/component/userCenter/orderManage/orderList';
import Sales from '@/component/userCenter/orderManage/sales';
import Recharge from '@/component/userCenter/account/recharge';
import PwdSet from '@/component/userCenter/account/pwdSet';
import RechargeList from '@/component/userCenter/account/rechargeList';
import PayList from '@/component/userCenter/account/payList';

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: [
    {path: '/', redirect: '/myIndex'},
    {path: '/myIndex', component: MyIndex, name: 'MyIndex'},
    {
      path: '/userCenter', component: Center, name: 'Center', children: [{
        path: 'userBase', component: UserBase, name: 'UserBase'
      }, {
        path: 'changePwd', component: ChangePwd, name: 'ChangePwd'
      }, {
        path: 'realName', component: RealName, name: 'RealName'
      }]
    },
    {
      path: '/myData', component: MyData, name: 'MyData', children: [{
        path: 'starData', component: StarData, name: 'StarData'
      }, {
        path: 'downData', component: DownData, name: 'DownData'
      }]
    },
    {
      path: '/orderManage', component: OrderManage, name: 'OrderManage', children: [{
        path: 'cart', component: Cart, name: 'Cart'
      }, {
        path: 'orderList', component: OrderList, name: 'OrderList'
      }, {
        path: 'sales', component: Sales, name: 'Sales'
      }]
    },
    {
      path: '/account', component: Account, name: 'Account', children: [{
        path: 'recharge', component: Recharge, name: 'Recharge'
      }, {
        path: 'pwdSet', component: PwdSet, name: 'PwdSet'
      }, {
        path: 'rechargeList', component: RechargeList, name: 'RechargeList'
      }, {
        path: 'payList', component: PayList, name: 'PayList'
      }]
    }
  ]
});
