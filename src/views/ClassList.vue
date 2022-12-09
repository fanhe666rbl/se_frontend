<template>
  <div>
    <Header :active="'classes'"></Header>
    <div>
      <el-main class="main">
        <div class="courseList" v-for="(classItem, index) in classList">
          <ClassCard :classItem="classItem"></ClassCard>
        </div>
      </el-main>
    </div>
  </div>
</template>

<script>
import ClassCard from "@/components/ClassList/ClassCard";
import Header from "@/components/Header";
export default {
  name: "ClassList",
  components: {Header, ClassCard},
  data(){
    return{
      classList: [],
    }
  },
  mounted() {
    this.loadClassList()
  },
  methods:{
    loadClassList(){
      this.axios.get(
          "/class/list",
      ).then((res)=>{
        console.log('class', res)
        this.classList = res.data.data
        // console.log(this.classList)
      })
    },
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  background-color: #E9EEF3;
  color: #333;
  width: 72%;
  margin: -10px auto;
  min-height: 940px;
}
.courseList {
  display: inline-block;
  width: 240px;
  height: 180px;
  margin: 30px;
}
</style>
