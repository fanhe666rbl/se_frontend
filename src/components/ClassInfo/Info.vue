<template>
  <div class="container">
    <el-card shadow="always" class="class-card">
      <h1 class="class-name">{{ classInfo.name }}</h1>
      <div class="class-info" v-if="classInfo.info != ''">
        {{ classInfo.info }}
      </div>
    </el-card>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Info",
  data() {
    return {
      classInfo: {},
      classId: this.$route.query.classId,
      dialogFormVisible:false,
      apply:{},
    };
  },
  mounted() {
    console.log(this.$route.query.classId);
    axios.get("/class/" + this.classId + "/info").then(res => {
      console.log("class", res);
      this.classInfo = res.data.data;
      console.log(this.classInfo);
    });
  },
  methods:{

  }
};
</script>

<style scoped>
.container {
  //display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.class-card {
  margin: 0 auto;
  width: 85%;
}

.class-name {
  font-family: serif;
}

.class-info {
  background-color: #eee;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid rgba(102, 102, 102, 0.3);
  padding: 1em;
  text-align: justify;
  white-space: pre-line;
  line-height: 1.6em;
}
</style>
