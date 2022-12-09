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
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="userId"
          label="ID"
          sortable
      >
      </el-table-column>
      <el-table-column
          label="操作"
      >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleLevel(scope.$index, scope.row, 1)">升级管理员</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleLevel(scope.$index, scope.row, -1)">取消管理员</el-button>
        </template>
      </el-table-column>
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
