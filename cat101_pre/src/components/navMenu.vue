<!-- 左侧的导航栏 -->
<template>
    <el-menu :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router="ture">
        <!-- 点击导航栏跳转到首页 -->
      <el-menu-item index="/layout/user" default-active>
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
        <!-- 点击导航栏跳转到我的申请 -->
      <el-menu-item index="/layout/apply" >
        <template slot="title">
        <i class="el-icon-user-solid" style="margin: 0px;"></i>
        <span>我的申请</span>
      </template>
      </el-menu-item>
      <!-- 点击跳转导航栏 跳转到 收藏-->
      <el-menu-item index="/layout/like">
        <template slot="title">
          <i class="el-icon-star-off"></i>
          <span>收藏</span>
        </template>
      </el-menu-item>     
    </el-menu>
</template>
<script>
export default {
  name: "navMenu",
  data(){
    return {
      activeIndex: '1',
      activeIndex2: '1'

    }
  }
};
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.el-menu-demo {
  padding-left: 40px;
  margin-top: 10px;
}
</style>
