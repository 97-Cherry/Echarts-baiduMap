<template>
  <!-- 用户统计模块 -->
  <div class="users panel">
    <div class="inner">
      <h3>全国用户总量统计</h3>
      <div class="chart">
        <div class="bar"></div>
        <div class="data">
          <div class="item">
            <h4>120,899</h4>
            <span>
              <i class="icon-dot" style="color: #ed3f35"></i>
              用户总量
            </span>
          </div>
          <div class="item">
            <h4>248</h4>
            <span>
              <i class="icon-dot" style="color: #eacf19"></i>
              本月新增
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
     var item = {
    name: "",
    value: 1200,
    // 1. 修改当前柱形的样式
    itemStyle: {
      color: "#254065"
    },
    // 2. 鼠标放到柱子上不想高亮显示
    emphasis: {
      itemStyle: {
        color: "#254065"
      }
    },
    // 3. 鼠标经过柱子不显示提示框组件
    tooltip: {
      extraCssText: "opacity: 0"
    }
  };
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".chart .bar"));
  // 2. 指定配置和数据
  var option = {
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" } // 1 结束颜色
      ]
    ),
    tooltip: {
      trigger: "item"
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: "rgba(0, 240, 255, 0.3)"
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆"
        ],
        axisTick: {
          alignWithLabel: false,
          // 把x轴的刻度隐藏起来
          show: true
        },
        axisLabel: {
          color: "#4c9bfd"
        },
        // x轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        },
        textStyle:{
          color:'#ffffff'
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          // 把y轴的刻度隐藏起来
          show: false
        },
        axisLabel: {
          color: "#fff"
        },
        // y轴这条线的颜色样式
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
            // width: 3
          }
        },
        // y轴分割线的颜色样式
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)"
          }
        }
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240
        ]
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  }
}
</script>

<style>
</style>