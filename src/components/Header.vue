<template>
  <div class="header">
<!--    <div class="left">-->
<!--      <div class="title">课程平台</div>-->
<!--      <el-button class="menu-button" type="text" icon="el-icon-s-home" @click="link('/')">首页</el-button>-->
<!--      <el-button class="menu-button" type="text" icon="el-icon-search" @click="link('/classes')">我的班级</el-button>-->
<!--      <el-button class="menu-button" type="text" icon="el-icon-search" @click="link('/courses')">课程总览</el-button>-->
<!--    </div>-->
    <div class="left title">课程平台</div>
    <div class="left button" :class="{active: active==='classes'}" @click="link('/classes')">我的班级</div>
    <div class="left button" :class="{active: active==='courses'}" @click="link('/courses')">课程总览</div>
<!--    <div class="left button">测试按钮</div>-->


    <div class="right button" @click="routeToUserInfo()">个人信息</div>
<!--    <div class="right button" slot="reference" >测试按钮</div>-->
<!--    <div class="right">-->
<!--      <el-button class="menu-button" type="text" icon="el-icon-user" @click="routeToUserInfo()">个人信息</el-button>-->
      <el-popconfirm
          class="right "
        confirm-button-text="确定"
        cancel-button-text="不用了"
        confirm-button-type="danger"
        icon="el-icon-info"
        icon-color="red"
        title="您确定要退出登录吗？"
        @confirm="logout"
      >
<!--        <el-button slot="reference" class="menu-button" type="text" icon="el-icon-switch-button"> 退出登录 </el-button>-->
        <div class="button" slot="reference" >退出登录</div>
      </el-popconfirm>
<!--    </div>-->
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Header",
  props:{
    active: String,
  },
  methods: {
    ...mapMutations(["setPageNow"]),
    link(url) {
      this.$router.push({ path: url });
    },
    routeToUserInfo() {
      this.$router.push({ path: "/userinfo" });
    },
    logout() {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userId");
      window.location.href = "/login";
    },
  },
};
</script>

<style scoped>

.header{
  --height:50px;

  display: inline-block;
  //position: fixed;
  float: top;
  top: 0;
  width: 100%;
  height: var(--height);
  //background-color: var(--green-color);
  background: linear-gradient(to right, var(--green-color), var(--green-secondary-color)) no-repeat 0 0 / cover;
}
.left {
  float: left;
  display: inline-block;
}
.title {
  color: white;
  float: left;
  margin: 10px;
  width: 200px;
}
.button {
  width: 120px;
  height: var(--height);
  line-height: var(--height);
  //background-color: white;
  color: white;
  margin-left: 1px;
  transition: all 0.5s ease 0s;
  //opacity: 0.4;
 }
.button:hover {
  cursor: pointer;
  height: var(--height);
  background-color: var(--orange-color);
  color: white;
  //border-bottom: var(--success_color) inset 2px;
  opacity: 0.9;
}
.active {
  cursor: pointer;
  height: var(--height);
  background-color: var(--orange-color);
  color: white;
  //border-bottom: var(--success_color) inset 2px;
  opacity: 1;
}
.menu-button {
  margin-left: 40px;
}
.right{
  float: right;
}
</style>
