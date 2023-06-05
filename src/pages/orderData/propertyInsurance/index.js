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
    key: 4,
    客户姓名:"凯撒亮",
    订单号: "4",
    身份证号码: "410502198203240518",
    保险产品名称:"财产一切险",
    保险类型:"财险",
  },
  {
    key: 5,
    客户姓名:"萧美焰",
    订单号: "5",
    身份证号码: "410502199201140242",
    保险产品名称:"财产一切险",
    保险类型:"财险",
  },
  {
    key: 6,
    客户姓名:"李舜生",
    订单号: "6",
    身份证号码: "410502199202240519",
    保险产品名称:"现金综合险",
    保险类型:"财险",
  },
];

class propertyInsurance extends React.Component {

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
          title="财产保险订单"
          subTitle="Property insurance"
        /></div>
        <Table className={styles.allTable} columns={columns} dataSource={data} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />
      </div>
    );
  }
}
export default propertyInsurance ;
