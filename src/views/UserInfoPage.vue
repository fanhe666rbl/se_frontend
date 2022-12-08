<template>
  <div>
    <Header></Header>
    <el-main class="main">
      <UserInfoCard :user="user" />
    </el-main>
  </div>
</template>
<script>
import Header from "@/components/Header";
import UserInfoCard from "@/components/userinfo/UserInfoCard";
import axios from "axios";

export default {
  components: {
    UserInfoCard,
    Header,
  },
  data() {
    return {
      user: {
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
    axios
      .get("/user/info")
      .then((res) => {
        this.user = res.data.data;
        console.log(this.user);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onUpdateUser(userInfo) {
      this.user = userInfo;
    },
  },
};
</script>

<style scoped>
.main {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
</style>
