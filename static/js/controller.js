$(document).ready(function (){
  // chart 1
    var chartDom = document.getElementById('product_cat_chart');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000'
          }
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
    }
  ]
};

option && myChart.setOption(option);

// chart 2
var chartDom = document.getElementById('sales_vs_target');
var myChart = echarts.init(chartDom);
var option;

option = {
  dataset: [
    {
      dimensions: ['name', 'age', 'profession', 'score', 'date'],
      source: [
        ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
        ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
        ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
        ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
        ['Karle Neumann', 25, 'Engineer', 253, '2011-04-02'],
        ['Adrian Groß', 19, 'Teacher', '-', '2011-01-16'],
        ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
        ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
        ['Han Meimei', 67, 'Engineer', 366, '2011-03-12']
      ]
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'score', order: 'desc' }
      }
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'name', y: 'score' },
    datasetIndex: 1
  }
};

option && myChart.setOption(option);

// tar_achiv
var chartDom = document.getElementById('tar_achiv');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048,  },
        { value: 735,  },
        { value: 580, },
        { value: 484,  },
        { value: 300,  }
      ]
    }
  ]
};

option && myChart.setOption(option);

// sale amount by region
var chartDom = document.getElementById('sale_by_region');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    // text: 'World Population'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
};

option && myChart.setOption(option);

// sale by channel
var chartDom = document.getElementById('sales_channel');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      padAngle: 5,
      itemStyle: {
        borderRadius: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048,  },
        { value: 735, },
        { value: 580,},
        { value: 484, },
        { value: 300, }
      ]
    }
  ]
};

option && myChart.setOption(option);

// inventory chart
var chartDom = document.getElementById('Inventory_chart');
var myChart = echarts.init(chartDom);
var option;

// This example requires ECharts v5.5.0 or later
option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

option && myChart.setOption(option);

// sales_growth
var chartDom = document.getElementById('sales_growth');
var myChart = echarts.init(chartDom);
var option;

let xAxisData = [];
let data1 = [];
let data2 = [];
let data3 = [];
let data4 = [];
for (let i = 0; i < 10; i++) {
  xAxisData.push('Class' + i);
  data1.push(+(Math.random() * 2).toFixed(2));
  data2.push(+(Math.random() * 5).toFixed(2));
  data3.push(+(Math.random() + 0.3).toFixed(2));
  data4.push(+Math.random().toFixed(2));
}
var emphasisStyle = {
  itemStyle: {
    shadowBlur: 10,
    shadowColor: 'rgba(0,0,0,0.3)'
  }
};
option = {
  legend: {
    data: ['bar', 'bar2', 'bar3', 'bar4'],
    left: '10%'
  },
  brush: {
    toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    xAxisIndex: 0
  },
  toolbox: {
    feature: {
      magicType: {
        type: ['stack']
      },
      dataView: {}
    }
  },
  tooltip: {},
  xAxis: {
    data: xAxisData,
    name: 'X Axis',
    axisLine: { onZero: true },
    splitLine: { show: false },
    splitArea: { show: false }
  },
  yAxis: {},
  grid: {
    bottom: 100
  },
  series: [
    {
      name: 'bar',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data1
    },
    {
      name: 'bar2',
      type: 'bar',
      stack: 'one',
      emphasis: emphasisStyle,
      data: data2
    },
    {
      name: 'bar3',
      type: 'bar',
      stack: 'two',
      emphasis: emphasisStyle,
      data: data3
    },
    {
      name: 'bar4',
      type: 'bar',
      stack: 'two',
      emphasis: emphasisStyle,
      data: data4
    }
  ]
};
myChart.on('brushSelected', function (params) {
  var brushed = [];
  var brushComponent = params.batch[0];
  for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
    var rawIndices = brushComponent.selected[sIdx].dataIndex;
    brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
  }
  myChart.setOption({
    title: {
      backgroundColor: '#333',
      text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
      bottom: 0,
      right: '10%',
      width: 100,
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    }
  });
});

option && myChart.setOption(option);

// R_D_Outstanding
var chartDom = document.getElementById('R_D_Outstanding');
var myChart = echarts.init(chartDom);
var option;

// This example requires ECharts v5.5.0 or later
option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '70%'],
      // adjust the start and end angle
      startAngle: 180,
      endAngle: 360,
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

option && myChart.setOption(option);


})