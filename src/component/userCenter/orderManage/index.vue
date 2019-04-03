<template>
  <div class="orderManage">
    <Tabs :tabConfig="tabConfig"></Tabs>
    <div class="cBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tabs from '../tabs';

  export default {
    name: 'orderManage',
    components: {Tabs},
    data() {
      return {
        tabConfig: [{
          path: '/orderManage/cart',
          title: '购物车'
        }, {
          path: '/orderManage/orderList',
          title: '订单管理'
        },{
          path:'/orderManage/sales',
          title:'销售记录'
        }]
      };
    }
  };
</script>

<style scoped>

</style>
