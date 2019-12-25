<template>
    <div>
      <Nav/>
      <Banner/>
      <Collection/>
      <Notice/>
      <Charity/>
      <Cooperative/>
      <Footer/>
    </div>
</template>

<script>
import Nav from '../../common/Nav'
import Banner from './components/banner'
import Collection from './components/collection'
import Notice from './components/notice'
import Charity from './components/charity'
import Cooperative from './components/cooperative'
import Footer from '../../common/Footer'
export default {
  components: {
    Nav,
    Banner,
    Collection,
    Notice,
    Charity,
    Cooperative,
    Footer
  }
}
</script>

<style scoped>

</style>
