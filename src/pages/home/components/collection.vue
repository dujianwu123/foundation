<template>
  <div class="jijin_warp">
    <h3>
      公益集锦
      <span></span>
    </h3>
    <div class="jijin_lunbo_warp">
      <div class="swiper_warp">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide>
            <img src="../../../assets/images/jj1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/images/jj2.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/images/jj3.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="../../../assets/images/jj4.jpg" />
          </swiper-slide>
          <!-- Optional controls -->
          
        </swiper>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false /* 触摸滑动后是否继续轮播 */,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 4,
        // slideToClickedSlide: true,
        navigation: {
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next"
        }
      }
    }
  },
  created () {
    if (document.documentElement.clientWidth < 768) {
      this.swiperOption.slidesPerView = 1
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper)
    // this.swiper.slideTo(3, 1000, false);
    console.log(this.swiper.navigation.$nextEl)
  }
}
</script>

<style scoped>
.jijin_warp {
  width: 1200px;
  margin: 0 auto;
  /* background: red; */
}
.jijin_warp h3 {
  width: 100%;
  font-size: 28px;
  color: #333;
  line-height: 1;
  border-bottom: 1px solid #ebebeb;
  padding-bottom: 15px;
  position: relative;
  margin-bottom: 32px;
}
.jijin_warp h3 > span {
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 36px;
  height: 2px;
  background: #e1181b;
}

.jijin_lunbo_warp {
  width: 100%;
  margin-bottom: 1000px;
}
.swiper_warp {
  width: 1200px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
}

.swiper-button-prev, .swiper-container-rtl .swiper-button-next{
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-prev {
  background-image: url('~@/assets/images/left.jpg');
}
.swiper-button-next {
  background-image: url('~@/assets/images/right.jpg');
}
div:focus {
    outline: none;
}
/* mobile的时候 */
@media (max-width: 768px) {
  .jijin_warp {
    width: 100%;
  }
  .swiper_warp {
    width: 100%;
  }
}
</style>
