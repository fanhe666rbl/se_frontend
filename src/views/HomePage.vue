<template>
<div>
<!--  <Header></Header>-->
  <course-list v-if="pageNow==='courses'"></course-list>
  <class-list v-if="pageNow==='classes'"></class-list>
</div>
</template>

<script>
import Header from "@/components/Header";
import CourseList from "@/views/CourseList";
import {mapState} from "vuex";
import ClassList from "@/views/ClassList";
export default {
  name: "HomePage",
  components: {ClassList, CourseList, Header},
  computed: {
    ...mapState([
        'pageNow',
    ])
  },
}
</script>

<style scoped>

</style>
