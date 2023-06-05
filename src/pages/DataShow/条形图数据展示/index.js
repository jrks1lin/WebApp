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




class 条形图数据展示 extends React.Component {


  componentDidMount(){
    // 基于准备好的dom，初始化echarts实例
    let echarts = require('echarts')
    let myChart = echarts.init(document.getElementById('chart1'), 'dark');
    let myChart2 = echarts.init(document.getElementById('chart2'), 'dark');
    let myChart3 = echarts.init(document.getElementById('chart3'), 'dark');
    let myChart4 = echarts.init(document.getElementById('chart4'), 'dark');
    // 绘制图表
    myChart.setOption({
           title: {
             text: '保险订单条形统计图',
             left:'center',
           },
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
          data: [11, 5, 3, 3]
        }
      ]
    });


    // 绘制图表
    myChart2.setOption({
      title: {
        text: '人寿保险订单统计图',
        left:'center',
      },
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
          data: ['无忧综合意外伤害保险',  '任我行无忧意外保险', '优享意外保险'],
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
          data: [ 3, 1, 1]
        }
      ]
    });


    // 绘制图表
    myChart3.setOption({
      title: {
        text: '财产保险订单统计图',
        left:'center',
      },
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
          data: ['现金综合险', '财产一切险'],
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
          data: [1, 2]
        }
      ]
    });


    // 绘制图表
    myChart4.setOption({
      title: {
        text: '团体保险订单统计图',
        left:'center',
      },
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
          data: ['长期健康保障', '企业精英保障'],
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
          data: [2, 1]
        }
      ]
    });



    //方法结束括号
  }



  render() {
    return (
      <div className={styles.chartBG2}>


        {/*前两个条形图div*/}
        <div>
          <div id="chart1" className={styles.chartPosition_left}>
          </div>
          <div id="chart2" className={styles.chartPosition_right}>
          </div>
        </div>

        {/*后两个条形图div*/}
        <div>
          <div id="chart3" className={styles.chartPosition_left}>
          </div>
          <div id="chart4" className={styles.chartPosition_right}>
          </div>
        </div>

      </div>


    );
  }
}
export default 条形图数据展示;
