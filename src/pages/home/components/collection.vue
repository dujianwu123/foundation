<template>
  <div class="collection_warp">
    <div class="row">
      <div class="col-md-12">公益集锦</div>
      <span class="bottom_red"></span>
    </div>

    <div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">
      <!-- 指示器 -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic2" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic2" data-slide-to="1"></li>
      </ol>
      <!-- 轮播图片及说明文字 -->
      <div class="carousel-inner clearfix" role="listbox">
        <div style="float: left;" class="item active">
          <img class="img-responsive" width="100%" src="../../../assets/images/jj1.jpg" />
        </div>
        <div style="float: left;" class="item">
          <img class="img-responsive" width="100%" src="../../../assets/images/jj2.jpg" />
        </div>
        <div style="float: left;" class="item">
          <img class="img-responsive" width="100%" src="../../../assets/images/jj3.jpg" />
        </div>
        <div style="float: left;" class="item">
          <img class="img-responsive" width="100%" src="../../../assets/images/jj4.jpg" />
        </div>
      </div>

      <!-- 控制按钮：左右切换 -->
      <!-- <a class="left carousel-control" href="#carousel-example-generic2" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic2" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    $('#carousel-example-generic2').carousel({
      interval: 1500 // in milliseconds
    })
  }
}
</script>

<style scoped>
.collection_warp {
  padding: 0;
  width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #ebebeb;
}
.col-md-12 {
  font-size: 28px;
  color: #333;
}
.collection_warp .row .col-md-12 {
  padding-bottom: 8px;
}
.collection_warp .row {
  position: relative;
}
.bottom_red {
  width: 36px;
  height: 2px;
  background: #e1181b;
  position: absolute;
  left: 14px;
  bottom: 0;
}
/* pc的时候 */
@media (min-width: 768px) {
  .item {
    width: 25%;
    float: left;
  }
  .gundong_warp {
    width: 1200px;
    margin: 0 auto;
  }
  .gundong_row {
    width: 1096px;
    margin: 0 auto;
  }
  .gundong_row_item {
    width: 25%;
    float: left;
  }
}
/* mobile的时候 */
@media (max-width: 768px) {
  .collection_warp {
    width: 100%;
  }
  .gundong_warp {
    width: 100%;
    overflow: hidden;
  }
  .gundong_row {
    width: 100%;
  }
  .gundong_row_item {
    width: 100%;
    float: left;
  }
  .gundong_row_item img {
    width: 100%;
  }
}
</style>
