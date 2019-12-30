<template>
  <div class="content_warp row">
    <div class="h3_warp row">
      <div class="col-md-3"></div>
      <h3 class="col-md-9">慈善项目</h3>
    </div>
    <Sidebar :sidebar="sidebar"  class="col-md-3"></Sidebar>
    <Projects class="col-md-9"></Projects>
  </div>
</template>

<script>
import Sidebar from './sidebar'
import Projects from './projects'

export default {
  props: ['sidebar'],
  data () {
    return {
    }
  },
  components: {
    Sidebar,
    Projects
  }
}
</script>

<style scoped>
  .content_warp {
    width: 1200px;
    margin: 0 auto;
  }
  .h3_warp {
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    margin: 0 auto 12px;
  }
  h3{
    font-size: 18px;
    color: red;
    padding-bottom: 8px;
  }
  @media (max-width: 768px) {
    .content_warp {
      width: 100%;
    }
  }
</style>
