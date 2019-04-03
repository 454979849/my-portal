<template>
  <div class="account">
    <Tabs :tabConfig="tabConfig"></Tabs>
    <div class="cBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tabs from '../tabs';

  export default {
    name: 'account',
    components: {Tabs},
    data() {
      return {
        tabConfig: [{
          path: '/account/recharge',
          title: '账户充值'
        }, {
          path: '/account/pwdSet',
          title: '支付密码设置'
        }, {
          path: '/account/rechargeList',
          title: '充值记录'
        }, {
          path: '/account/payList',
          title: '支出记录'
        }]
      };
    }
  };
</script>

<style scoped>

</style>
