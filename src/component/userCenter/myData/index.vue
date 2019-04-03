<template>
  <div class="myData">
    <Tabs :tabConfig="tabConfig"></Tabs>
    <div class="cBox">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Tabs from '../tabs';

  export default {
    name: 'myData',
    components: {Tabs},
    data() {
      return {
        tabConfig: [{
          path: '/myData/starData',
          title: '关注的数据'
        }, {
          path: '/myData/downData',
          title: '下载的数据'
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
