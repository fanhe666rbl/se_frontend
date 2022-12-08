<template>
  <div>
    <div v-for="problem in classProblems">
      {{problem}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Homework",
  data(){
    return {
      classId: this.$route.query.classId,
      classProblems: [],
    }
  },
  mounted() {
    axios.get(
        "/class/"+this.classId+"/problem",
        {
          params: {
            page: 1,
            limit:10,
          }
        }
    ).then((res)=>{
      console.log('prr', res)
      this.classProblems = res.data.data
      console.log(this.classProblems)
    })
  }
}
</script>

<style scoped>

</style>
