import React from 'react';
import { Input, Button, Select, Row, Col, Table } from 'antd';
import styles from './index.css'
/*??? 引图片的时候 大括号必需加*/
import { empty_img } from '../../../assets/index'
import  StepList  from '@/components/StepList' ;//步骤条导入
import  DialogBox from '@/components/DialogBox';
import MyTable from '@/components/MyTable';
import Local_component from '@/components/Local_component';
import { connect } from 'dva';

let data=[]
for(let i =0 ; i<3 ; i++){
  data.push({
    key:i,
    name:'sss',
    size:'qww',
  })
}

class dataMarketManager extends React.Component{

  //对话框用
  state = {
    visible: false,
    current:0,
    createComplete:0,
    DataCard:0,
    status:0,
  };

//对话框结束

  //进度条
  onChange = current => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  componentWillMount() {



    /*
      this.props.dispatch({
      type:'datamart/datamarketadd',
      payload:{
        marketName:'数据集市调用1',
        person:1,
        tableids:'1,2,3'
      }
    })
    */
  }

  findTable =()=>{
    this.props.dispatch({
      type:'dataMarketSpace/queryTableList',
      payload:{

      }
    })
  }

  findFounder = ()=>{
    this.props.dispatch({
      type:'dataMarketSpace/queryFounderList',
      payload:{
        marketName:'集市1',
        person:1,
        tableids:'1,2,3',
      }
    })
  }

  OnlickOK = ()=> {
    this.setState({visible:false})
    this.props.dispatch({
      /*type:空间名/效果名 调用*/
      type:'dataMarketSpace/queryDataMarketAdd',
      /*需要传递的信息*/
      payload: {
        marketName:'集市1',
        person:1,
        tableids:'1,2,3',
      }
    })
  }

  FindMarket = ()=>{
    this.props.dispatch({
      type:'dataMarketSpace/findMarket',
      payload:{
        pageNum:'1',
        pageSize:'10',
      }
    })
  }

  render() {
    return (
      <div>
        {/*中部搜索框栏*/}
        <div  style={{height:'20px'}}>
          <h2 className={styles.left}>xxxxxxxxxxx数据集市管理</h2>

          <div className={styles.right}>
            <Input placeholder={'请输入数据集市的名称进行搜索'} className={styles.input_search}/>
            <Button type={'primary'}>搜索</Button>
            {this.state.DataCard===1&&<Button type={'primary'} style={{marginLeft:30}}>新建数据集市</Button>}
          </div>

        </div>


        <div>

          {this.state.createComplete===1?<Row gutter={26}>

            {this.props.dataMarketSpace.marketList && this.props.dataMarketSpace.marketList.map((item, i)=>{
              return <Col span={8} key={i} style={{marginBottom:24}} >

                {/*取单个集市的表数组*/}

                <Local_component id={item.id}
                                 dataSource={data}

                                 title={item.marketName} ></Local_component>
                {console.log(item.id,item.marketName)}
              </Col>

            })}




              </Row>:<div className={styles.center}>

            <img src={empty_img} alt=""/>
            <br/>暂无数据<br/>
            <Button type="primary" onClick={()=>{this.findFounder();this.setState({visible:true})}}>
              {console.log(this.state.visible)}{/*括号里面可以写html语言*/}
              新建数据集市
            </Button>
          </div>
          }



          {this.state.visible && <DialogBox
            visible={this.state.visible}
            onCancel={()=>this.setState({visible:false})}
            con={
              <div>
                <StepList current={this.state.current} steps={[
                {
                  title:"第一步",
                  content:<div>
                    <div style={{marginTop:'40px',textAlign:'right'}}>
                      <label  style={{marginRight:'24px'}}><span style={{color:'red',marginRight:'5px'}}>*</span>名称</label>
                      <Input id={'name'} style={{width:478,marginRight:'80px'}}/>
                    </div>


                    <div style={{marginTop:'24px',textAlign:'right'}}>
                      <label style={{marginRight:'24px'}}><span style={{color:'red',marginRight:'5px'}}>*</span>创建人</label>
                      {/*e 形参 传递的是当前option的值*/}
                      <Select placeholder={"请选择创建人"} style={{width:478,marginRight:'80px'}} onSelect={(e)=>console.log(e)}>
                        {
                          this.props.dataMarketSpace.personList &&
                          this.props.dataMarketSpace.personList.map(item => {
                            /*注意 option小写 大写报错不晓得为什么*/
                            return <option value={item.id}>{item.person}</option>
                          })
                        }
                      </Select>
                    </div>


                    <div style={{marginTop:'24px',textAlign:'right'}}>
                      <Button style={{marginRight:'20px',height:'40px'}} type="primary" onClick={()=>this.setState({visible:false})}>取消</Button>
                      <Button style={{marginRight:'80px',height:'40px'}} onClick={()=>{console.log("名称数据", document.getElementById('name').value);
                      this.findTable();this.setState({current:1})}}>下一步</Button>
                    </div>

                    </div>
                },
                {
                  title:"第二步",
                  content:

                    <div>
                      <div>选择表</div>
                    <div  style={{height:'500px',overflowY:'auto'}}>
                      <MyTable tableList={this.props.dataMarketSpace.tableList}/>
                    </div>

                    <div style={{marginTop:'24px',textAlign:'right'}}>
                      <Button style={{marginRight:'20px',height:'40px'}} onClick={()=>this.setState({current:0})}>上一步</Button>
                      <Button style={{marginRight:'80px',height:'40px'}} type="primary" onClick={()=>{this.OnlickOK(); this.FindMarket(); this.setState({createComplete:1, DataCard:1})}}>完成</Button>
                    </div>

                  </div>
                },
              ]}/>
              </div>}
          />}







        </div>

      </div>
    );
  }
}
export default connect(({dataMarketSpace}) => ({dataMarketSpace}))(dataMarketManager);
