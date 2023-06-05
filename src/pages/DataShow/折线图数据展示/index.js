// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入饼图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 折线图数据展示 extends React.Component {


  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    let echarts = require('echarts')
    let myChart = echarts.init(document.getElementById('chart1'), 'dark');

    //模拟数据

    let base = +new Date(2020, 1, 1);
    let oneDay = 24 * 3600 * 1000;

    let data = [[base, Math.random() * 100]];

    for (let i = 1; i < 400; i++) {
      let now = new Date(base += oneDay);
      data.push([

      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round((Math.random()) * 10 + (Math.random()) * 20 + (Math.random()) * 30 + (Math.random()) * 50 + (Math.random()) * 70)
       /* Math.round((Math.random() - 0.1) * 20 + data[i - 1][1])*/
      ]);
    }

    // 绘制图表
    myChart.setOption({
      tooltip: {//点击图形 文字说明
        trigger: 'axis',
        position: function (pt) {
          return [pt[0], '10%'];
        }
      },
      title: {
        left: 'center',
        text: '蓝天保险每日订单数据统计',
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'time',
        boundaryGap: false
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
      },
      dataZoom: [{
        type: 'inside',
        start: 0,
        end: 20
      }, {
        start: 0,
        end: 20
      }],
      series: [
        {
          name: '订单数据',
          type: 'line',
          smooth: true,
          symbol: 'none',
          areaStyle: {},
          data: data
        }
      ]
    });
  }

  render() {
    return (
      <div className={styles.chartBG2}>
        <div id="chart1" className={styles.chartPosition2}>
        </div>

      </div>


    );
  }
}
export default 折线图数据展示;
