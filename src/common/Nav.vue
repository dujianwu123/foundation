<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <!-- 小屏幕导航按钮和logo -->
      <div class="navbar-header">
        <button class="navbar-toggle" data-toggle="collapse" data-target="#daohang">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a href="javascript:;" class="navbar-brand"></a>
      </div>
      <!-- 小屏幕导航按钮和logo -->
      <!-- 导航 -->
      <div id="daohang" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              class="cur"
              href="javascript:;"
              v-change_nav
            >
              首页
            </a>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              关于耘泽
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">机构简介</a></li>
              <li><a
                  href="javascript:;">机构荣誉</a></li>
              <li><a
                  href="javascript:;">理事会</a></li>
              <li><a
                  href="javascript:;">组织架构</a></li>
              <li><a
                  href="javascript:;">联系我们</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              慈善项目
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">大爱同行</a></li>
              <li><a
                  href="javascript:;">助养计划</a></li>
              <li><a
                  href="javascript:;">病患救助</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              新闻资讯
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">机构新闻</a></li>
              <li><a
                  href="javascript:;">行业新闻</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              通知公告
              <span class="underline"></span>
            </a>
            <!-- <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">机构年报</a></li>
              <li><a
                  href="javascript:;">机构年审</a></li>
              <li><a
                  href="javascript:;">理事决议</a></li>
              <li><a
                  href="javascript:;">项目审计</a></li>
            </ul> -->
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              信息公开
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">机构年报</a></li>
              <li><a
                  href="javascript:;">机构年审</a></li>
              <li><a
                  href="javascript:;">理事决议</a></li>
              <li><a
                  href="javascript:;">项目审计</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              政策法规
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">机构制度</a></li>
              <li><a
                  href="javascript:;">国家法规</a></li>
            </ul>
          </li>
          <li class="dropdown">
            <a
              href="javascript:;"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              v-change_nav
            >
              支持我们
              <span class="underline"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a
                  href="javascript:;">我要捐赠</a></li>
              <li><a
                  href="javascript:;">加入志愿者</a></li>
              <li><a
                  href="javascript:;">招生咨询</a></li>
              <li><a
                  href="javascript:;">在线报名</a></li>
              <li><a
                  href="javascript:;">高考资讯</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 导航 -->
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    // 小屏幕导航点击关闭菜单
    $('.navbar-collapse a').click(function () {
      $('.navbar-collapse').collapse('hide')
    })
    $('.dropdown').mouseover(function () {
      $(this).addClass('open')
    })
    $('.dropdown').mouseleave(function () {
      $(this).removeClass('open')
    })
  },
  directives: {
    change_nav (el, bindings, vnode) {
      el.onclick = function () {
        let objs = document.querySelectorAll('#daohang>ul>li>a')
        objs.forEach(item => {
          item.className = ''
        })
        this.className = 'cur'
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 0;
}
.navbar-default{
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid #fafafa;
}
.navbar-default .navbar-brand {
  width: 210px;
  height: 60px;
  background: url('~@/assets/images/logo.png') no-repeat;
  margin-top: 20px;
}
.navbar .navbar-default .navbar-fixed-top .container{
  width: 1200px;
  padding-top: 15px;
}
.navbar-default .navbar-nav > li > a{
  line-height: 35px;
}
.navbar-default .navbar-nav>li>a {
  font-size: 16px;
  color: #333;
  height: 70px;
  line-height: 35px;
}
.nav > li > a {
  padding-left: 8px;
  padding-right: 8px;
}
#daohang {
  background: #fff;
}
#daohang a:hover {
  color: #c20f12;
}
.cur {
  color: #c20f12 !important;
}
.navbar-toggle {
  margin-top: 28px;
}
.caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
}
/**PC时 */
@media (min-width: 768px) {
  .dropdown-menu {
    min-width: 130px;
    left: 50%;
    margin-left: -65px;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .navbar-right .dropdown-menu {
    right: 0;
  }
  .navbar-right {
    margin-right: 0;
    margin-top: 18px;
  }
  .navbar > .container .navbar-brand, .navbar > .container-fluid .navbar-brand {
    margin-left: 0;
  }
  .navbar-nav > li {
    height: 80px;
  }
}
@media (max-width: 768px) {
  /* .nav .navbar-nav .navbar-right li {
    height: 50px !important;
  } */

  .navbar-default .navbar-nav>li>a {
    height: 40px;
    line-height: 20px;
  }
}
.open>a { background: #fff !important }
</style>
