<template>
  <el-card class="card">
    <el-descriptions class="margin-top" title="个人信息" :column="3" direction="vertical" border>
      <template slot="extra">
        <ModifyUserInfo :user="user" @userInfoUpdated="onUpdateUser" />
      </template>
      <el-descriptions-item label="用户昵称">{{ user.nickname }}</el-descriptions-item>
      <el-descriptions-item label="真实姓名">{{ user.realname }}</el-descriptions-item>
      <el-descriptions-item label="学校">{{ user.school }}</el-descriptions-item>
      <el-descriptions-item label="学号">{{ user.student_id }}</el-descriptions-item>
      <el-descriptions-item label="邮箱">{{ user.email }}</el-descriptions-item>
      <el-descriptions-item label="专业">{{ user.major }}</el-descriptions-item>
      <el-descriptions-item label="个人描述" labelStyle="width: 25%">{{ user.description }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script>
import ModifyUserInfo from "@/components/userinfo/ModifyUserInfo";

export default {
  components: {
    ModifyUserInfo,
  },
  props: {
    user: Object,
  },
  methods: {
    onUpdateUser(userInfo) {
      this.$emit("userInfoUpdated", userInfo);
    },
  },
};
</script>

<style scoped></style>
