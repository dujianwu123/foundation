<template>
  <div class="sidebar_warp">
    <ul>
      <li
        v-for="(item,index) in sidebar"
        :key="index"
        :class="{active:item.active}"
      >{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['sidebar'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.sidebar_warp {
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sidebar_warp ul {
  margin-left: 10px;
  margin-top: 60px;
}
.sidebar_warp ul li {
  width: 200px;
  height: 50px;
  background: #f4f4f4;
  margin-bottom: 10px;
  font-size: 16px;
  color: #333333;
  text-align: center;
  line-height: 50px;
}
.active {
  color: #c20f12 !important;
}
@media (max-width: 768px) {
  .sidebar_warp ul li {
    width: 100%;
  }
}
</style>
