<template>
  <div id="app">
    <div class="containers">
      <div class="left">
        <div class="user-avatar">
          <div class="user-avatar-top">
            <div class="imgBox">
              <el-upload
                action=""
                :auto-upload="false"
                :before-upload="beforeAvatarUpload"
                style="position:absolute;left:0;top:0;width:100%;height:100%;opacity:0">

                <el-button slot="trigger" size="small" type="primary"
                           style="position:absolute;left:0;top:0;width:100%;height:100%;opacity:1">选取文件
                </el-button>
              </el-upload>
              <img src="../../asset/userDefault.jpg">
            </div>
            <span class="userName">usersky</span>
            <p>已认证</p>
          </div>
          <div class="user-avatar-bottom">
            <p>消息</p>
            <a href="">查看</a>
          </div>
        </div>
        <div class="user-menu">
          <ul>
            <li v-for="(item,index) in menuConfig" :key="index" :class="{'active':index==activeIndex}"
                @click="toggleLink(item.path,index)">
              <a>{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="userRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        file: null,
        activeIndex: -1,
        menuConfig: [{
          path: '/userCenter/userBase',
          title: '个人中心'
        }, {
          path: '/myData/starData',
          title: '我的数据'
        }, {
          path: '/orderManage/cart',
          title: '订单管理'
        }, {
          path: '/account/recharge',
          title: '账户管理'
        }]
      };
    },
    mounted() {
      this.menuConfig.forEach((item, index) => {
        if (this.$route.path == item.path) {
          this.activeIndex = index;
        }
      });
    },
    methods: {
      toggleLink(path, index) {
        this.$router.push(path);
        this.activeIndex = index;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    watch: {
      '$route'(newVal) {
        if (newVal.path == this.menuConfig[0].path) {
          this.activeIndex = 0;
        }
      }
    }
  };
</script>

<style lang="less" scoped>
  #app {
    .containers {
      padding: 30px 0;

      &:after {
        content: '';
        display: block;
        clear: both;
      }

      & > .left {
        float: left;
        width: 240px;

        & > .user-avatar {
          height: 265px;
          background: #fff;
          box-shadow: 0 2px 7px rgba(0, 0, 0, .15);

          .user-avatar-top {
            height: 185px;
            text-align: center;
            padding-top: 30px;

            .imgBox {
              border: 1px dashed #d9d9d9;
              border-radius: 6px;
              cursor: pointer;
              position: relative;
              overflow: hidden;
              width: 76px;
              height: 76px;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 15px;

              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }

            span.userName {
              text-decoration: underline;
              color: #409EFF;
              font-size: 20px;
            }

            p {
              color: #999;
            }
          }

          & > .user-avatar-bottom {
            margin-top: 15px;
            padding: 0 35px;
            box-sizing: border-box;
            text-align: center;

            p {
              color: #999;
              line-height: 1.8;
            }

            a {
              color: #409EFF;
            }
          }
        }

        & > .user-menu {
          margin-top: 15px;
          padding: 20px 0;
          box-sizing: border-box;
          background: #fff;
          box-shadow: 0 2px 7px rgba(0, 0, 0, .15);

          ul {
            li {
              height: 35px;
              line-height: 35px;
              padding-left: 40px;
              font-size: 16px;
              border-left: 3px solid #fff;
              box-sizing: border-box;
              margin: 10px 0;

              &.active, &:hover {
                border-left: 3px solid #409EFF;

                a {
                  color: #409EFF;
                }
              }

              a {
                color: #333;
              }
            }
          }
        }
      }

      & > #userRight {
        margin-left: 270px;
      }
    }
  }
</style>
