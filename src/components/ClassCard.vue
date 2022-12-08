<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ classItem.name }}</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  name: "ClassCard",
  props:{
    classItem: Object,
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
