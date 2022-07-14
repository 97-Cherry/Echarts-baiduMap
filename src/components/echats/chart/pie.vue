<template>
   <!-- 点位分布统计模块制作 -->
        <div class="point panel">
          <div class="inner">
            <h3>点位分布统计</h3>
            <div class="chart">
              <div class="pie"></div>
              <div class="data">
                <div class="item">
                  <h4>320,11</h4>
                  <span>
                    <i class="icon-dot" style="color: #ed3f35"></i>
                    点位总数
                  </span>
                </div>
                <div class="item">
                  <h4>418</h4>
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
  name:'Pie',
   mounted() {
    let myChart=echarts.init(document.querySelector('.chart .pie'));
    myChart.setOption({
       
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: "点位统计",
        type: "pie",
        // 如果radius是百分比则必须加引号
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 5,
          // 连接到文字的线长度
          length2:6
        }
      }
    ]
  })
    }
    
    

}
</script>

<style>

</style>