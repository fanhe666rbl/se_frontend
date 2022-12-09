<template>
<div>
  <Header></Header>
  <div class="main">
    <div class="menu-left">
      <tags-left v-for="(tag, index) in tags"
                 :content="tag"
                 :active="active===index"
                 @click.native="change(index, tag.page)"></tags-left>
    </div>
    <div class="content-right">
      <Info v-if="page === 'Info'"></Info>
      <el-button v-if="userLevel === -1" @click="dialogVisible = true">申请加入课程</el-button>
      <Members v-if="page === 'Members'"></Members>
      <Homework v-if="page === 'Homework'"></Homework>
      <Apply v-if="page === 'Apply'"></Apply>

      <el-dialog title="申请" :visible.sync="dialogVisible">
        <el-form :model="apply">
          <el-form-item label="申请详情">
            <el-input v-model="apply.info" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitApply">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>

</div>
</template>

<script>
import Header from "@/components/Header";
import TagsLeft from "@/components/ClassInfo/TagsLeft";
import axios from "axios";
import Info from "@/components/ClassInfo/Info";
import Members from "@/components/ClassInfo/Members";
import Homework from "@/components/ClassInfo/Homework";
import Apply from "@/components/ClassInfo/Apply";
export default {
  name: "ClassView",
  components: {Apply, Homework, Members, Info, TagsLeft, Header},
  data() {
    return {
      active: 0,
      page: 'Info',
      classId: this.$route.query.classId,
      userId:0,
      userLevel:-1,
      dialogVisible:false,
      apply:{},
      tags:[
        {title: '班级信息', page: 'Info'},
      ],
      classInfo:{},
    }
  },
  mounted() {
    //添加权限控制
    this.getIsClassMember()

  },
  methods: {
    getIsClassMember(){
      this.userId = window.localStorage.getItem("userId");
      this.axios.get(
          "/class/" + this.classId + "/user/" + this.userId + "/isClassMember",
          {}
      ).then(res => {
        this.userLevel = res.data.data;
        if (this.userLevel>-1){
          this.tags.push(
              {title: '班级成员', page: 'Members'},
              {title: '班级作业', page: 'Homework'},
          )
        }
        if (this.userLevel>0){
          this.tags.push(
              {title: '班级申请', page: 'Apply'},
          )
        }
        console.log("userLevel: ", this.userLevel, "  userId: ", this.userId);
      });
    },
    submitApply(){
      this.userId = window.localStorage.getItem("userId");
      this.axios({
        url:"/class/apply",
        method:"post",
        data:{
          userId: this.userId,
          classId: this.classId,
          info: this.apply.info,
        },
      }).then((res)=>{
        console.log('0aaa', res)
        this.dialogVisible = false;
      })
    },
    change(index, page){
      this.active = index;
      this.page = page;
    },
  }
}
</script>

<style scoped>
.menu-left{
  width: 100%;
  padding-top: 30px;
  //margin-left: 50px;
  max-width: 230px;
  text-align: left;
}
.main {
  max-width: 1300px;
  padding-top: 100px;
  margin: auto;
  display: flex;
}
.content-right {
  //background-color: #E9EEF3;
  color: #333;
  width: 100%;
  height: auto;
}
</style>
