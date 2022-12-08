<template>
  <div>
    <el-button @click="dialogVisible = true" type="primary">修改信息</el-button>
    <el-dialog title="修改个人信息" :visible.sync="dialogVisible">
      <el-form>
        <el-form-item label="用户昵称">
          <el-input v-model="user.nickname" placeholder="请输入用户昵称"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名">
          <el-input v-model="user.realname" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="学校">
          <el-input v-model="user.school" placeholder="请输入学校名称"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="user.student_id" placeholder="请输入学号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="user.major" placeholder="请输入专业"></el-input>
        </el-form-item>
        <el-form-item label="个人描述">
          <el-input
            v-model="user.description"
            type="textarea"
            :maxlength="300"
            placeholder="请输入个人描述"
            show-word-limit
            resize="none"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    user: Object,
  },
  data() {
    return {
      dialogVisible: false,
      userInfo: {
        nickname: "",
        realname: "",
        school: "",
        student_id: "",
        email: "",
        major: "",
        description: "",
      },
    };
  },
  mounted() {
    this.userInfo = this.user;
  },
  methods: {
    updateUserInfo() {
      axios
        .put("/user/edit", {
          nickname: this.user.nickname,
          realname: this.user.realname,
          school: this.user.school,
          studentId: this.user.student_id,
          email: this.user.email,
          major: this.user.major,
          description: this.user.description,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status == 200) {
            this.$message.success("用户信息更新成功");
          } else {
            this.user = this.userInfo;
            this.$message.error("用户信息更新失败");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      this.dialogVisible = false;
    },
  },
};
</script>
