<template>
  <div class="orderList">
    <b-table responsive hover :items="items" :fields="fields">
      <template slot="oper" slot-scope="data">
        <b-button variant="success" size="sm">支付</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    name: 'orderList',
    data() {
      return {
        fields: [
          {key: 'orderId', label: '订单号', class: 'text-center'},
          {key: 'name', label: '资源名称', class: 'text-center'},
          {key: 'type', label: '资源类型', class: 'text-center'},
          {key: 'time', label: '申请时间', class: 'text-center'},
          {key: 'price', label: '申请单价', class: 'text-center'},
          {key: 'totalPrice', label: '总金额', class: 'text-center'},
          {key: 'orderStatus', label: '订单状态', class: 'text-center'},
          {key: 'oper', label: '操作', class: 'text-center'},
        ],
        items: [
          {
            orderId: 1309005520145984451,
            name: '林业基本情况信息',
            type: '数据',
            time: '2019-03-08 11:09:59',
            price:1,
            totalPrice:1,
            orderStatus:'未支付',
            oper: ''
          },
          {
            orderId: 1309005520145984698,
            name: '房地产业基本情况信息',
            type: '数据',
            time: '2019-03-09 11:09:59',
            price:2,
            totalPrice:2,
            orderStatus:'未支付',
            oper: ''
          }
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
  .orderList{

  }
</style>

