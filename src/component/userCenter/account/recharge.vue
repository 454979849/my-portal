<template>
  <div class="recharge">
    <div class="balance">
      <p>
        账户余额：
        <span>0</span>
        元
      </p>
    </div>
    <div class="step">
      <el-steps :active="stepActive" simple finish-status="success" style="background-color:#fff;">
        <el-step title="账户充值" icon="el-icon-edit"></el-step>
        <el-step title="确认并支付" icon="el-icon-upload"></el-step>
        <el-step title="完成" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>

    <div class="contentBox">
      <div class="content1" v-if="stepActive==0">
        <b-form-group style="height:60px;">
          <label>充值金额：</label>
          <b-form-input type="text" v-model="form.recharge" :state="rules.recharge.validation"
                        style="width:150px;display:inline-block;"></b-form-input>
          <b-form-invalid-feedback :state="rules.recharge.validation" style="padding-left:118px;">
            {{rules.recharge.text}}
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group>
          <label></label>
          <b-button variant="primary" @click="next1">下一步</b-button>
        </b-form-group>
      </div>
      <div class="content2" v-if="stepActive==1">
        <p class="willPay">应付金额： <span>{{form.recharge}}</span> 元</p>
        <hr>
        <h3>请选择支付方式</h3>
        <div class="payType">
          <b-form-radio-group v-model="payMethod">
            <b-form-radio value="zfb"><img src="../../../asset/zhifubao.png"></b-form-radio>
            <div style="display:inline-block;width:15px;"></div>
            <b-form-radio value="wx"><img src="../../../asset/weixin.png"></b-form-radio>
          </b-form-radio-group>
        </div>
        <b-button variant="success" style="margin-left:55px;margin-top:10px;">确认支付</b-button>
        <hr>
        <div class="bottom">
          <ul>
            <li>请选择支付方式。如果您使用支付宝账户支付，请选择“支付宝”；如果您使用微信账户支付，请选择“微信支付”。</li>
            <li>请遵守支付宝、微信或相关银行的规定进行操作。您在支付宝、微信或相关银行页面上进行的任何操作及其产生的任何法律后果，将按照您与支付宝、微信或相关银行之间签订的合同处理。本网站不承担任何责任。</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'recharge',
    computed: {
      rules() {
        let reg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/;
        return {
          recharge: this.checkStatus ? {
            validation: this.form.recharge != '' && reg.test(this.form.recharge) && this.form.recharge >= 1,
            text: this.form.recharge == '' ? '请输入金额' : !reg.test(this.form.recharge) ? '价格只能为数字，且小数点后不超过2位' : this.form.recharge < 1 ? '请输入大于1的价格' : ''
          } : {}
        };
      }
    },
    data() {
      return {
        checkStatus: 0,
        stepActive: 0,
        form: {
          recharge: ''
        },
        payMethod: 'zfb'
      };
    },
    methods: {
      next1() {
        this.checkStatus = 1;
        if (this.rules.recharge.validation) {
          this.stepActive++;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  .recharge {
    .balance {
      -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      -moz-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      padding: 0 25px;
      background: #fff;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      height: 80px;

      p {
        font-size: 18px;

        span {
          color: #409EFF;
          font-size: 20px;
        }
      }
    }

    .step {
      -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      -moz-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      background: #fff;
      margin-bottom: 20px;
      height: 80px;
      padding-top: 17px;
    }

    .contentBox {
      -webkit-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      -moz-box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      box-shadow: 0 2px 7px rgba(0, 0, 0, .15);
      background: #fff;
      margin-bottom: 20px;
      padding: 25px;

      .content1 {
        label {
          width: 100px;
          text-align: right;
          margin-right: 15px;
          font-weight: normal;
          font-size: 14px;
        }
      }

      .content2 {
        .bottom {
          padding: 0 20px;
          margin-top: 20px;

          ul {
            li {
              line-height: 30px;
              list-style: initial;
              color: #999;
            }
          }
        }

        p.willPay {
          font-size: 18px;

          span {
            color: #409EFF;
          }
        }

        hr {
          height: 0;
          margin-top: 20px;
          margin-bottom: 20px;
          border: 0;
          border-top: 1px solid #eee;
        }

        h3 {
          font-size: 16px;
        }

        .payType {
          height: 100px;
          padding-top: 20px;
          padding-left: 30px;

          /deep/ .custom-control-label::after {
            top: 15px;
          }

          /deep/ .custom-control-label::before {
            top: 15px;
          }
        }
      }
    }
  }
</style>
