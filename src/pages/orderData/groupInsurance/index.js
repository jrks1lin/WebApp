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
    key: 7,
    客户姓名:"周防尊",
    订单号: "7",
    身份证号码: "410502199202280617",
    保险产品名称:"长期健康保障",
    保险类型:"团险",
  },
  {
    key: 8,
    客户姓名:"王烨",
    订单号: "8",
    身份证号码: "410502199210240497",
    保险产品名称:"长期健康保障",
    保险类型:"团险",
  },
  {
    key: 9,
    客户姓名:"张三",
    订单号: "9",
    身份证号码: "410503197002580121",
    保险产品名称:"企业精英保障",
    保险类型:"团险",
  },
];


class groupInsurance extends React.Component {

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
        title="团体或企业保险订单"
        subTitle="Group or corporate insurance"
      /></div>

      <Table className={styles.allTable} columns={columns} dataSource={data} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />
    </div>
  );
}
}
export default groupInsurance;
