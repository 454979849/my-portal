<template>
  <div class="pwdSet">
    <b-card>
      <b-tabs>
        <b-tab title="修改密码" active>
          <div class="tabContent1">
            <b-form>
              <b-form-group label="请输入六位原始密码：" label-cols="4" label-align="right">
                <b-form-input type="password" v-model="form1.pwd"
                              placeholder="请输入六位原始密码" :state="rules.pwd.validation" maxlength="6">
                </b-form-input>
                <b-form-invalid-feedback :state="rules.pwd.validation">
                  {{rules.pwd.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="请输入新六位密码：" label-cols="4" label-align="right">
                <b-form-input type="password" v-model="form1.newPwd"
                              placeholder="请输入新六位密码" :state="rules.newPwd.validation" maxlength="6">
                </b-form-input>
                <b-form-invalid-feedback :state="rules.newPwd.validation">
                  {{rules.newPwd.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="请确认新六位密码：" label-cols="4" label-align="right">
                <b-form-input type="password" v-model="form1.newPwdConf"
                              placeholder="请确认新六位密码" :state="rules.newPwdConf.validation" maxlength="6">
                </b-form-input>
                <b-form-invalid-feedback :state="rules.newPwdConf.validation">
                  {{rules.newPwdConf.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group label="" label-cols="4" label-align="right">
                <b-button variant="primary" :disabled="canSubmit1" @click="submit1">设置</b-button>
              </b-form-group>
            </b-form>
          </div>
        </b-tab>
        <b-tab title="忘记密码">
          <div class="tabContent2">
            <b-form>
              <b-form-group>
                <label>认证手机号：</label>
                <b-form-input type="text" v-model="form2.tel" disabled
                              style="display:inline-block;width:200px;"></b-form-input>
              </b-form-group>
              <b-form-group>
                <label>验证码：</label>
                <b-form-input type="text" v-model="form2.code"
                              style="display:inline-block;width:200px;vertical-align: middle"></b-form-input>
                <img src="http://111.62.40.249/forget/payPwd/captcha.do?t=1552526622037">
                <b-form-invalid-feedback :state="rules2.code.validation" style="padding-left:168px;">
                  {{rules2.code.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label>手机验证码：</label>
                <b-form-input type="text" v-model="form2.mesCode"
                              style="display:inline-block;width:200px;vertical-align: middle"></b-form-input>
                <b-button variant="outline-primary" size="sm">获取手机验证码</b-button>
                <b-form-invalid-feedback :state="rules2.mesCode.validation" style="padding-left:168px;">
                  {{rules2.mesCode.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label>请输入新六位密码：</label>
                <b-form-input type="text" v-model="form2.resetPwd"
                              :state="rules2.resetPwd.validation" maxlength="6"
                              style="display:inline-block;width:200px;"></b-form-input>
                <b-form-invalid-feedback :state="rules2.resetPwd.validation" style="padding-left:168px;">
                  {{rules2.resetPwd.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label>请确认新六位密码：</label>
                <b-form-input type="text" v-model="form2.resetPwdConf"
                              :state="rules2.resetPwdConf.validation" maxlength="6"
                              style="display:inline-block;width:200px;"></b-form-input>
                <b-form-invalid-feedback :state="rules2.resetPwdConf.validation" style="padding-left:168px;">
                  {{rules2.resetPwdConf.text}}
                </b-form-invalid-feedback>
              </b-form-group>
              <b-form-group>
                <label></label>
                <b-button variant="primary" :disabled="canSubmit2" @click="submit2">设置</b-button>
              </b-form-group>
            </b-form>
          </div>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: 'pwdSet',
    computed: {
      rules() {
        let reg = /\d+/;
        return this.checkStatus1 ? {
          pwd: {
            validation: this.form1.pwd != '' && reg.test(this.form1.pwd) && this.form1.pwd.length == 6,
            text: this.form1.pwd == '' ? '请输入六位原始密码' : !reg.test(this.form1.pwd) ? '只能输入数字' : this.form1.pwd.length < 6 ? '密码为六位' : ''
          },
          newPwd: {
            validation: this.form1.newPwd != '' && reg.test(this.form1.newPwd) && this.form1.newPwd.length == 6,
            text: this.form1.newPwd == '' ? '请输入新六位密码' : !reg.test(this.form1.newPwd) ? '只能输入数字' : this.form1.newPwd.length < 6 ? '密码为六位' : ''
          },
          newPwdConf: {
            validation: this.form1.newPwdConf != '' && this.form1.newPwdConf == this.form1.newPwd,
            text: this.form1.newPwdConf == '' ? '请再次输入密码' : this.form1.newPwdConf !== this.form1.newPwd ? '两次输入的新密码不一致' : ''
          }
        } : {pwd: {}, newPwd: {}, newPwdConf: {}};
      },
      canSubmit1() {
        for (var key in this.form1) {
          if (!this.form1[key]) {
            return true;
          }
        }
        return false;
      },
      rules2() {
        let reg = /\d+/;
        return this.checkStatus2 ? {
          code: {
            validation: this.form2.code != '' && this.form2.code.length == 4,
            text: this.form2.code == '' ? '请输入验证码' : this.form2.code.length < 4 ? '验证码为四位' : ''
          },
          mesCode: {
            validation: this.form2.mesCode != '',
            text: this.form2.mesCode == '' ? '请输入短信验证码' : ''
          },
          resetPwd: {
            validation: this.form2.resetPwd != '' && reg.test(this.form2.resetPwd) && this.form2.resetPwd.length == 6,
            text: this.form2.resetPwd == '' ? '请输入新六位密码' : !reg.test(this.form2.resetPwd) ? '只能输入数字' : this.form2.resetPwd.length < 6 ? '密码为六位' : ''
          },
          resetPwdConf: {
            validation: this.form2.resetPwdConf != '' && this.form2.resetPwdConf == this.form2.resetPwd,
            text: this.form2.resetPwdConf == '' ? '请再次输入密码' : this.form2.resetPwdConf !== this.form2.resetPwd ? '两次输入的新密码不一致' : ''
          }
        } : {code: {}, mesCode: {}, resetPwd: {}, resetPwdConf: {}};
      },
      canSubmit2() {
        for (var key in this.form2) {
          if (!this.form2[key]) {
            return true;
          }
        }
        return false;
      },
    },
    data() {
      return {
        checkStatus1: 0,
        form1: {
          pwd: '',
          newPwd: '',
          newPwdConf: ''
        },
        checkStatus2: 0,
        form2: {
          tel: '17786475086',
          code: '',
          mesCode: '',
          resetPwd: '',
          resetPwdConf: ''
        }
      };
    },
    methods: {
      submit1() {
        this.checkStatus1 = 1;
        //todo
      },
      submit2(){
        this.checkStatus2=1;
        //todo

      }
    }
  };
</script>

<style lang="less" scoped>
  .pwdSet {
    .tabContent1 {
      padding: 40px 200px 15px 150px;
    }

    .tabContent2 {
      padding: 40px 200px 15px 150px;

      label {
        width: 150px;
        text-align: right;
        margin-right: 15px;
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
</style>
