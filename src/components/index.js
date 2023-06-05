
import { Component } from 'react';
import { Table } from 'antd'

let data = []
for (let i = 0; i < 10; i++){
  data.push({
    key: i,
    name: 'estate.demo_ods_company_info_d',
    size: '874.32',
  },)
}

class DataResourceDataMetaTable extends Component {
  columns = [
    {
      title: '表名',
      dataIndex: 'name',
      key: 'name',
      render: text =><a>{text}</a>,
    },
    {
      title: '存储量',
      dataIndex: 'size',
      key: 'size',
      render: text => text + " KB"
    },
  ];
  rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  render() {

    return <Table rowSelection={this.rowSelection} {...{pagination:false}} columns={this.columns} dataSource={data} />

  }
}

export default DataResourceDataMetaTable;

