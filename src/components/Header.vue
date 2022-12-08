<template>
<div class="header">
  <div class="left">
    <div class="title">课程平台</div>
    <el-button class="menu-button"  type="text" icon="el-icon-s-home" @click="link('/')">首页</el-button>
    <el-button class="menu-button"  type="text" icon="el-icon-search" @click="setPageNow('classes')">我的班级</el-button>
    <el-button class="menu-button"  type="text" icon="el-icon-search" @click="setPageNow('courses')">课程总览</el-button>
  </div>

  <div class="right">
    <el-button class="button"  type="text" icon="el-icon-user" @click="routeToUserInfo()">个人信息</el-button>
    <el-button class="button"  type="text" icon="el-icon-search" @click="isSearch=true">搜索</el-button>
  </div>
</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Header",
  methods:{
    ...mapMutations([
      'setPageNow'
    ]),
    link(url){
      window.location.href = url;
    },
    routeToUserInfo() {
      this.$router.push({path: '/userinfo'});
    }
  }
}
</script>

<style scoped>
.header{
  display: inline-block;
  //position: fixed;
  float: top;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--primary_color);
}
.left{
  float: left;
}
.title {
  color: white;
  float: left;
  margin: 10px;
}
.menu-button {
  margin-left: 40px;
}
.right{
  float: right;
}
</style>
