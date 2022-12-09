<template>
  <div class="header">

    <div v-if="active !== 'admin'" class="left title">
      <img class="img" :src="titleImg" />
    </div>
    <div v-if="active === 'admin'" class="left title">
      <img class="imgAdmin" :src="titleImg" />
    </div>
    <div class="left button" :class="{active: active==='classes'}" @click="link('/classes')">我的班级</div>
    <div class="left button" :class="{active: active==='courses'}" @click="link('/courses')">课程总览</div>



    <div class="right button" @click="routeToUserInfo()">个人信息</div>

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

        <div class="button" slot="reference" >退出登录</div>
      </el-popconfirm>

  </div>
</template>

<script>
import { mapMutations } from "vuex";
import titleImg  from '@/assets/Title.png'

export default {
  name: "Header",
  props:{
    active: String,
  },
  data() {
    return {
      titleImg:titleImg,
    }
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
.imgAdmin {
  //position: absolute;
  margin-top: -20px;
  height: 65px;
  left: 10px;
  top: 20px;
  z-index: 2;
}
.img {
  position: absolute;
 margin-top: -20px;
  height: 120px;
  left: -10px;
  top: 20px;
  z-index: 2;
}

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
  width: 370px;
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
