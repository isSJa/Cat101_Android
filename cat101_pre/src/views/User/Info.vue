<template>
  <div>
    <div class="info">
      <el-button type="danger" plain class="star" @click="star">收藏</el-button>
      <el-image :src=(cat.curl) :preview-src-list="srcList" title="点击查看大图"></el-image>
      <div class="msg">
        <el-tag type="info">猫咪名称</el-tag>
        <div class="detail">{{ cat.cname }}</div>
        <el-tag type="info">毛色</el-tag>
        <div class="detail">{{ cat.ccolor }}</div>
        <el-tag type="info">信息描述</el-tag>
        <div class="detail">{{ cat.cinfo }}</div>
        <el-tag type="info">状态</el-tag>
        <div class="detail">
          <div v-if="cat.cisadopt==0">待领养哦~</div>
          <div v-else-if="cat.cisadopt==1">已有人申请领养啦~</div>
          <div v-else>已被领养~</div>
        </div>
      </div>
      <div class="btn">
        <!--        TODO:申请完成后，能将按钮 disabled 然后文字为：已领养-->
        <el-button type="warning" plain @click="$router.push('/layout/apply')" :disabled="isDisabled">申请领养</el-button>
      </div>
    </div>
  </div>
</template>

<script>

import {starAPI, updateCatAPI} from "@/api";

export default {
  name: 'myInfo',
  data() {
    return {
      srcList: [
        JSON.parse(localStorage.getItem('cat')).curl,
      ],
      cat: {},
      form: {
        uid: '',
        cid: '',
      },
      isDisabled: true
    };
  },
  methods: {
    indexs: async function () {
      this.cat = JSON.parse(localStorage.getItem('cat'));
      if (this.cat.cisadopt == 0) this.isDisabled = false;
    },
    async star() {
      this.form.uid = JSON.parse(localStorage.getItem('user')).uid;
      this.form.cid = this.cat.cid;
      const json = JSON.stringify(this.form);
      const {data: res} = await starAPI(json);    //提交表单后获取到表单数据对象ruleForm然后使用axios传递给接口函数，得到一个返回值，是promise对象       //打印后端返回结果,用于验证编写是否成功，后续可删除这段！！！！！！！
      if (res.code === '200') {
        this.$message.success("收藏成功！！")                            ////后端返回成功结果，提示后端返回的错误message或者也可以自己设置提示
      }
    },
  },
  created: async function (i) {
    //自动加载indexs方法
    this.indexs();
  }
};
</script>

<!-- <style lang="less" scoped></style> -->
<style scoped>
.info {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

.el-image {
  width: 80%;
  border-radius: 5%;
  display: block;
  margin: 30px;
}

.el-tag {
  display: block;
  font-size: 14px;
  margin-bottom: 20px;
  width: 80px;
  text-align: center;
}

.msg {
  margin-left: 50px;
  margin-bottom: 20px;
}

.detail {
  margin-left: 30px;
  margin-bottom: 20px;
  /*width: 560px;*/
  text-indent: 2em;
  line-height: 2em;
}

.btn {
  width: 150px;
  margin: 50px auto 0;
}

.el-button:last-child {
  font-size: 20px;
  padding: 15px 25px;
}

.el-button {
  font-size: 14px;
  padding: 10px 15px;
  /*letter-spacing: 3px;*/
}

.el-page-header {
  margin: 30px;
}

.star {
  position: absolute;
  right: 15px;
  top: -22px;
  z-index: 999;
}

.el-col el-col-24 {
  background-color: #e6ca99;
}
</style>
