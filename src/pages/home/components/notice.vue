<template>
  <div class="notice_warp row">
    <div class="col-md-6">
      <h3 class="clearfix">
        <span class="notice_f_l">通知公告</span>
        <router-link class="notice_f_r notice_more" to="/">更多</router-link>
        <i class="border_bottom_red"></i>
      </h3>
      <ul class="tongzhi_list">
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <h3 class="clearfix">
        <span class="notice_f_l">信息公开</span>
        <router-link class="notice_f_r notice_more" to="/">更多</router-link>
        <i class="border_bottom_red"></i>
      </h3>
      <ul class="tongzhi_list">
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
        <li class="clearfix">
          <p class="notice_f_l w_80">2019年北京耘泽公益基金会取得非营利组织免</p>
          <p class="notice_f_r w_20">2019-08-20</p>
        </li>
      </ul>
    </div>
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
  .notice_warp {
    width: 1200px;
    margin: 0 auto 28px;
  }
  .notice_f_l {
    float: left;
  }
  .notice_f_r {
    float: right;
  }
  .notice_more {
    font-size: 16px;
    color: #c20f12;
    padding-top: 8px;
  }
  h3 {
    padding-bottom: 14px;
    border-bottom: 1px solid #ebebeb;
    position: relative;
  }
  .border_bottom_red {
    width: 36px;
    height: 2px;
    background: #e1181b;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .tongzhi_list {
    width: 100%;
    /* border-bottom: 1px solid red; */
  }
  ul,li,p{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .tongzhi_list li{
    height: 54px;
    line-height: 54px;
    color: #333;
    font-size: 17px;
    border-bottom: 1px dotted #eee;
  }
  .w_80 {
    width: 70%;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .w_20 {
    width: 30%;
    text-align: right;
    word-break:keep-all;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    color: #666666;
  }
  @media (max-width: 768px) {
    .notice_warp {
      width: 100%;
    }
  }
</style>
