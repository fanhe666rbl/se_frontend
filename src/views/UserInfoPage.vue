<template>
  <div>
    <Header></Header>
    <el-main class="main">
      <el-card>
        <el-descriptions class="margin-top" title="简介" :column="2" border>
          <el-button type="primary" size="small">操作</el-button>
          <el-descriptions-item label="昵称">昵称</el-descriptions-item>
          <el-descriptions-item label="真实姓名">真实姓名</el-descriptions-item>
          <el-descriptions-item label="学校">学校</el-descriptions-item>
          <el-descriptions-item label="学号">学号</el-descriptions-item>
          <el-descriptions-item label="邮箱">邮箱</el-descriptions-item>
          <el-descriptions-item label="专业">专业</el-descriptions-item>
        </el-descriptions>

      </el-card>
    </el-main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "UserInfoPage",
  components: { Header },

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
</style>