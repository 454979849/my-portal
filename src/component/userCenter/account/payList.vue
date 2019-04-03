<template>
  <div class="payList">
    <span>时间：</span>
    <el-date-picker
      v-model="date"
      type="daterange"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期" style="vertical-align: middle">
    </el-date-picker>
    <b-button variant="primary">查询</b-button>

    <b-table responsive hover :items="items" :fields="fields" style="margin-top:20px;">

    </b-table>
    <div class="tableNoneData">暂无数据</div>
  </div>
</template>

<script>
  export default {
    name: 'payList',
    data() {
      return {
        date: '',
        fields: [
          {key: 'payMoney', label: '支出金额', class: 'text-center'},
          {key: 'balance', label: '账户余额', class: 'text-center'},
          {key: 'time', label: '时间', class: 'text-center'},
          {key: 'remark', label: '备注', class: 'text-center'}
        ],
        items: []
      };
    }
  };
</script>

<style lang="less" scoped>
  .payList {
    -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    -moz-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    box-sizing: border-box;
    padding: 29px 25px;
    background: #fff;
    margin-bottom: 20px;
  }
</style>

