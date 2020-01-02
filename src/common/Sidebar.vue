<template>
  <div class="sidebar_warp">
    <h4>{{title}}</h4>
    <ul>
      <!-- <li :class="{active_sidebar:item.active}">
      </li> -->
      <router-link
        v-for="(item,index) in sidebars"
        :key="index"
        :to="item.url"
        :class="{active_sidebar: item.active}"
        tag="li"
      >
        {{item.title}}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['sidebars', 'title']
}
</script>

<style scoped>
ul,li,h4{
  margin: 0;padding: 0;
}
ul,li{
  list-style: none;
}
.sidebar_warp {

}
.sidebar_warp h4 {
  width: 200px;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 16px;
  text-align: center;
  background: #fff;
  color: #c20f12;
  margin-top: 10px;
  margin-bottom: 18px;
}
ul {
  width: 200px;
  margin: 0 auto;
}
li {
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #f4f4f4;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background: #c20f12;
  color: #fff;
}
.active_sidebar {
  background: #c20f12;
  color: #fff;
}
li.router-link-exact-active {
  background: #c20f12;
  color: #fff;
}
</style>
