<template>
  <div>
    <div v-if="!active" class="name_container name_container_unactive">
      <div class="name">{{content.title}}</div>
    </div>
    <div v-if="active" class="name_container name_container_active">
      <div class="name">{{content.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsLeft",
  props: {
    content: {
      // 定义接收的类型 还可以定义多种类型 [String, Undefined, Number]
      // 如果required为true,尽量type允许undefined类型，因为传递过来的参数是异步的。或者设置默认值。
      type: Object,
      // 定义是否必须传
      required: true,
      // 定义默认值
      default: '暂无'
    },
    active:{
      type: Boolean,
    }
  },
}
</script>

<style scoped>
.name_container{
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  line-height: 42px;
  box-sizing: border-box;
  border: 1px solid rgba(102, 102, 102, 0.3);
}
.name_container_unactive{
  color: rgb(102, 102, 102);
}
.name_container_unactive:hover{
  border: 1px solid var(--orange-secondary-color);
  color: var(--orange-secondary-color);
}
.name_container_active{
  background: var(--orange-color);
  color: rgb(255, 255, 255);
  font-weight: bold;
}
</style>
