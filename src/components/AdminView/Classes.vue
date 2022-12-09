<template>
  <div>
    <div style="width: 90%; height: 50px; margin: auto">
      <div style="float: left">
<!--        <el-button-->
<!--            v-if="multipleSelection.length>0"-->
<!--            @click="$refs.multipleTable.clearSelection(); handleButtonClick($event)"-->
<!--        >取消选择-->
<!--        </el-button>-->

      </div>
      <div  style="float: right">
        <el-button @click="handleAdd()">添加</el-button>
<!--        <el-button @click="multipleDelete(); handleButtonClick($event)">批量删除</el-button>-->
      </div>
    </div>
    <el-table
        ref="multipleTable"
        :data="class_list"
        tooltip-effect="dark"
        border
        style="width: 90%; margin: auto"
        >
<!--      <el-table-column-->
<!--          type="selection"-->
<!--          width="60"-->
<!--      >-->
<!--      </el-table-column>-->
      <el-table-column
          prop="id"
          label="ID"
          width="60"
          sortable
      >
        <!--          <template slot-scope="scope">{{ scope.row.date }}</template>-->
      </el-table-column>
      <el-table-column
          prop="name"
          label="班级名"
          width="280"
      >
      </el-table-column>
      <el-table-column
          prop="description"
          label="班级简介"
          width="360"
          show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
          prop="courseId"
          label="所属课程"
          width="80"
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
          prop="access"
          label="权限"
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
        title="编辑班级信息"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
      <ClassEdit :classItem="classEditing"></ClassEdit>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateClass()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ClassEdit from "@/components/AdminView/ClassEdit";
export default {
  name: "Classes",
  components: {ClassEdit},
  data() {
    return {
      dialogVisible:false,
      classEditing:{},
      edit_mode:'add',
      class_list:[
        {
          id:0,
          name:'123',
          info:'456',
          course:0,
          order:5,
          access:'public',
        },
        {
          id:0,
          name:'123',
          info:'456',
          course:0,
          order:5,
          access:'public',
        }
      ],
    }
  },
  mounted() {
    this.getClasses()
  },
  methods: {
    updateClass(){
      if (this.edit_mode === 'add') {
        this.axios({
          url:"/admin/class/add",
          method:"post",
          data:{
            name: this.classEditing.name,
            courseId: this.classEditing.courseId,
            description: this.classEditing.description,
            access: this.classEditing.access,
            order: this.classEditing.order,
          },
        }).then((res)=>{
          console.log('0aaa', res)
          this.getClasses()
          this.dialogVisible = false;
        })
      }else if (this.edit_mode === 'edit') {
        this.axios({
          url:"/admin/class/"+this.classEditing.id+"/info",
          method:"put",
          data:{
            name: this.classEditing.name,
            courseId: this.classEditing.courseId,
            description: this.classEditing.description,
            access: this.classEditing.access,
            order: this.classEditing.order,
          },
        }).then((res)=>{
          console.log(res)
          this.getClasses()
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
    getClasses(){
      this.axios({
        url:"/admin/class/list",
        method:"get",
      }).then((res)=>{
        console.log(res)
        this.class_list = res.data.data
        console.log('admin classes', this.class_list)
      })
    },
    handleEdit(index, row) {
      this.classEditing = row
      this.edit_mode = 'edit'
      this.dialogVisible = true;
      console.log('editing', index, row);
    },
    handleAdd(index, row) {
      this.classEditing = {}
      this.edit_mode = 'add'
      this.dialogVisible = true;
      console.log('adding', index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该班级, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.axios({
          url:"/admin/class/"+row.id,
          method:"delete",
        }).then((res)=>{
          console.log('delete', res);
          this.getClasses();
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
