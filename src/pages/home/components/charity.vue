<template>
  <div class="charity_warp">
    <h3 class="clearfix">
      <span class="f_l">慈善项目</span>
      <a href="javascript:;" class="f_r _btn">更多</a>
      <a href="javascript:;" @click="handleClick" class="f_r _btn">病患援助</a>
      <a href="javascript:;" @click="handleClick" class="f_r _btn">助养计划</a>
      <a href="javascript:;" @click="handleClick" class="f_r _btn active">大爱同行</a>
      <i></i>
    </h3>
    <div class="row">
      <div class="col-md-6 m_32 row" v-for="(item) in list" :key="item.id">
        <img class="col-md-6" src="../../../assets/images/csxm.jpg" alt="">
        <div class="col-md-6">
          <h4>{{item.title}}</h4>
          <p class="content">
            {{item.content}}
          </p>
          <p class="date">
            {{item.date}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (e) {
      this.changeBtn(e.target)
      this.changeData(e.target.innerText)
    },
    changeBtn (obj) {
      let oBtns = document.querySelectorAll('._btn')
      oBtns.forEach(obj => {
        obj.className = 'f_r _btn'
      })
      obj.className = 'f_r _btn active'
    },
    changeData (text) {
      if (text === '大爱同行') {
        this.list = this.list1
      } else if (text === '助养计划') {
        this.list = this.list2
      } else if (text === '病患援助') {
        this.list = this.list3
      }
    }
  },
  created () {
    this.list = this.list1
  },
  data () {
    return {
      list: [],
      list1: [
        {
          id: 1,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '大爱同行-山西行',
          date: '2019-08-20'
        },
        {
          id: 2,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '大爱同行-山西行',
          date: '2019-08-20'
        },
        {
          id: 3,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '大爱同行-山西行',
          date: '2019-08-20'
        },
        {
          id: 4,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '大爱同行-山西行',
          date: '2019-08-20'
        }
      ],
      list2: [
        {
          id: 1,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '助养计划-山西行',
          date: '2019-08-20'
        },
        {
          id: 2,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '助养计划-山西行',
          date: '2019-08-20'
        },
        {
          id: 3,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '助养计划-山西行',
          date: '2019-08-20'
        },
        {
          id: 4,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '助养计划-山西行',
          date: '2019-08-20'
        }
      ],
      list3: [
        {
          id: 1,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '病患援助-山西行',
          date: '2019-08-20'
        },
        {
          id: 2,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '病患援助-山西行',
          date: '2019-08-20'
        },
        {
          id: 3,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '病患援助-山西行',
          date: '2019-08-20'
        },
        {
          id: 4,
          content: '项目开展项目开展项目开展项 项目开展项目开展项目开展项项目开展项目开展项目开展项 项目开展项目开展项目开展项',
          title: '病患援助-山西行',
          date: '2019-08-20'
        }
      ]
    }
  }
}
</script>

<style scoped>
.charity_warp {
  width: 1170px;
  margin: 0 auto;
}
.charity_warp h3 {
  font-size: 24px;
  position: relative;
  padding-bottom: 14px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 18px;
}
.charity_warp h3 > i {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 36px;
  height: 2px;
  background: #e1181b;
}
.f_l {
  float: left;
}
.f_r {
  float: right;
}
.col-md-6 {
  position: relative;
}
h4 {
  margin-top: 12px;
  margin-bottom: 20px;
}
img {
  width: 236px;
}
._btn {
  width: 92px;
  cursor: pointer;
  height: 25px;
  line-height: 23px;
  text-align: center;
  border: 1px solid #f1f1f1;
  font-size: 16px;
  color: #999;
  margin-left: 22px;
}
a{
  text-decoration: none;
}
a._btn:hover {
  color: #c20f12;
}
.active{
  color: #c20f12;
}

.content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.5;
}
.date {
  /* margin: none;
  position: absolute;
  bottom: 0;right: 0; */
  margin-top: 30px;
}
@media (max-width: 768px) {
  .charity_warp {
    width: calc(100vw - 30px);
  }
  ._btn {
    display: none;
  }
}
</style>
