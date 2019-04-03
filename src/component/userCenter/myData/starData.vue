<template>
  <div class="starData">
    <b-table hover :items="items" :fields="fields">
      <template slot="oper" slot-scope="data">
        <b-button variant="secondary" size="sm" @click="cancelStar(data.item)">取消关注</b-button>
      </template>
    </b-table>
    <b-pagination
      v-if="false"
      :total-rows="2"
      :per-page="5"
      v-model="curPage"
      align="center"
      @change="goPage"
    />
  </div>
</template>

<script>
  export default {
    name: 'starData',
    data() {
      return {
        curPage: 1,
        fields: [
          {key: 'dataName', label: '数据名称', class: 'text-center'},
          {key: 'dataDesc', label: '数据描述', class: 'text-center'},
          {key: 'time', label: '关注时间', class: 'text-center'},
          {key: 'oper', label: '操作', class: 'text-center'}
        ],
        items: [
          {
            id: 1,
            dataName: '林业基本情况信息',
            dataDesc: '林业局-林业基本情况...',
            time: '2018-11-28 14:03:06',
            oper: ''
          },
          {
            id: 2,
            dataName: '“优质诚信香港游”香港旅行社红名单',
            dataDesc: '“优质诚信香港游”香...',
            time: '2017-09-18 21:18:52',
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

