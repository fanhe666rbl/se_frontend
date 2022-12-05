<template>
<div class="header">
  <div class="left">
    <span>left</span>
<!--    <img src="../assets/AnHuaLogoWhite.svg" alt class="img">-->
  </div>

  <div class="right">
    <el-button class="button"  type="text" icon="el-icon-s-home" @click="link('/')">首页</el-button>
    <el-button class="button"  type="text" icon="el-icon-search" @click="isSearch=true">搜索</el-button>
  </div>
</div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    link(url){
      window.location.href = url;
    },
  }
}
</script>

<style scoped>
.header{
  display: flex;
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
.right{
  float: right;
}
</style>
