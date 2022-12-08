<template>
  <div>
    <Header></Header>
    <div>
      <el-main class="main">
        <div class="courseList" v-for="(course, index) in courseList">
          <CourseCard :course="course"></CourseCard>
        </div>
      </el-main>
    </div>
  </div>

</template>

<script>
import Header from "@/components/Header";
import CourseCard from "@/components/CourseList/CourseCard";
import axios from "axios";
export default {
  name: "CourseList",
  components: {CourseCard, Header},
  data(){
    return{
      courseL: new Array(14).fill({
        name: "程序设计基础ttest",
        info: "大一程序设计课",
        classList: [
          {
            id: 1,
            name: "2021程序设计基础"
          }
        ]
      }),
      courseList:[
          {
            name: "程序设计基础ttest",
            info: "大一程序设计课",
            classList: [
              {
                id: 1,
                name: "2021程序设计基础"
              }
            ]
          },
      ],
    }
  },
  mounted() {
    // window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJja3JAdGVzdC5jb20iLCJpZCI6NywiaWF0IjoxNjcwMjA4MjIwLCJqdGkiOiIxZTJkNzBiZi02M2EwLTRmYzItOThhZC1lODI5M2ExNTZmZGEifQ.EhZsYqGqrdtcctt-PgZp1Y_BFjcdH_5EzZr3Peic5T4')
    this.loadCourseList()
  },
  methods:{
    loadCourseList(){
      axios.get(
          "/course/list",
      ).then((res)=>{
        this.courseList = res.data.data
        // console.log(this.courseList)
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
