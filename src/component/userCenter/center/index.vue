<template>
  <div class="center">
    <Tabs :tabConfig="tabConfig"></Tabs>
    <div class="cBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tabs from '../tabs';

  export default {
    name: 'center',
    components: {Tabs},
    data() {
      return {
        tabConfig: [{
          path: '/userCenter/userBase',
          title: '用户基本信息'
        }, {
          path: '/userCenter/changePwd',
          title: '修改密码'
        }, {
          path: '/userCenter/realName',
          title: '实名认证'
        }]
      };
    }
  };
</script>

<style lang="less" scoped>
  .cBox {
    box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    box-sizing: border-box;
    padding: 29px 25px;
    background: #fff;
  }
</style>
