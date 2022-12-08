<template>
<div>
  <el-form  :label-position="'left'" label-width="120px">
    <el-form-item label="班级名称">
      <el-input v-model="classItem.name" placeholder="请输入班级名称"></el-input>
    </el-form-item>
    <el-form-item label="班级所属课程">
      <el-select v-model="classItem.courseId" placeholder="请选择活动区域">
        <el-option
            v-for="course in course_list"
            :key="course.id"
            :label="course.name"
            :value="course.id">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <el-form :inline="true"  class="demo-form-inline">
    <el-form-item label="order">
      <el-input v-model="classItem.order" placeholder="请输入order"></el-input>
    </el-form-item>
    <el-form-item label="权限">
      <el-select v-model="classItem.access" placeholder="请选择权限">
        <el-option label="公开" value="public"></el-option>
        <el-option label="保护" value="protected"></el-option>
        <el-option label="私有" value="private"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <el-form  size="large">
    <el-form-item label="班级描述">
      <el-input
          v-model="classItem.description"
          type="textarea"
          :maxlength="1000"
          placeholder="请输入班级描述"
          show-word-limit
          resize="none"
      ></el-input>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "ClassEdit",
  props:{
    classItem: Object,
  },
  data(){
    return {
      course_list:[],
    }
  },
  mounted() {
    this.getCourses()
  },
  methods:{
    getCourses(){
      this.axios({
        url:"/admin/course/list",
        method:"get",
      }).then((res)=>{
        console.log(res)
        this.course_list = res.data.data
        console.log('admin options', this.course_list)
      })
    }
  }
}
</script>

<style scoped>

</style>
