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
              v-if="scope.row.type === 0"
              @click="handleLevel(scope.$index, scope.row, 1)">升级管理员</el-button>
          <el-button
              size="mini"
              type="danger"
              v-if="scope.row.type === 1"
              @click="handleLevel(scope.$index, scope.row, 0)">取消管理员</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminMembers",
  data(){
    return {
      classId: this.$route.query.classId,
      classMembers: [],
    }
  },
  mounted() {
    this.getMembers()
  },
  methods:{
    getMembers(){
      this.axios.get(
          "/class/"+this.classId+"/member",
      ).then((res)=>{
        console.log('member', res)
        this.classMembers = res.data.data
        console.log(this.classMembers)
      })
    },
    handleLevel(index, row, access) {
      this.axios({
        url:"/admin/class/"+this.classId+"/user/"+row.userId+"/access",
        method:"post",
        data:{
          access: access,
        },
      }).then((res)=>{
        this.getMembers()
      })
    },
  }
}
</script>

<style scoped>

</style>
