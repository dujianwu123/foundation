<template>
  <div class="hzhb_warp">
    <h3>
      <span>合作伙伴</span>
      <i></i>
    </h3>
    <div class="swiper_warp">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <img src="../../../assets/images/hzhb_1.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../assets/images/hzhb_2.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../assets/images/hzhb_3.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="../../../assets/images/hzhb_4.jpg" />
        </swiper-slide>
        <!-- Optional controls -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 1,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        speed: 2000,
        loop: true,
        slidesPerView: 4
      }
    }
  },
  created () {
    if (document.documentElement.clientWidth < 768) {
      this.swiperOption.slidesPerView = 1
    }
  }
}
</script>
<style>
.swiper-wrapper{
  transition-timing-function:linear !important;
}
</style>
<style scoped>

  .hzhb_warp {
    width: 1170px;
    margin: 0 auto;
    /* padding: 0 15px; */
  }
  h3{
    font-size: 27px;
    padding-bottom: 14px;
    border-bottom: 1px solid #ebebeb;
    position: relative;
  }
  h3 i {
    width: 36px;
    height: 2px;
    background: #e1181b;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .swiper_warp {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    .hzhb_warp {
      width: calc(100vw - 30px);
      margin: 0 auto;
    }
  }
</style>
