<template>
  <div class="changePwd">
    <b-form>
      <b-form-group label="旧密码：" label-cols="2" label-align="right">
        <b-form-input type="password" v-model="form.password"
                      placeholder="请填写旧密码" class="password" :state="rules.password.validation">
        </b-form-input>
        <b-form-invalid-feedback :state="rules.password.validation">
          {{rules.password.text}}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group label="新密码：" label-cols="2" label-align="right">
        <b-form-input type="password" v-model="form.newPassword" placeholder="请填写新密码"
                      class="newPassword" :state="rules.newPassword.validation">
        </b-form-input>
        <div class="invalid-feedback" :state="rules.newPassword.validation">
          {{rules.newPassword.text}}
        </div>
      </b-form-group>
      <b-form-group label="确认新密码：" label-cols="2" label-align="right">
        <b-form-input type="password" v-model="form.newPasswordConfirm" required placeholder="请确认新密码"
                      class="newPasswordConfirm" :state="rules.newPasswordConfirm.validation">

        </b-form-input>
        <div class="invalid-feedback" :state="rules.newPasswordConfirm.validation">
          {{rules.newPasswordConfirm.text}}
        </div>
      </b-form-group>
      <b-form-group label="" label-cols="2">
        <p style="font-size:14px;margin-top:15px;color:#999">注意：密码只能包含数字字母下划线中划线，8到20位</p>
      </b-form-group>
      <b-form-group label="" label-cols="2">
        <b-button type="button" variant="primary" @click="submitHandle">提交</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
  export default {
    name: 'changePwd',
    computed: {
      rules() {
        let reg = /^[0-9a-zA-Z_-]{8,20}$/;
        return this.checkStatus ? {
          password: {
            validation: this.form.password != '' && reg.test(this.form.password),
            text: this.form.password == '' ? '请填写旧密码' : !reg.test(this.form.password) ? '密码只能包含数字字母下划线中划线，8到20位' : ''
          },
          newPassword: {
            validation: this.form.newPassword != '' && reg.test(this.form.newPassword),
            text: this.form.newPassword == '' ? '请填写新密码' : !reg.test(this.form.newPassword) ? '密码只能包含数字字母下划线中划线，8到20位' : ''
          },
          newPasswordConfirm: {
            validation: this.form.newPassword != '' && this.form.newPassword == this.form.newPasswordConfirm,
            text: this.form.newPasswordConfirm == '' ? '请再次输入密码' : this.form.newPassword !== this.form.newPasswordConfirm ? '两次输入的新密码不一致' : ''
          }
        } : {password: {}, newPassword: {}, newPasswordConfirm: {}};
      }
    },
    data() {
      return {
        checkStatus: 0,
        form: {
          password: '',
          newPassword: '',
          newPasswordConfirm: ''
        }
      };
    },
    methods: {
      submitHandle(e) {
        this.checkStatus = 1;
        for (let key in this.rules) {
          if (!this.rules[key].validation) {
            return;
          }
        }
        //执行提交请求
      }
    }
  };
</script>
<style lang="less" scoped>
  .changePwd {
    padding-right:100px;
  }
</style>
