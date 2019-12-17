<template>
    <div>
      <Nav/>
      <Banner />
      <Collection />
    </div>
</template>

<script>
import Nav from '../../common/Nav'
import Banner from './components/banner'
import Collection from './components/Collection'
export default {
  components: {
    Nav,
    Banner,
    Collection
  }
}
</script>

<style scoped>

</style>
