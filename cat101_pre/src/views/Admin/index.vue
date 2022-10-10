<template>
  <div id="app">
    <!-- 外层容器-->
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router="ture"
        >
        <el-menu-item index="/layout/admin/catdb">流浪猫数据库</el-menu-item>
        <el-menu-item index="/layout/admin/addcat">
          <i class="el-icon-plus"></i>
          <span slot="title">添加猫咪</span>
        </el-menu-item>
        <el-menu-item index="/layout/admin/applydb">申请书列表</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
      <!-- <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#f4eed6"
          text-color="#442804"
          active-text-color="#442804"
          router="ture"
        >
          <el-menu-item index="/layout/admin/catdb">
            <i class="el-icon-s-grid"></i>
            <span slot="title">流浪猫数据库</span>
          </el-menu-item>
          <el-menu-item index="/layout/admin/applydb">
            <i class="el-icon-s-open"></i>
            <span slot="title">申请书列表</span>
          </el-menu-item> -->
          <!-- <el-menu-item index="/layout/admin/catdb">
              <i class="el-icon-setting"></i>
              <span slot="title">退出登录</span>
            </el-menu-item> -->
        <!-- </el-menu>
      </el-aside> -->
      <!-- 中间路由组件区 -->
      <!-- <router-view></router-view>
    </el-container> -->
  </div>
</template>
  
  <script>
export default {
  name: "myAdmin",
  data(){
    return{
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
};
</script>
  <style>
.el-row {
  margin: 0 !important;
}
.el-header {
  background-color: #ffffff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background-color: #f4eed6;
}
</style>