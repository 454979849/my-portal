<template>
  <div class="userBase">
    <ul>
      <li><span class="label">账户名：</span><span>usersky</span></li>
      <li><span class="label">实名认证：</span><span>已认证</span></li>
      <li><span class="label">APIKey：</span><span>834E6E7F347EEEED</span></li>
      <li><span class="label">secretKey：</span><span>HmwgrY1HsZ5pJyOBuXFE3SdENFGA9ulv</span></li>
      <li><span class="label">手机号码：</span><span>18611325859</span></li>
      <li><span class="label">用户类型：</span><span>企业实名</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'userBase'
  };
</script>

<style lang="less" scoped>
  .userBase {
    & > ul {
      & > li {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        margin: 5px 0;

        span.label {
          width: 100px;
          display: inline-block;
          text-align: right;
          margin-right: 20px;
          color: #666;
        }
      }
    }
  }
</style>
