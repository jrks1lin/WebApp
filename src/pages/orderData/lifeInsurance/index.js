import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

//表单伪数据
const columns = [
  {
    title: '订单号',
    dataIndex: '订单号',
    width: 90,
  },
  {
    title: '身份证号码',
    dataIndex: '身份证号码',
    width: 200,
  },
  {
    title: '保险类型',
    dataIndex: '保险类型',
    width: 100,
  },

  {
    title: '保险产品名称',
    dataIndex: '保险产品名称',
    width: 300,
  },
  {
    title: '客户姓名',
    dataIndex: '客户姓名',
    width: 150,
  },
];

const data = [
  {
    key: 1,
    客户姓名:"悠木璧",
    订单号: "1",
    身份证号码: "410502197207240728",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",
  },
  {
    key: 2,
    客户姓名:"艾德",
    订单号: "2",
    身份证号码: "410502198201240525",
    保险产品名称:"蓝天优享意外保险",
    保险类型:"寿险",
  },
  {
    key: 3,
    客户姓名:"路目圆",
    订单号: "3",
    身份证号码: "410502198202100356",
    保险产品名称:"蓝天任我行无忧意外保险",
    保险类型:"寿险",
  },
  {
    key: 10,
    客户姓名:"冯包包",
    订单号: "10",
    身份证号码: "412501199808294034",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",
  },

  {
    key: 11,
    客户姓名:"张三",
    订单号: "11",
    身份证号码: "410503197002580121",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",

  },

];
class lifeInsurance extends React.Component {

  //表单初始状态及功能处理
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
//----------------------------------

  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="人寿保险订单"
          subTitle="Life insurance"
        /></div>
        <Table className={styles.allTable} columns={columns} dataSource={data} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />
      </div>
    );
  }
}
export default lifeInsurance;
