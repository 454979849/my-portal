<template>
  <div class="cart">
    <b-table hover :items="items" :fields="fields" @row-clicked="rowClicked">
      <template slot="checked" slot-scope="data">
        <b-form-checkbox v-model="data.item.checked"></b-form-checkbox>
      </template>
    </b-table>
    <div class="cartBottom">
      <b-form-checkbox v-model="allCheck" @change="allSet">全选</b-form-checkbox>
      <div class="right">
        <span>已选择<b>{{checkItems.length}}</b>个资源</span>
        <span>总价<b>￥{{totalMoney}}</b></span>
        <b-button variant="success" size="sm" :disabled="canSettlement">去结算</b-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cart',
    computed: {
      checkItems() {
        return this.items.filter((item) => {
          return item.checked == true;
        });
      },
      totalMoney() {
        return this.checkItems.map((item) => {
          return item.totalPrice;
        }).reduce(function (a, b) {
          return a + b;
        }, 0);
      },
      canSettlement() {
        if (this.checkItems.length == 0) {
          return true;
        }
        return false;
      }
    },
    data() {
      return {
        fields: [
          {key: 'checked', label: ''},
          {key: 'name', label: '资源名称', class: 'text-center'},
          {key: 'price', label: '申请单价', class: 'text-center'},
          {key: 'num', label: '申请套餐数', class: 'text-center'},
          {key: 'type', label: '资源类型', class: 'text-center'},
          {key: 'totalPrice', label: '金额', class: 'text-center'}
        ],
        items: [
          {
            checked: false,
            id: 1,
            name: '林业基本情况信息',
            price: 10,
            num: 1,
            type: '数据',
            totalPrice: 10
          },
          {
            checked: false,
            id: 2,
            name: '房地产业基本情况信息',
            price: 20,
            num: 1,
            type: '数据',
            totalPrice: 20
          },
          {
            checked: false,
            id: 3,
            name: '工业基本情况信息',
            price: 100,
            num: 1,
            type: '数据',
            totalPrice: 100
          }
        ],
        allCheck: false
      };
    },
    methods: {
      rowClicked(row) {
        row.checked = !row.checked;
      },
      allSet() {
        if (this.items.some((item) => {
          return item.checked == false;
        })) {
          this.items.forEach(item => {
            item.checked = true;
          });
        } else {
          this.items.forEach(item => {
            item.checked = false;
          });
        }
      }
    },
    watch: {
      items: {
        handler(newItems) {
          if (newItems.some((item) => {
            return item.checked == false;
          })) {
            this.allCheck = false;
          } else {
            this.allCheck = true;
          }
        },
        immediate: true,
        deep: true
      }
    }
  };
</script>

<style lang="less" scoped>
  .cartBottom {
    border: 1px solid #dcdcdc;
    margin-top: 20px;
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    height: 45px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      height: 100%;
      display: flex;
      align-items: center;

      span {
        margin-right: 15px;
      }

      b {
        color: #409EFF;
        font-size: 20px;
      }
    }
  }
</style>
