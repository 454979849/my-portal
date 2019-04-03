<template>
  <div class="tabs">
    <div class="tab-active-bar" :style="{left:lineLeft}"></div>
    <ul>
      <li v-for="(item,index) in tabConfig"
          :class="{'active':index==activeIndex}" @click="toggleTab(item.path,index)">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'tabs',
    props: {
      tabConfig: {
        type: Array,
        default: []
      }
    },
    computed: {
      lineLeft() {
        return 20 + (120 + 20) * this.activeIndex + 'px';
      }
    },
    data() {
      return {
        activeIndex: 0
      };
    },
    methods: {
      toggleTab(path, index) {
        this.activeIndex = index;
        this.$router.push(path);
      }
    },
    mounted() {
      this.tabConfig.forEach((item, index) => {
        if (this.$route.path == item.path) {
          this.activeIndex = index;
        }
      });
    },
    watch: {
      '$route'(newVal) {
        if (newVal.path == this.tabConfig[0].path) {
          this.activeIndex = 0;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .tabs {
    height: 60px;
    margin-bottom: 25px;
    background: #fff;
    box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    position: relative;

    .tab-active-bar {
      height: 3px;
      position: absolute;
      bottom: 0;
      width: 120px;
      background: #409EFF;
      transition: all .3s;
    }

    & > ul {
      & > li {
        width: 120px;
        line-height: 57px;
        margin-left: 20px;
        cursor: pointer;
        color: #1f3a3d;
        font-size: 16px;
        float: left;
        text-align: center;

        &.active {
          color: #409EFF;
        }
      }
    }
  }
</style>
