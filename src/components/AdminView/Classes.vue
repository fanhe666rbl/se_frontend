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
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="60"
      >
      </el-table-column>
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
          width="80"
      >
      </el-table-column>
      <el-table-column
          prop="info"
          label="班级简介"
          width="120"
      >
      </el-table-column>
      <el-table-column
          prop="course"
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
  </div>
</template>

<script>
export default {
  name: "Classes",
  data() {
    return {
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
    // this.getClasses()
  },
  methods: {
    getClasses(){
      this.axios({
        url:"/admin/class/",
        method:"get",
      }).then((res)=>{
        this.class_list = res.data
        console.log('admin classes', this.class_list)
      })
    },
    handleButtonClick (e) {
      console.log('e', e);
      let target = e.target;
      // 根据button组件内容 里面包括一个span标签，如果设置icon，则还包括一个i标签，其他情况请自行观察。
      // 所以，在我们点击到button组件上的文字也就是span标签上时，直接执行e.target.blur()不会生效，所以要加一层判断。
      if(target.nodeName === 'SPAN' || target.nodeName === 'I'){
        target = e.target.parentNode;
      }
      target.blur();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log('editing', index, row);
    },
    handleAdd(index, row) {
      console.log('adding', index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm('此操作将永久删除该班级, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios({
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
