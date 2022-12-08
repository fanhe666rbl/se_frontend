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
      <Members v-if="page === 'Members'"></Members>
      <Homework v-if="page === 'Homework'"></Homework>
      <Apply v-if="page === 'Apply'"></Apply>
<!--      <div>{{classInfo.name}}</div>-->
<!--      <div>{{classInfo.info}}</div>-->
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
      tags:[
        {title: '班级信息', page: 'Info'},
        {title: '班级成员', page: 'Members'},
        {title: '班级作业', page: 'Homework'},
        {title: '班级申请', page: 'Apply'},
      ],
      classInfo:{},
    }
  },
  mounted() {
    //添加权限控制
  },
  methods: {
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
