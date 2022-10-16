<template>
  <!-- 一个头部容器，装着头部的logo和按钮 -->
  <div class="header-g">
    <!-- logo图片 -->
    <!--    <div class="logo">-->
    <!--      <img src="../assets/img/logo-1.png" alt="LOGO"/>-->
    <!--    </div>-->

    <!-- 右边的消息和头像以及设置按钮 -->
    <div class="block">
      <div class="logo" @click="turnIntoIndex">
        <img src="../assets/img/logo-1.png" alt="LOGO"/>
      </div>

      <!--TODO：以下代码需要进行修改-->
      <!--登录注册按钮  注意：登录后不显示 v-if="false"-->
      <div class="login" v-if="$store.state.isLogin">
        <el-button size="small" round @click="$router.push('/layout/register')" >注册
        </el-button>
        <el-button size="small" round @click="$router.push('/layout/login')">登录
        </el-button>
      </div>
      <!-- 退出按钮   注意：登录前不显示 v-if="false"-->
      <div style="float: right; width: 84px; height: 40px" v-if=$store.state.isNew
           @click="quit">

        <!--        <el-badge :value="2" class="item" type="warning">-->
        <el-badge class="item" type="warning">
          <el-button size="large">退出</el-button>
        </el-badge>
      </div>
      <!-- 用户头像图标 -->
      <div style="float: right; margin-right: 10px; margin-top: -3px" @click="turnIntoUser" v-if="$store.state.isNew">
        <el-avatar icon="el-icon-user-solid" :size="35" style="cursor: pointer"></el-avatar>
        <!--        欢迎语句，TODO：注册和登录界面不展示，登录进入后展示-->
<!--        <div class="uxname">欢迎您！{{ user.uxname }}</div>-->
        <div class="uxname">欢迎您！{{$store.state.user.uxname}}</div>
      </div>
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
      user: JSON.parse(localStorage.getItem('user')),
    };
  },
  methods: {
    quit() {
      localStorage.removeItem("user");
      localStorage.removeItem("cat");
      localStorage.removeItem("cats");
      localStorage.removeItem("apply");
      this.$store.commit("cisLogin");
      this.$store.commit("cisNew");
      this.$router.push("/layout/login");
    },
    turnIntoUser() {
      this.$router.push('/layout/self');
    },
    turnIntoIndex() {
      if(localStorage.getItem('user')){
        this.$router.push("/layout/user");
      }else{
        this.$router.push("/layout/login");
      }
    },
  },
  created() {
    this.$store.commit("cisLogin");
    this.$store.commit("cisNew");
  },
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
  margin-left: 0px;
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
  width: 132px;
  height: 32px;
  margin-top: 8px;
  margin-right: 20px;
}

.uxname {
  font-size: 12px;
  cursor: pointer;
}
</style>
