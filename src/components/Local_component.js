import React from 'react';
import { Button, Table } from 'antd';
import router from 'umi/router';
import MyTable from '@/components/MyTable';
import styles from '../pages/dataMarket/dataMarketManager/index.css';


class Local_component extends  React.Component{
  columns = [
    {
      title: '表名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '存储量',
      dataIndex: 'size',
      key: 'size',
    },
  ];
  render() {

    return (

        <div style={{marginBottom:20 , backgroundColor:'white'}}>

          <div style={{padding:'22px 0px'}}>
            <span style={{marginLeft:'10px', fontWeight:'bold'}} >{this.props.title}</span>

            <Button type={'link'} style={{float:'right', marginRight:'24px',}} onClick={()=>router.push({
              pathname:'/dataMarket/dataMarketManager/detail',
              state:{id:this.props.id, name:'aaa'}
            })}>
              查看详情
            </Button>
          </div>


          <Table
            columns={this.columns}
            dataSource={this.props.dataSource}
            pagination={false}
          >
          </Table>
        </div>


    );
  }

}
export default Local_component;
