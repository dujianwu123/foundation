<template>
  <div>
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- 指示器 -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
      </ol>
      <!-- 轮播图片及说明文字 -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="img-responsive" width="100%" src="../../../assets/images/banner1.jpg" />
        </div>
        <div class="item">
          <img class="img-responsive" width="100%" src="../../../assets/images/banner1.jpg" />
        </div>
      </div>

      <!-- 控制按钮：左右切换 -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="project_tj row">
      <div class="col-md-3">
        <p>50,000,000 元</p>
        <p>累计接收捐赠资金</p>
      </div>
      <div class="col-md-3">
        <p>100 项</p>
        <p>累计开展公益项目</p>
      </div>
      <div class="col-md-3">
        <p>100,000 人次</p>
        <p>受益人次</p>
      </div>
      <div class="col-md-3">
        <p>60,000,000 元</p>
        <p>累计公益支出</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    $('#carousel-example-generic').carousel({
      interval: 1500 // in milliseconds
    })
  }
}
</script>

<style scoped>
#carousel-example-generic {
  margin-top: 100px;
  width: 100%;
}
ul,li{
  list-style: none;
}
.project_tj > div{
  height: 95px;
}
.col-md-3 {
  text-align: center;
}
.col-md-3 > p:nth-child(1) {
  color: #d0171a;
  font-size: 28px;
  margin: 22px 0 11px 0;
  line-height: 1;
}
.col-md-3 > p:nth-child(2) {
  color: #666666;
  font-size: 20px;
  line-height: 1;
}
@media (min-width: 768px) {
  .project_tj {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    top: -32px;
    box-shadow:0 0 6px  #e7e7e7;
    background: #fff;
  }
}
@media (max-width: 768px) {
  .project_tj {
    display: none;
  }
}
</style>
