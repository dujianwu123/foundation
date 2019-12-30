<template>
  <div class="projects">
    <h3>慈善项目</h3>
    <p>当前位置：首页 >> 慈善项目</p>
    <ul>
      <li class="clearfix">
        <div class="l_img">
          <img src="../../../assets/images/list.jpg" alt="">
          <p>大爱同行</p>
        </div>
        <div class="l_text">
          <h4>累计开展项目20次，受益人次4000人</h4>
          <p>
            2019年北京耘泽公益基金会联合北京鹏博瑞翔旅行社有限公司
            共同发起“大爱同行”项目。项目旨在通过公益旅游为独居老人
            重新建立希望和友谊，走出封闭环境、重拾希望。
          </p>
        </div>
      </li>
      <li class="clearfix">
        <div class="l_img">
          <img src="../../../assets/images/list.jpg" alt="">
          <p>助养计划</p>
        </div>
        <div class="l_text">
          <h4>累计开展项目20次，受益人次4000人</h4>
          <p>
            2019年北京耘泽公益基金会联合北京鹏博瑞翔旅行社有限公司
            共同发起“大爱同行”项目。项目旨在通过公益旅游为独居老人
            重新建立希望和友谊，走出封闭环境、重拾希望。
          </p>
        </div>
      </li>
      <li class="clearfix">
        <div class="l_img">
          <img src="../../../assets/images/list.jpg" alt="">
          <p>病患救助</p>
        </div>
        <div class="l_text">
          <h4>累计开展项目20次，受益人次4000人</h4>
          <p>
            2019年北京耘泽公益基金会联合北京鹏博瑞翔旅行社有限公司
            共同发起“大爱同行”项目。项目旨在通过公益旅游为独居老人
            重新建立希望和友谊，走出封闭环境、重拾希望。
          </p>
        </div>
      </li>
      <li class="clearfix">
        <div class="l_img">
          <img src="../../../assets/images/list.jpg" alt="">
          <p>扶贫济困</p>
        </div>
        <div class="l_text">
          <h4>累计开展项目20次，受益人次4000人</h4>
          <p>
            2019年北京耘泽公益基金会联合北京鹏博瑞翔旅行社有限公司
            共同发起“大爱同行”项目。项目旨在通过公益旅游为独居老人
            重新建立希望和友谊，走出封闭环境、重拾希望。
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
ul,li{
  list-style: none;
  margin: 0;
  padding: 0;
}
.projects ul li{
  height: 320px;
  background: #f5f5f5;
  margin-bottom: 30px;
}
h3 {
  font-size: 16px;
  color: #c20f12;
}
.l_img {
  float: left;
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 28px;
}
.l_img p{
  margin-top: 12px;
}
.l_text {
  float: left;
}
.l_text h4 {
  padding-top: 55px;
  padding-bottom: 50px;
  font-size: 18px;
  color: #333;
  width: 456px;
  padding-right: 22px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
}
.l_text p {
  width: 456px;
  padding-right: 22px;
  font-size: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #000000;
}
@media (max-width: 768px) {
  .projects{
    width: 100%;
  }
  img{
    width: 100%;
  }
  .l_text h4{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .l_text {
    display: none;
  }
}
</style>
