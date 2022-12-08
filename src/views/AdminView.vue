<template>
<div>
  <Header></Header>
  <Aside></Aside>
  <el-main class="main">
    <Classes v-if="pageNow === 'classes'"></Classes>
  </el-main>
</div>
</template>

<script>
import Header from "@/components/Header";
import Aside from "@/components/AdminView/Aside";
import Classes from "@/components/AdminView/Classes";
import {mapState} from "vuex";
export default {
  name: "AdminView",
  components: {Classes, Aside, Header},
  computed: {
    ...mapState([
      'pageNow',
    ])
  },
  data(){
    return {
      page: 'classes'
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
