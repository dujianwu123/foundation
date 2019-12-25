<template>
  <div class="footer">
    <div class="footer_warp">
      <div class="row">
        <div class="col-md-1 col-sm-12">
          <h4>关于耘泽</h4>
          <p>
            <router-link to="/">机构简介</router-link>
          </p>
          <p>结构荣誉</p>
          <p>理事会</p>
          <p>组织架构</p>
          <p>联系我们</p>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>慈善项目</h4>
          <p>大爱同行</p>
          <p>助养计划</p>
          <p>病患援助</p>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>新闻资讯</h4>
          <p>机构新闻</p>
          <p>行业新闻</p>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>通知公告</h4>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>信息公开</h4>
          <p>机构审计</p>
          <p>机构年报</p>
          <p>理事决议</p>
          <p>项目审计</p>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>政策法规</h4>
          <p>机构制度</p>
          <p>国家法规</p>
        </div>
        <div class="col-md-1 col-sm-12">
          <h4>支持我们</h4>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-4">
          <img src="../assets/images/code.jpg" class="code" />
          <p>联系我们：北京市丰台区国投财富广场3号楼2层</p>
          <p>电子邮箱：office@yunzefoundation.org</p>
          <p>联系电话：010</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  background: #f7f7f7;
}
.footer_warp {
  width: 1170px;
  margin: 0 auto;
  padding-top: 16px;
}
.row {
  margin: 0 auto;
}
.footer_warp .row > div {
  color: #7d7d7d;
}
.row .col-md-1 {
  padding-left: 0;
}
h4 {
  font-size: 18px;
}
p {
  font-size: 14px;
}
.code {
  width: 104px;
  height: 104px;
  margin-top: 14px;
  margin-bottom: 20px;
}
.col-md-4 {
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .footer_warp {
    width: 100%;
    text-align: center;
  }
  .col-md-1 {
    display: none;
  }
}
</style>
