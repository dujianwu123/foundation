<template>
  <div class="projects">
    <!-- <h3>慈善项目</h3> -->
    <p>当前位置：首页 >> 慈善项目 >> {{titless}} </p>
    <ul>
      <li v-for="(item, index) in list" :key="index" class="clearfix">
        <div class="l_img">
          <img class="img-responsive" src="../../../assets/images/list.jpg" alt="">
        </div>
        <div class="l_text">
          <router-link :to="`/project/detail/${id}/${item.id}`" tag="h4">{{item.title}}</router-link>
          <p>
            2019年北京耘泽公益基金会联合北京鹏博瑞翔旅行社有限公司
            共同发起“大爱同行”项目。项目旨在通过公益旅游为独居老人
            重新建立希望和友谊，走出封闭环境、重拾希望。
          </p>
          <div class="text_num clearfix">
            <p class="text_l">慈善支出：<span class="text_red">200，0000</span>元</p>
            <p class="text_r">受益人：<span class="text_red">10000</span>人</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['title'],
  computed: {
    titless() {
      return this.title
    }
  },
  data () {
    return {
      list: [
        {
          title: '累计开展项目20次，受益人次4000人1',
          id: 11111
        },
        {
          title: '累计开展项目20次，受益人次4000人2',
          id: 2222
        }
      ],
      id: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('tp3',to); // 保证在详情页点到二级菜单来，也能获取到id
    let id = to.params.id || ''
    next(vm => {
      vm.id = id
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('to2',to); // 只要二级菜单点击了，就能获取到to
    let id = to.params.id || ''
    this.id = id
    this.list.forEach(item => {
      item.title = item.title + id
    })
    next()
  }
}
</script>

<style scoped>
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.projects > p {
  padding-top: 20px;
  padding-bottom: 36px;
}
.projects ul li{
  height: 256px;
  background: #f5f5f5;
  margin-bottom: 30px;
}
/* h3 {
  font-size: 16px;
  color: #c20f12;
} */
.l_img {
  float: left;
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 28px;
}
.l_img > img {
  width: 350px;
  height: 210px;
  margin-top: 4px;
}
.l_text {
  float: left;
}
.l_text h4 {
  padding-top: 30px;
  padding-bottom: 20px;
  font-size: 18px;
  color: #333;
  width: 456px;
  padding-right: 22px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.l_text > p {
  width: 456px;
  padding-right: 22px;
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #000000;
}
.text_num {
  width: 100%;
  padding-top: 16px;
  font-size: 16px;
}
.text_l {
  float: left;
}
.text_r {
  float: right;
}
.text_red {
  color: #e1181b;
}
@media (max-width: 768px) {
  .projects{
    width: 100%;
  }
  img{
    width: 100% !important;
    margin: 0 auto;
  }
  .projects ul li {
    height: auto;
  }
  .l_text h4{
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    text-align: center;
    padding-right: 0px;
  }
  .l_text > p {
    width: 100%;
    padding: 0 6px;
  }
  .l_text {
    /* display: none; */
    width: 100%;
  }
}
</style>
