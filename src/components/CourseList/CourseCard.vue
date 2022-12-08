<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ course.name }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div style="float: left" v-for="(item, index) in course.classList" :key="index" class="text item">
        {{'班级名： ' + item.name }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "CourseCard",
  props:{
    'course': Object,
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  //margin-bottom: 18px;
  height: 20px;
  overflow: hidden;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 240px;
  height: 240px;
}
</style>
