import React from 'react';
import { Button, Divider, Input, Pagination, Select } from 'antd';
import { FormOutlined } from '@ant-design/icons';
import styles from '@/pages/dataMarket/dataMarketManager/index.css';
import MyCard from '@/components/MyCard';
import { Table } from 'antd';


let data = []
for (let i = 0; i < 32; i++){
  data.push({
    key: i,
    name: 'estate.demo'+i,
    size: '874.32KB',
    op:<div>
      <Button type={'primary'}>查看详情qqq</Button>
      <Button type={'default'} style={{marginLeft:'10px'}}>删除</Button>
    </div>,
  },)
}

let nowData = [];

class Detail extends React.Component{

  state = {
    status:0,
    author:0,
    DataTitle:'数据集市1',
    AuthorName:'admin',
    nowPageNumber:1,
  }

  columns = [
    {
      width:'700px',
      title: '表名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      width:'500px',
      title: '存储量',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '操作',
      dataIndex: 'op',
      key: 'op',
    }
  ];









  render() {
    /*函数写在render内 return外*/
   function ChangePage (nowPageNumber) {
      console.log('Page: ', nowPageNumber);
      return nowPageNumber;
    }

    /*得到当前页面号的数据*/

    function getDate(){
      let i = 0 + 10 * (this.state.nowPageNumber - 1);
      const nowMax = i + 10;
      let nowData = [];
      let num = 0;
      for(i; i<=nowMax-1; i++){
        nowData[num]=data[i]
        num++;
      }

    }

    return (


      <div>


        {/*中部搜索框栏*/}
        <div style={{height:'0px'}} >

          <h2 className={styles.left}>数据集市详情</h2>

          <div className={styles.right}>
            <Input placeholder={'请输入数据集市的名称进行搜索'} className={styles.input_search}/>
            <Button type={'primary'}>搜索</Button>
            <Button type={'primary'} style={{marginLeft:30}}>添加表</Button>
            <Button type={'default'} style={{marginLeft:15}}>删除数据集市</Button>
          </div>

        </div>



        <div style={{margin:'-20px -20px', backgroundColor: 'white', height:'146px'}}>
          <div style={{marginLeft:'20px', padding:'20px 0px 0px 0px'}}><h3 className={styles.fontFam}>基本信息</h3></div>
          <Divider type={'vertical'} style={ {width:'100%',height:2, marginLeft:'0px'} }/>

          <div style={{padding:'20px 0px'}}>
            <span style={{marginLeft:'200px'}}>数据集市名称</span>
          {

            this.state.status===0?<span >

              <span style={{marginLeft:'18px'}}>{this.state.DataTitle}</span>
              <span style={{marginLeft:'20px'}} onClick={()=>this.setState({status:1})}><FormOutlined/></span>

            </span>:<span style={{marginLeft:'20px'}}>

            <input style={{width:200}}/>
            <Button style={{marginLeft:'20px'}} onClick={()=>this.setState({status:0})}>确定</Button>
            </span>

          }


            <span style={{marginLeft:'400px'}}>创建人</span>
          {

            this.state.author===0?<span >

            <span style={{marginLeft:'18px'}}>{this.state. AuthorName}</span>
            <span style={{marginLeft:'20px'}} onClick={()=>this.setState({ author:1})}><FormOutlined/></span>

          </span>:<span style={{marginLeft:'20px'}}>

              <Select placeholder={"请选择创建人"} style={{width:'224px', height:'18px'}} onSelect={(e)=>console.log(e)}>
                <option value="admin">admin</option>
                <option value="admin2">admin2</option>
              </Select>
          <Button style={{marginLeft:'20px'}} onClick={()=>this.setState({ author:0})}>确定</Button>
          </span>

          }

          </div>


          {/*最下方内容*/}
          <div style={{marginTop:'40px'}}>
            <MyCard title={'包含的表'}
              con={
                <div>
                  <Table
                    columns={this.columns}
                    dataSource={data}
                    pagination={false}
                  >
                  </Table>
                  {/*<Pagination defaultCurrent={1} total={data.length} style={{marginTop:'40px', textAlign:'center'}}/>*/}
                  <Pagination showQuickJumper defaultCurrent={1}  pageSize={10} total={data.length} style={{marginTop:'40px', textAlign:'center'}} onChange={ChangePage()} />
                </div>
              }

            />

          </div>



        </div>

      </div>
    );
  }
}
export default Detail;
