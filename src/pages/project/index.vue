<template>
  <div>
    <Nav></Nav>
    <Banner></Banner>
    <Content :sidebar='sidebar'></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from '../../common/Nav'
import Banner from './components/banner'
import Content from './components/content'
import Footer from '../../common/Footer'
export default {
  data () {
    return {
      sidebar: [
        {content: '大爱同行', active: false},
        {content: '助养计划', active: false},
        {content: '病患救助', active: false},
        {content: '扶贫济困', active: false}
      ]
    }
  },
  components: {
    Nav,
    Banner,
    Content,
    Footer
  }
}
</script>

<style scoped>
</style>
