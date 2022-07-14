<template>
   <!-- 父容器大盒子 -->
    <div class="viewport">
      <div class="column">
        <!-- 概览区域模块制作 -->
        <div class="panel overview">
          <div class="inner">
            <ul>
              <li>
                <h4>2,190</h4>
                <span>
                  <i class="icon-dot" style="color: #006cff"></i>
                  设备总数
                </span>
              </li>
              <li class="item">
                <h4>190</h4>
                <span>
                  <i class="icon-dot" style="color: #6acca3"></i>
                  季度新增
                </span>
              </li>
              <li>
                <h4>3,001</h4>
                <span>
                  <i class="icon-dot" style="color: #6acca3"></i>
                  运营设备
                </span>
              </li>
              <li>
                <h4>108</h4>
                <span>
                  <i class="icon-dot" style="color: #ed3f35"></i>
                  异常设备
                </span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 监控区域模块制作 -->
        <div class="panel monitor">
          <div class="inner">
            <div class="tabs">
              <a href="javascript:;" class="active">故障设备监控</a>
              <a href="javascript:;">异常设备监控</a>
            </div>
            <div class="content" style="display: block;">
              <div class="head">
                <span class="col">故障时间</span>
                <span class="col">设备地址</span>
                <span class="col">异常代码</span>
              </div>
              <div class="marquee-view">
                <div class="marquee">
                  <div class="row">
                    <span class="col">20180701</span>
                    <span class="col">11北京市昌平西路金燕龙写字楼</span>
                    <span class="col">1000001</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190601</span>
                    <span class="col">北京市昌平区城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190704</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000003</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20180701</span>
                    <span class="col">北京市昌平区建路金燕龙写字楼</span>
                    <span class="col">1000004</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000005</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000006</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建西路金燕龙写字楼</span>
                    <span class="col">1000007</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000008</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000009</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190710</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000010</span>
                    <span class="icon-dot"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">
              <div class="head">
                <span class="col">异常时间</span>
                <span class="col">设备地址</span>
                <span class="col">异常代码</span>
              </div>
              <div class="marquee-view">
                <div class="marquee">
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000001</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190701</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190703</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190704</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190705</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190706</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190707</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190708</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190709</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                  <div class="row">
                    <span class="col">20190710</span>
                    <span class="col">北京市昌平区建材城西路金燕龙写字楼</span>
                    <span class="col">1000002</span>
                    <span class="icon-dot"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Pie></Pie>
      </div>
      <div class="column">
       <Map></Map>
       <User></User>
      </div>
      <div class="column">
       <Order></Order>
       <Sale></Sale>
        
      <Wrap></Wrap>
        <!-- 全国热榜模块制作 -->
        <div class="top panel">
          <div class="inner">
            <div class="all">
              <h3>全国热榜</h3>
              <ul>
                <li>
                  <i class="icon-cup1" style="color: #d93f36;"></i>
                  可爱多
                </li>
                <li>
                  <i class="icon-cup2" style="color: #68d8fe;"></i>
                  娃哈啥
                </li>
                <li>
                  <i class="icon-cup3" style="color: #4c9bfd;"></i>
                  喜之郎
                </li>
              </ul>
            </div>
            <div class="province">
              <h3>各省热销 <i class="date">// 近30日 //</i></h3>
              <div class="data">
                <ul class="sup">
                  <!-- <li>
                    <span>北京</span>
                    <span>25,179 <s class="icon-up"></s></span>
                  </li>
                  <li>
                    <span>河北</span>
                    <span>23,252 <s class="icon-down"></s></span>
                  </li> -->
                </ul>
                <ul class="sub">
                  <!-- <li><span></span><span> <s class="icon-up"></s></span></li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Pie from './chart/pie.vue'
import Map from './chart/map.vue'
import User from './chart/user.vue'
import Order from './chart/order.vue'
import Sale from './chart/sales.vue'
import Wrap from './chart/wrap.vue'

export default {
  name:'data',
  components:{
    Pie,
    Map,
    User,
    Order,
    Sale,
    Wrap
  },
  mounted() {
    // 1. 准备相关数据
  var hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true }
      ]
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false }
      ]
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true }
      ]
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false }
      ]
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true }
      ]
    }
  ];
  //  2. 根据数据渲染各省热销 sup 模块内容
  // (1) 遍历 hotData对象
  var supHTML = "";
  $.each(hotData, function(index, item) {
    // console.log(item);
    supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
  });
  // 把生成的5个小li字符串给 sub dom盒子
  $(".sup").html(supHTML);
  // 3. 当鼠标进入 tab 的时候
  // 鼠标经过当前的小li要高亮显示
  $(".province .sup").on("mouseenter", "li", function() {
    index = $(this).index();
    render($(this));
  });

  // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
  // 这个函数需要传递当前元素进去
  function render(currentEle) {
    currentEle
      .addClass("active")
      .siblings()
      .removeClass();
    // 拿到当前城市的品牌对象
    // console.log($(this).index());
    // 可以通过hotData[$(this).index()] 得到当前的城市
    // console.log(hotData[$(this).index()]);
    // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种类
    // console.log(hotData[$(this).index()].brands);
    // 开始遍历品牌数组
    var subHTML = "";
    $.each(hotData[currentEle.index()].brands, function(index, item) {
      // 是对应城市的每一个品牌对象
      // console.log(item);
      subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
    ${item.flag ? "icon-up" : "icon-down"}
    ></s></span></li>`;
    });
    // 把生成的6个小li字符串给 sub dom盒子
    $(".sub").html(subHTML);
  }
  // 4. 默认把第一个小li处于鼠标经过状态
  var lis = $(".province .sup li");
  lis.eq(0).mouseenter();
  // 5 开启定时器
  var index = 0;
  var timer = setInterval(function() {
    index++;
    if (index >= 5) index = 0;
    // lis.eq(index).mouseenter();
    render(lis.eq(index));
  }, 2000);

  $(".province .sup").hover(
    // 鼠标经过事件
    function() {
      clearInterval(timer);
    },
    // 鼠标离开事件
    function() {
      clearInterval(timer);
      timer = setInterval(function() {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render(lis.eq(index));
      }, 2000);
    }
  );
  },
 
  }
  



</script>

<style>
  /*清除元素默认的内外边距  */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/*让所有斜体 不倾斜*/
em,
i {
  font-style: normal;
}
/*去掉列表前面的小点*/
li {
  list-style: none;
}
/*图片没有边框   去掉图片底侧的空白缝隙*/
img {
  border: 0; /*ie6*/
  vertical-align: middle;
}
/*让button 按钮 变成小手*/
button {
  cursor: pointer;
}
/*取消链接的下划线*/
a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #e33333;
}
h4 {
  font-weight: 400;
}
body {
  background: url(../../assets/images/bg.jpg) no-repeat 0 0 / cover;
  /* background-size: cover; */
}
/* // 实现rem适配 */
@media screen and (max-width: 1024px) {
  html {
    font-size: 42.66px !important;
  }
}

@media screen and (min-width: 1920px) {
  html {
    font-size: 80px !important;
  }
}
.viewport {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 1.1rem 0.25rem 0;
  background: url(../../assets/images/logo.png) no-repeat 0 0 / contain;
  min-height: 780px;
}
.viewport .column {
  flex: 3;
}
.viewport .column:nth-child(2) {
  flex: 4;
  margin: 0.4rem 0.25rem 0;
}
/* 公共面板样式  */
.panel {
  position: relative;
  border: 15px solid transparent;
  border-width: 0.6375rem 0.475rem 0.25rem 1.65rem;
  border-image-source: url(../../assets/images/border.png);
  border-image-slice: 51 38 20 132;
  margin-bottom: 0.25rem;
}
.inner {
  position: absolute;
  top: -0.6375rem;
  left: -1.65rem;
  right: -0.475rem;
  bottom: -0.25rem;
  padding: 0.3rem 0.45rem;
}
.panel h3 {
  font-size: 0.25rem;
  color: #fff;
  font-weight: 400;
}
/* 概览区域模块制作 */
.overview {
  height: 1.375rem;
}
.overview ul {
  display: flex;
  justify-content: space-between;
}
.overview ul li h4 {
  font-size: 0.35rem;
  color: #fff;
  margin: 0 0 0.1rem 0.06rem;
}
.overview ul li span {
  font-size: 0.2rem;
  color: #4c9bfd;
}
/* 监控区域模块制作 */
.monitor {
  height: 6rem;
}
.monitor .inner {
  padding: 0.3rem 0;
  display: flex;
  flex-direction: column;
}
.monitor .tabs {
  padding: 0 0.45rem;
  margin-bottom: 0.225rem;
  display: flex;
}
.monitor .tabs a {
  color: #1950c4;
  font-size: 0.225rem;
  padding: 0 0.3375rem;
}
.monitor .tabs a:first-child {
  padding-left: 0;
  border-right: 0.025rem solid #00f2f1;
}
.monitor .tabs a.active {
  color: #fff;
}
.monitor .content {
  flex: 1;
  position: relative;
  display: none;
}
.monitor .head {
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.15rem 0.45rem;
  color: #68d8fe;
  font-size: 0.175rem;
}
.monitor .marquee-view {
  position: absolute;
  top: 0.5rem;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}

.monitor .row {
  display: flex;
  justify-content: space-between;
  line-height: 1.05;
  font-size: 0.15rem;
  color: #61a8ff;
  padding: 0.15rem 0.45rem;
}
.monitor .row .icon-dot {
  position: absolute;
  left: 0.2rem;
  opacity: 0;
}
.monitor .row:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #68d8fe;
}
.monitor .row:hover .icon-dot {
  opacity: 1;
}
.monitor .col:first-child {
  width: 1rem;
}
.monitor .col:nth-child(2) {
  width: 2.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.monitor .col:nth-child(3) {
  width: 1rem;
}
/* 通过CSS3动画滚动marquee */
.marquee-view .marquee {
  animation: move 15s linear infinite;
}
@keyframes move {
  0% {
  }
  100% {
    transform: translateY(-50%);
  }
}
/* 3.鼠标经过marquee 就停止动画 */
.marquee-view .marquee:hover {
  animation-play-state: paused;
}
/* 点位分布统计模块制作 */
.point {
  height: 4.25rem;
}
.point .chart {
  display: flex;
  margin-top: 0.3rem;
  justify-content: space-between;
}
.point .pie {
  width: 3.9rem;
  height: 3rem;
  margin-left: -0.125rem;
}
.point .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.1rem;
  padding: 0.45rem 0.375rem;
  box-sizing: border-box;
  background-image: url(../../assets/images/rect.png);
  background-size: cover;
}
.point h4 {
  margin-bottom: 0.15rem;
  font-size: 0.35rem;
  color: #fff;
}
.point span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 地图模块制作 */
.map {
  height: 7.225rem;
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
}
.map h3 {
  line-height: 1;
  padding: 0.2rem 0;
  margin: 0;
  font-size: 0.25rem;
  color: #fff;
  font-weight: 400;
}
.map .icon-cube {
  color: #68d8fe;
}
.map .chart {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.05);
}
.map .geo {
  width: 100%;
  height: 100%;
}
/* 用户统计模块 */
.users {
  height: 4.25rem;
  display: flex;
}
.users .chart {
  display: flex;
  margin-top: 0.3rem;
}
.users .bar {
  width: 7.35rem;
  height: 3rem;
}
.users .data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.1rem;
  padding: 0.45rem 0.375rem;
  box-sizing: border-box;
  background-image: url(../../assets/images/rect.png);
  background-size: cover;
}
.users h4 {
  margin-bottom: 0.15rem;
  font-size: 0.35rem;
  color: #fff;
}
.users span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 订单模块制作 */
.order {
  height: 1.875rem;
}
.order .filter {
  display: flex;
}
.order .filter a {
  display: block;
  height: 0.225rem;
  line-height: 1;
  padding: 0 0.225rem;
  color: #1950c4;
  font-size: 0.225rem;
  border-right: 0.025rem solid #00f2f1;
}
.order .filter a:first-child {
  padding-left: 0;
}
.order .filter a:last-child {
  border-right: none;
}
.order .filter a.active {
  color: #fff;
  font-size: 0.25rem;
}
.order .data {
  display: flex;
  margin-top: 0.25rem;
}
.order .item {
  width: 50%;
}
.order h4 {
  font-size: 0.35rem;
  color: #fff;
  margin-bottom: 0.125rem;
}
.order span {
  display: block;
  color: #4c9bfd;
  font-size: 0.2rem;
}
/* 销售区域 */
.sales {
  height: 3.1rem;
}
.sales .caption {
  display: flex;
  line-height: 1;
}
.sales h3 {
  height: 0.225rem;
  padding-right: 0.225rem;
  border-right: 0.025rem solid #00f2f1;
}
.sales a {
  padding: 0.05rem;
  font-size: 0.2rem;
  margin: -0.0375rem 0 0 0.2625rem;
  border-radius: 0.0375rem;
  color: #0bace6;
}
.sales a.active {
  background-color: #4c9bfd;
  color: #fff;
}
.sales .inner {
  display: flex;
  flex-direction: column;
}
.sales .chart {
  flex: 1;
  padding-top: 0.1875rem;
  position: relative;
}
.sales .label {
  position: absolute;
  left: 0.525rem;
  top: 0.225rem;
  color: #4996f5;
  font-size: 0.175rem;
}
.sales .line {
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
/* 渠道分布以及季度销售模块 */
.wrap {
  display: flex;
}
.channel,
.quarter {
  flex: 1;
  height: 2.9rem;
}
.channel {
  margin-right: 0.25rem;
}
.channel .data {
  overflow: hidden;
}
.channel .data .radar {
  height: 2.1rem;
  width: 100%;
}
.channel h4 {
  color: #fff;
  font-size: 0.4rem;
  margin-bottom: 0.0625rem;
}
.channel small {
  font-size: 50%;
}
.channel span {
  display: block;
  color: #4c9bfd;
  font-size: 0.175rem;
}
/* 季度区块 */
.quarter .inner {
  display: flex;
  flex-direction: column;
  margin: 0 -0.075rem;
}
.quarter .chart {
  flex: 1;
  padding-top: 0.225rem;
}
.quarter .box {
  position: relative;
}
.quarter .label {
  transform: translate(-50%, -30%);
  color: #fff;
  font-size: 0.375rem;
  position: absolute;
  left: 50%;
  top: 50%;
}
.quarter .label small {
  font-size: 50%;
}
.quarter .gauge {
  height: 1.05rem;
}
.quarter .data {
  display: flex;
  justify-content: space-between;
}
.quarter .item {
  width: 50%;
}
.quarter h4 {
  color: #fff;
  font-size: 0.3rem;
  margin-bottom: 0.125rem;
}
.quarter span {
  display: block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #4c9bfd;
  font-size: 0.175rem;
}
/* 全国热榜模块制作 */
/* 排行榜 */
.top {
  height: 3.5rem;
}
.top .inner {
  display: flex;
}
.top .all {
  display: flex;
  flex-direction: column;
  width: 2.1rem;
  color: #4c9bfd;
  font-size: 0.175rem;
  vertical-align: middle;
}
.top .all ul {
  padding-left: 0.15rem;
  margin-top: 0.15rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top .all li {
  overflow: hidden;
}
.top .all [class^="icon-"] {
  font-size: 0.45rem;
  vertical-align: middle;
  margin-right: 0.15rem;
}
.top .province {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.top .province i {
  padding: 0 0.15rem;
  margin-top: 0.0625rem;
  float: right;
  font-style: normal;
  font-size: 0.175rem;
  color: #0bace6;
}
.top .province s {
  display: inline-block;
  transform: scale(0.8);
  text-decoration: none;
}
.top .province .icon-up {
  color: #dc3c33;
}
.top .province .icon-down {
  color: #36be90;
}
.top .province .data {
  flex: 1;
  display: flex;
  margin-top: 0.175rem;
}
.top .province ul {
  flex: 1;
  line-height: 1;
  margin-bottom: 0.175rem;
}
.top .province ul li {
  display: flex;
  justify-content: space-between;
}
.top .province ul span {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.top .province ul.sup {
  font-size: 0.175rem;
}
.top .province ul.sup li {
  color: #4995f4;
  padding: 0.15rem;
}
.top .province ul.sup li.active {
  color: #a3c6f2;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.15rem;
  background-color: rgba(10, 67, 188, 0.2);
}
.top .province ul.sub li {
  color: #52ffff;
  padding: 0.125rem 0.175rem;
}
.clock {
  position: absolute;
  top: -0.45rem;
  right: 0.5rem;
  font-size: 0.25rem;
  color: #0bace6;
}
.clock i {
  margin-right: 5px;
  font-size: 0.25rem;
}
@media screen and (max-width: 1600px) {
  .top span {
    transform: scale(0.9);
  }
  .top .province ul.sup li {
    padding: 0.125rem 0.15rem;
  }
  .top .province ul.sub li {
    padding: 0.0625rem 0.15rem;
  }
  .quarter span {
    transform: scale(0.9);
  }
}

</style>