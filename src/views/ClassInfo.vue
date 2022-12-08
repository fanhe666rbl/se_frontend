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
export default {
  name: "ClassView",
  components: {Homework, Members, Info, TagsLeft, Header},
  data() {
    return {
      active: 0,
      page: 'Info',
      classId: this.$route.query.classId,
      tags:[
        {title: '班级信息', page: 'Info'},
        {title: '班级成员', page: 'Members'},
        {title: '班级作业', page: 'Homework'},
      ],
      classInfo:{},
    }
  },
  mounted() {
    // console.log(this.$route.query.classId)
    // axios.get(
    //     "/class/"+this.classId+"/info",
    // ).then((res)=>{
    //   console.log('class', res)
    //   this.classInfo = res.data.data
    //   console.log(this.classInfo)
    // })
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
  background-color: #E9EEF3;
  color: #333;
  width: 100%;
  height: auto;
}
</style>
