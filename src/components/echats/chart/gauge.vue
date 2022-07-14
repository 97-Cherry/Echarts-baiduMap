<template>
    <!-- 销售进度模块 -->
          <div class="quarter panel">
            <div class="inner">
              <h3>一季度销售进度</h3>
              <div class="chart">
                <div class="box">
                  <div class="gauge"></div>
                  <div class="label">50<small> %</small></div>
                </div>
                <div class="data">
                  <div class="item">
                    <h4>1,321</h4>
                    <span>
                      <i class="icon-dot" style="color: #6acca3"></i>
                      销售额(万元)
                    </span>
                  </div>
                  <div class="item">
                    <h4>150%</h4>
                    <span>
                      <i class="icon-dot" style="color: #ed3f35"></i>
                      同比增长
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  mounted() {
    // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".gauge"));
  // 2. 指定数据和配置
  var option = {
    series: [
      {
        name: "销售进度",
        type: "pie",
        radius: ["130%", "150%"],
        // 移动下位置  套住50%文字
        center: ["48%", "80%"],
        //是否启用防止标签重叠策略
        // avoidLabelOverlap: false,
        labelLine: {
          normal: {
            show: false
          }
        },
        // 饼形图的起始角度为 180， 注意不是旋转角度
        startAngle: 180,
        // 鼠标经过不需要放大偏移图形
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" } // 1 结束颜色
                ]
              )
            }
          },
          {
            value: 100,
            itemStyle: {
              color: "#12274d"
            }
          },
          {
            value: 200,
            itemStyle: {
              color: "transparent"
            }
          }
        ]
      }
    ]
  };
  // 3. 把数据和配置给实例对象
  myChart.setOption(option);
  },

}
</script>

<style>

</style>