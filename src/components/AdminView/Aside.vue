<template>
  <div class="aside">
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo menu"
        @open="handleOpen"
        @close="handleClose">
      <el-menu-item
          index="1"
          @click="setPageNow('courses')"
      >
        <i class="el-icon-video-camera"></i>
        <span>课程</span>
      </el-menu-item>
      <el-menu-item
          index="2"
          @click="setPageNow('classes')"
      >
        <i class="el-icon-video-camera"></i>
        <span>班级</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import {mapMutations, mapState, mapActions} from "vuex";
import axios from "axios";
export default {
  name: "Aside",
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations([
        'setPageNow'
    ]),

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>

<style scoped>
.aside{
  float: left;
  height: calc(100vh - 52px);
  width: 200px;
}
.menu{
  height: 100%;
  text-align: left;
//width: 100%;
}
</style>
