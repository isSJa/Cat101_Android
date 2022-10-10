<template>
  <!-- 一个头部容器，装着头部的logo和按钮 -->
  <div class="header-g">
    <!-- logo图片 -->
    <!--    <div class="logo">-->
    <!--      <img src="../assets/img/logo-1.png" alt="LOGO"/>-->
    <!--    </div>-->

    <!-- 右边的消息和头像以及设置按钮 -->
    <div class="block">
      <div class="logo" @click="$router.push('/layout/user')">
        <img src="../assets/img/logo-1.png" alt="LOGO" />
      </div>

      <!--TODO：以下代码需要进行修改-->
      <!--登录注册按钮  注意：登录后不显示 v-if="false"-->
      <div class="login" v-if="$store.state.isLogin">
        <el-button size="small" round @click="$router.push('/layout/register')" style="margin-left: 30px">注册
        </el-button>
        <el-button size="small" round @click="$router.push('/layout/login')">登录
        </el-button>
      </div>
      <!-- 新消息显示按钮，可跳转到另一个消息页面   注意：登录前不显示 v-if="false"-->
      <div style="float: right; width: 84px; height: 40px" v-if=$store.state.isNew
           @click="quit">

        <!--        <el-badge :value="2" class="item" type="warning">-->
        <el-badge class="item" type="warning">
          <el-button size="large">退出</el-button>
        </el-badge>
      </div>
      <!-- 用户头像图标 -->
      <!--      <div style="float: right; margin-right: 3px; margin-top: 1px">-->
      <!--        <el-avatar icon="el-icon-user-solid" :size="35"></el-avatar>-->
      <!--      </div>-->
    </div>
  </div>
</template>
<script>
export default {
  name: "welLogo",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
    };
  },
  methods:{
    quit(){
      this.$router.push('/layout/user');
      this.$store.state.isNew = false;
      this.$store.state.isLogin = true;
    }
  }
};
</script>

<style scoped>
.header-g {
  height: 93px;
  background-color: #f4eed6;
  border: 1px solid #eee;
  border-bottom: 0;
  margin: -8px;
  z-index: 999;
  width: 418px;
}

.logo {
  float: left;
  height: 56px;
  margin-left: 12px;
}

.logo img {
  height: 100%;
}

.block {
  float: right;
  height: 70px;
  width: 400px;
  margin-top: 24px;
  margin-left: 1px;
}

.login {
  float: right;
  width: 152px;
  height: 32px;
  margin-top: 8px;
  margin-right: 20px;
}
</style>
