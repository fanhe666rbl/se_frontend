<template>
<div class="form">
  <el-form  :label-position="'left'" label-width="120px">
    <el-form-item label="课程名称">
      <el-input v-model="courseItem.name" placeholder="请输入课程名称"></el-input>
    </el-form-item>
    <el-form-item label="排序">
      <el-input v-model="courseItem.order" placeholder="请输入排序"></el-input>
    </el-form-item>
  </el-form>
  <el-form  size="large">
    <el-form-item label="课程描述">
      <el-input
          v-model="courseItem.description"
          type="textarea"
          :maxlength="1000"
          placeholder="请输入课程描述"
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
    courseItem: Object,
  },
  data(){
    return {
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<style scoped>
.form {
  width: 80%;
  margin-left: 10%;
}
</style>
