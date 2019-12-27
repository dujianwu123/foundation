<template>
  <div class="content_warp row">
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
  @media (max-width: 768px) {
    .content_warp {
      width: 100%;
    }
  }
</style>
