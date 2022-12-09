<template>
<div>
  <el-table
      ref="multipleTable"
      :data="classMembers"
      tooltip-effect="dark"
      border
      style="width: 90%; margin: auto">
    <el-table-column
        prop="studentId"
        label="学号"
        sortable
    >
    </el-table-column>
    <el-table-column
        prop="name"
        label="名字"
    >
    </el-table-column>
    <el-table-column
        prop="type"
        label="权限"
    >
      <template slot-scope="scope">
        <el-tag v-if="scope.row.type === 2" type="success">创建者</el-tag>
        <el-tag v-if="scope.row.type === 1" type="">管理员</el-tag>
        <el-tag v-if="scope.row.type === 0" type="info">学生</el-tag>
      </template>
    </el-table-column>
<!--    <el-table-column-->
<!--        prop="userId"-->
<!--        label="ID"-->
<!--        width="80"-->
<!--    >-->
<!--    </el-table-column>-->
  </el-table>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Members",
  data(){
    return {
      classId: this.$route.query.classId,
      classMembers: [],
    }
  },
  mounted() {
    axios.get(
        "/class/"+this.classId+"/member",
    ).then((res)=>{
      console.log('member', res)
      this.classMembers = res.data.data
      console.log(this.classMembers)
    })
  }
}
</script>

<style scoped>

</style>
