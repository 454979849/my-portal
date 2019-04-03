<template>
  <div class="realName">
    <h2>企业信息</h2>
    <ul>
      <li><span class="label">公司名称：</span><span>神州数云</span></li>
      <li><span class="label">详情地址：</span><span>神州数云</span></li>
      <li><span class="label">营业执照编号：</span><span>110108016821900</span></li>
      <li><span class="label">税务登记证编号：</span><span></span></li>
      <li><span class="label">组织机构编号：</span><span></span></li>
      <li><span class="label">营业执照副本：</span><span></span></li>
    </ul>
    <h2>联系人信息</h2>
    <ul>
      <li><span class="label">联系人姓名：</span><span>张广良</span></li>
      <li><span class="label">联系人身份证号：</span><span>110111198702062254</span></li>
      <li><span class="label">手机号码：</span><span>18611325859</span></li>
      <li><span class="label">公司邮箱：</span><span>zhangglf@dcholdings.com</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'realName'
  };
</script>

<style lang="less" scoped>
  .realName {
    h2{
      font-size:18px;
      margin-bottom:15px;
      color:#1f3a3d;
    }
    ul{
      li{
        line-height: 30px;
        margin: 10px 0;
        span.label{
          width: 120px;
          text-align: right;
          margin-right: 25px;
          display: inline-block;
          color: #999;
        }

      }
    }
  }
</style>
