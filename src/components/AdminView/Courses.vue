<template>
  <div>
    <div style="width: 90%; height: 50px; margin: auto">
      <div  style="float: right">
        <el-button @click="handleAdd()">添加</el-button>
      </div>
    </div>
    <el-table
        ref="multipleTable"
        :data="course_list"
        tooltip-effect="dark"
        border
        style="width: 90%; margin: auto"
    >
      <el-table-column
          prop="id"
          label="ID"
          width="60"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="name"
          label="课程名"
          width="280"
      >
      </el-table-column>
      <el-table-column
          prop="description"
          label="课程简介"
          width="360"
          show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
          prop="order"
          label="顺序"
          sortable
      >
      </el-table-column>
      <el-table-column
          prop="createTime"
          label="创建时间"
      >
      </el-table-column>
      <el-table-column
          label="操作"
      >
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        title="编辑课程信息"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
      <CourseEdit :courseItem="courseEditing"></CourseEdit>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateCourse()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import CourseEdit from "@/components/AdminView/CourseEdit";
export default {
  name: "Courses",
  components: {CourseEdit},
  data() {
    return {
      dialogVisible:false,
      courseEditing:{},
      course_list:[],
      edit_mode:'',
    }
  },
  mounted() {
    this.getCourses()
  },
  methods: {
    updateCourse(){
      if (this.edit_mode === 'add') {
        this.axios({
          url:"/admin/course/instance",
          method:"post",
          data:{
            name: this.courseEditing.name,
            description: this.courseEditing.description,
            order: this.courseEditing.order,
          },
        }).then((res)=>{
          console.log('0aaa', res)
          this.getCourses()
          this.dialogVisible = false;
        })
      }else if (this.edit_mode === 'edit') {
        this.axios({
          url:"/admin/course/"+this.courseEditing.id+"/edit",
          method:"put",
          data:{
            name: this.courseEditing.name,
            description: this.courseEditing.description,
            order: this.courseEditing.order,
            createTime: this.courseEditing.createTime
          },
        }).then((res)=>{
          console.log(res)
          this.getCourses()
          this.dialogVisible = false;
        })
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    getCourses(){
      this.axios({
        url:"/admin/course/list",
        method:"get",
      }).then((res)=>{
        console.log(res)
        this.course_list = res.data.data
        console.log('admin course', this.course_list)
      })
    },
    handleEdit(index, row) {
      this.courseEditing = row
      this.edit_mode = 'edit'
      this.dialogVisible = true;
      console.log('editing', index, row);
    },
    handleAdd(index, row) {
      this.courseEditing = {}
      this.edit_mode = 'add'
      this.dialogVisible = true;
      console.log('adding', index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该课程, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios({
          url:"/admin/course/"+row.id,
          method:"delete",
        }).then((res)=>{
          console.log('delete', res);
          this.getCourses();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>

</style>
