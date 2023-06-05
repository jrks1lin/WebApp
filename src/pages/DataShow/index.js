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




class GroupInsurance extends React.Component {


  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    let echarts = require('echarts')
    let myChart = echarts.init(document.getElementById('chart1'), 'dark');
    // 绘制图表
    myChart.setOption({
 /*     title: {
        text: '保险订单条形图'
      },*/
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {//条形图区域在整个块中的位置
        left: '10%',
        right: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['全部保险订单', '人寿保险订单', '财产保险订单', '团体保险订单'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '订单数量',
          type: 'bar',
          barWidth: '60%',
          data: [10, 4, 3, 3]
        }
      ]
    });
  }

  render() {
    return (
      <div id="chart1" className={styles.chartPosition}>
      </div>

    );
  }
}
export default GroupInsurance;
