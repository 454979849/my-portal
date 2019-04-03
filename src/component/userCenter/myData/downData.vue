<template>
  <div class="downData">
    <b-table hover :items="items" :fields="fields">
      <template slot="oper" slot-scope="data">
        <b-button variant="primary" size="sm" @click="cancelStar(data.item)">下载</b-button>
      </template>
    </b-table>
    <b-pagination
      v-if="true"
      :total-rows="100"
      :per-page="5"
      v-model="curPage"
      align="center"
      @change="goPage"
    />
  </div>
</template>

<script>
  export default {
    name: 'downData',
    data() {
      return {
        curPage: 1,
        fields: [
          {key: 'dataName', label: '名称', class: 'text-center'},
          {key: 'dataDesc', label: '数据描述', class: 'text-center'},
          {key: 'time', label: '更新时间', class: 'text-center'},
          {key: 'oper', label: '操作', class: 'text-center'}
        ],
        items: [
          {
            id: 1,
            dataName: '林业基本情况信息',
            dataDesc: '林业局-2015林业基本情况信息-产业发展',
            time: '2018-10-10 16:59:23',
            oper: ''
          },
          {
            id: 2,
            dataName: '“测试',
            dataDesc: '“测试',
            time: '2019-03-08 11:21:53',
            oper: ''
          }, {
            id: 3,
            dataName: '“验证bug',
            dataDesc: '“验证bug',
            time: '2018-11-23 17:10:05',
            oper: ''
          }, {
            id: 4,
            dataName: '“测试测试',
            dataDesc: '“测试测试',
            time: '2018-11-29 10:02:52',
            oper: ''
          },
          {
            id: 5,
            dataName: '“优质诚信香港游”香港旅行社红名单',
            dataDesc: '“优质诚信香港游”香...',
            time: '2017-09-18 21:18:52',
            oper: '<button class="btn btn-primary btn-sm">下载</button>'
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

