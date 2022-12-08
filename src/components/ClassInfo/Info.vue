<template>
<div>
  <div>{{classInfo.name}}</div>
  <div>{{classInfo.info}}</div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Info",
  data() {
    return {
      classInfo: {},
      classId: this.$route.query.classId,
    }
  },
  mounted() {
    console.log(this.$route.query.classId)
    axios.get(
        "/class/"+this.classId+"/info",
    ).then((res)=>{
      console.log('class', res)
      this.classInfo = res.data.data
      console.log(this.classInfo)
    })
  },
}
</script>

<style scoped>

</style>
