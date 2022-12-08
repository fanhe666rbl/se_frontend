<template>
<div>
  <div>
<!--    {{member}}-->
    <el-table
        ref="multipleTable"
        :data="classMembers"
        tooltip-effect="dark"
        border
        style="width: 90%; margin: auto"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="60"
      >
      </el-table-column>
      <el-table-column
          prop="studentId"
          label="学号"

          sortable
      >
        <!--          <template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
          prop="name"
          label="名字"
      >
        <!--          <template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
          prop="type"
          label="类型"
          sortable
      >
        <!--          <template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
          prop="userId"
          label="ID"
          sortable
      >
        <!--          <template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
    </el-table>
  </div>
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
