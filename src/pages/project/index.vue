<template>
  <div>
    <Nav :nav_name="'慈善项目'"></Nav>
    <Banner></Banner>
    <Title :title="'慈善项目'"></Title>
    <div class="warp row">
      <div class="col-md-3">
        <Silide :sidebars="sidebars" :title="'慈善项目'"></Silide>
      </div>
      <div class="col-md-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../../common/Nav'
import Banner from '../../common/Banner'
import Silide from '../../common/Sidebar'
import Title from '../../common/Title'
export default {
  data () {
    return {
      sidebars: [
        {id: 1, title: '大爱同行', active: false, url: '/project/list/1'},
        {id: 2, title: '助养计划', active: false, url: '/project/list/2'},
        {id: 3, title: '病患救助', active: false, url: '/project/list/3'},
        {id: 4, title: '扶贫济困', active: false, url: '/project/list/4'}
      ],
      name: 'x'
    }
  },
  provide () {
    return {
      title: this.name
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log(this);
    console.log('to', to) // 这样我们在这，监事这个to，子级的路由只有有params为id的值，我们就能获取到
    let id = to.params.id || ''
    this.formatDataSlider(id)
    next()
  },
  methods: {
    formatDataSlider (id) {
      this.sidebars = this.sidebars.map(item => {
        if (parseInt(item.id) === parseInt(id)) {
          item.active = true
          this.name = item.title
          console.log(this.name);
          // this._provide.title = item.title
        } else {
          item.active = false
        }
        return item
      })
    }
  },
  components: {
    Nav,
    Banner,
    Silide,
    Title
  }
}
</script>

<style scoped>
.warp {
  width: 1200px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .warp {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
