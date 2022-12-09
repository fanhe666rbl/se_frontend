<template>
<div class="Banner">
  <img v-if="bannerType === 'courses'" class="img" :src="courseImg" />
  <img v-if="bannerType === 'classes'" class="img" :src="classImg" />
  <div class="blur">
  </div>
</div>
</template>

<script>
import bannerImg1  from '@/assets/Banner1.jpg'
import bannerImg2  from '@/assets/Banner2.jpg'
export default {
  name: "Banner",
  props:{
    bannerType: String,
  },
  data () {
    return {
      courseImg:bannerImg1,
      classImg:bannerImg2,
    }
  }
}
</script>

<style scoped>
.Banner {
  width: 100%;
  //height: 150px;
}
.img {
  margin-top: -5px;
  width: 100%;
  //height: 150px;
  //background-color: var(--green-color);
  //opacity: 0.7;
}
.blur {
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  height: 198px;
  background-color: var(--green-color);
  opacity: 0.2;
  z-index: 1;
}
.border {
  //position: absolute;
  left: 40%;
  top: 80px;
  width: 600px;
  height: 50px;
  border:2px solid white;
}
.text {
  position: absolute;
  color: white;
  font-weight: bolder;
  font-size: 50px;
  left: 40%;
  top: 50px;
}
</style>
