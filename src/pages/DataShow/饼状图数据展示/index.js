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




class 饼状图数据展示 extends React.Component {


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
        text: '保险订单数据',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          name: '订单数量',
          type: 'pie',
          radius: '70%',
          data: [
            {value: 5, name: '人寿保险'},
            {value: 3, name: '财产保险'},
            {value: 3, name: '团体或企业保险'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 30,   //光标所在区域下阴影大小
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });

    // 绘制图表
    myChart2.setOption({
      title: {
        text: '人寿保险订单数据',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          name: '订单数量',
          type: 'pie',
          radius: '70%',
          data: [
            {value: 1, name: '任我行无忧意外保险'},
            {value: 3, name: '无忧综合意外伤害保险'},
            {value: 1, name: '优享意外保险'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 30,   //光标所在区域下阴影大小
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });


    // 绘制图表
    myChart3.setOption({
      title: {
        text: '财产保险订单数据',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          name: '订单数量',
          type: 'pie',
          radius: '70%',
          data: [
            {value: 1, name: '现金综合险'},
            {value: 2, name: '财产一切险'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 30,   //光标所在区域下阴影大小
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });


    // 绘制图表
    myChart4.setOption({
      title: {
        text: '团体或企业保险订单数据',
        left:'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right',
      },
      series: [
        {
          name: '订单数量',
          type: 'pie',
          radius: '70%',
          data: [
            {value: 2, name: '长期健康保障'},
            {value: 1, name: '企业精英保障'},
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 30,   //光标所在区域下阴影大小
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });



  }

  render() {
    return (
      <div className={styles.chartBG2}>
        <div>
          <div id="chart1" className={styles.chartPosition_left}>
          </div>
          <div id="chart2" className={styles.chartPosition_right}>
          </div>
        </div>


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
export default 饼状图数据展示;
