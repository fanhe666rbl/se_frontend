<template>
  <div>
    <el-table
        ref="multipleTable"
        :data="userApply"
        tooltip-effect="dark"
        border
        style="width: 90%; margin: auto">
      <el-table-column
          prop="id"
          label="ApplyID"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="user_Id"
          label="userID"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="studentId"
          label="学号"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="real_name"
          label="真实姓名"
      >
      </el-table-column>
      <el-table-column
          prop="username"
          label="用户名"
      >
      </el-table-column>
      <el-table-column
          prop="info"
          label="申请详情"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Apply",
  data(){
    return {
      classId: this.$route.query.classId,
      userApply: [],
    }
  },
  mounted() {
    axios.get(
        "/class/"+this.classId+"/user/apply",
    ).then((res)=>{
      console.log('apply', res)
      this.userApply = res.data.data
      console.log(this.userApply)
    })
  }
}
</script>

<style scoped>

</style>
