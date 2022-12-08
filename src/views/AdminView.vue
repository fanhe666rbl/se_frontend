<template>
<div>
  <Header></Header>
  <Aside></Aside>
  <el-main class="main">
    <Classes v-if="pageNow === 'classes'"></Classes>
    <Courses v-if="pageNow === 'courses'"></Courses>
  </el-main>
</div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/AdminView/Aside";
import Classes from "@/components/AdminView/Classes";
import {mapState} from "vuex";
import Courses from "@/components/AdminView/Courses";
export default {
  name: "AdminView",
  components: {Courses, Classes, Aside, Header},
  computed: {
    ...mapState([
      'pageNow',
    ])
  },
  data(){
    return {
      page: 'courses'
    }
  }
}
</script>

<style scoped>
.main {
//background-color: #E9EEF3;
//float: right;
  margin: auto;
  width: calc(100% - 200px);
//height: 100%;
//min-height: 90vh;
}
</style>
