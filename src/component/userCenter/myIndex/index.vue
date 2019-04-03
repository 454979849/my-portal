<template>
  <div class="myIndex">
    <div class="t">
      <p>我的首页</p>
      <div class="oper">
        <a>申请服务</a>
        <a>发布服务</a>
      </div>
    </div>
    <div class="b">
      <ul>
        <li>
          <span>0.04</span>
          <p>累计消费金额</p>
        </li>
        <li>
          <span>0</span>
          <p>关注API</p>
        </li>
        <li>
          <span>0</span>
          <p>关注服务</p>
        </li>
        <li>
          <span>21</span>
          <p>申请API</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'myIndex'
  };
</script>

<style lang="less" scoped>
  .myIndex {
    box-sizing: border-box;
    height: 200px;
    background: #fff;
    -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    -moz-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
    box-shadow: 0 2px 7px rgba(0, 0, 0, .15);

    .b {
      padding: 25px 35px;
      overflow: hidden;

      & > ul {
        overflow: hidden;
        width: 100%;

        li {
          float: left;
          height: 85px;
          width: 25%;
          border-right: 1px solid #ccc;
          box-sizing: border-box;
          text-align: center;
          padding: 15px 0;

          &:last-child {
            border-right: 0;
          }

          span {
            font-size: 20px;
            font-weight: 600;
            color: #1f3a3d;
          }

          p {
            margin-top: 15px;
            color: #999;
          }
        }
      }
    }

    .t {
      height: 65px;
      line-height: 65px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      padding: 0 30px 0 40px;

      p {
        float: left;
        font-weight: normal;
        font-size: 18px;
        line-height: 65px;
      }

      .oper {
        height: 65px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;

        & > a {
          display: inline-block;
          line-height: 1;
          white-space: nowrap;
          cursor: pointer;
          background: #fff;
          border: 1px solid #c4c4c4;
          color: #1f3a3d;
          margin: 0;
          padding: 10px 15px;
          border-radius: 0;
          font-size: 14px;

          &:hover {
            color: #409EFF;
            border-color: #409EFF;
          }

          &:first-child {
            margin-right: 15px;
          }
        }
      }
    }
  }
</style>
