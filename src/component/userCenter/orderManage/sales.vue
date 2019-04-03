<template>
  <div class="sales">
    <b-table responsive hover :items="items" :fields="fields">
      <template slot="oper" slot-scope="data">
        <b-button variant="danger" size="sm">取消</b-button>
      </template>
    </b-table>
    <div class="tableNoneData" v-if="items.length==0">
      暂无数据
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sales',
    data() {
      return {
        fields: [
          {key: 'orderId', label: '订单号', class: 'text-center'},
          {key: 'name', label: '资源名称', class: 'text-center'},
          {key: 'type', label: '资源类型', class: 'text-center'},
          {key: 'time', label: '申请时间', class: 'text-center'},
          {key: 'price', label: '申请单价', class: 'text-center'},
          {key: 'totalPrice', label: '总金额', class: 'text-center'},
          {key: 'orderStatus', label: '订单状态', class: 'text-center'}
        ],
        items: [

        ]
      };
    },
    methods: {
      cancelStar(item) {
        console.log(item);
      },
      goPage(page) {
        alert(page);
      }
    }
  };
</script>
<style lang="less" scoped>
  .sales{

  }
</style>

