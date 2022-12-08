<template>
  <div>
    <Header></Header>
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
import axios from "axios";
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
    // window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJja3JAdGVzdC5jb20iLCJpZCI6NywiaWF0IjoxNjcwMjA4MjIwLCJqdGkiOiIxZTJkNzBiZi02M2EwLTRmYzItOThhZC1lODI5M2ExNTZmZGEifQ.EhZsYqGqrdtcctt-PgZp1Y_BFjcdH_5EzZr3Peic5T4')
    this.loadClassList()
  },
  methods:{
    loadClassList(){
      axios.get(
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
  width: 100%;
  height: auto;
}
.courseList {
  display: inline-block;
  width: 240px;
  height: 240px;
  margin: 30px;
}
</style>
