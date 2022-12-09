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
      <el-table-column
          label="操作"
      >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleApply(scope.$index, scope.row, 1)">同意</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleApply(scope.$index, scope.row, 2)">拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Apply",
  data(){
    return {
      classId: this.$route.query.classId,
      userApply: [],
    }
  },
  mounted() {
    this.getApply()
  },
  methods:{
    getApply(){
      this.axios.get(
          "/admin/class/"+this.classId+"/user/apply",
      ).then((res)=>{
        console.log('apply', res)
        this.userApply = res.data.data
        console.log(this.userApply)
      })
    },
    handleApply(index, row, isAgree) {
      console.log('accept', index, row);
      this.axios({
        url:"/admin/class/user/apply",
        method:"post",
        data:{
          applyId: row.id,
          isAgree: isAgree,
        },
      }).then((res)=>{
        console.log('0aaa', res)
        this.getApply()
        this.dialogVisible = false;
      })
    },
  }
}
</script>

<style scoped>

</style>
