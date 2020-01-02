<template>
  <div class="title_warp">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-9">
        <h2>{{title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.title_warp {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
}
.row {
  width: 100%;
}
h2{
  margin: 0;padding: 0;
}
.title_warp h2 {
  font-size: 22px;
  color: #c20f12;
  padding: 22px 0 18px 0;
}
</style>
