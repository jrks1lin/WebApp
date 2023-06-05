import React from 'react';
import { Button, Divider, Input, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';
import { Descriptions, Badge } from 'antd';
import { Empty } from 'antd';

const data = [
  {
    key: 1,
    客户姓名:"悠木璧",
    订单号: "1",
    身份证号码: "410502197207240728",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",

    被保险人:"悠木璧",
    被保险人身份证号:"410502197207240728",
    日期:"2021-05-01",
    保险期间:"至2040年05月01日",
    交费方式和交费期间:"年交/10年",
    保险费:"2400.00元/年",
    基本保险金额:"100000.00元"
  },
  {
    key: 2,
    客户姓名:"艾德",
    订单号: "2",
    身份证号码: "410502198201240525",
    保险产品名称:"蓝天优享意外保险",
    保险类型:"寿险",

    被保险人:"艾德",
    被保险人身份证号:"410502198201240525",
    日期:"2021-12-01",
    保险期间:"至2040年12月01日",
    交费方式和交费期间:"年交/5年",
    保险费:"2200.00元/年",
    基本保险金额:"108000.00元"
  },
  {
    key: 3,
    客户姓名:"路目圆",
    订单号: "3",
    身份证号码: "410502198202100356",
    保险产品名称:"蓝天任我行无忧意外保险",
    保险类型:"寿险",

    被保险人:"路目圆",
    被保险人身份证号:"410502198202100356",
    日期:"2021-10-01",
    保险期间:"至2040年10月01日",
    交费方式和交费期间:"年交/10年",
    保险费:"3100.00元/年",
    基本保险金额:"130000.00元"
  },
  {
    key: 4,
    客户姓名:"凯撒亮",
    订单号: "4",
    身份证号码: "410502198203240518",
    保险产品名称:"财产一切险",
    保险类型:"财险",

    被保险人:"凯撒亮",
    被保险人身份证号:"410502198203240518",
    日期:"2021-09-01",
    保险期间:"至2040年09月01日",
    交费方式和交费期间:"年交/5年",
    保险费:"2700.00元/年",
    基本保险金额:"120000.00元"
  },
  {
    key: 5,
    客户姓名:"萧美焰",
    订单号: "5",
    身份证号码: "410502199201140242",
    保险产品名称:"财产一切险",
    保险类型:"财险",

    被保险人:"萧美焰",
    被保险人身份证号:"410502199201140242",
    日期:"2021-08-01",
    保险期间:"至2040年08月01日",
    交费方式和交费期间:"年交/10年",
    保险费:"3200.00元/年",
    基本保险金额:"140000.00元"
  },
  {
    key: 6,
    客户姓名:"李舜生",
    订单号: "6",
    身份证号码: "410502199202240519",
    保险产品名称:"现金综合险",
    保险类型:"财险",

    被保险人:"李舜生",
    被保险人身份证号:"410502199202240519",
    日期:"2021-07-01",
    保险期间:"至2040年07月01日",
    交费方式和交费期间:"年交/10年",
    保险费:"2800.00元/年",
    基本保险金额:"109000.00元"
  },
  {
    key: 7,
    客户姓名:"周防尊",
    订单号: "7",
    身份证号码: "410502199202280617",
    保险产品名称:"长期健康保障",
    保险类型:"团险",

    被保险人:"红蓝集团",
    被保险人身份证号:"410502199202280617",
    日期:"2021-06-01",
    保险期间:"至2040年06月01日",
    交费方式和交费期间:"年交/15年",
    保险费:"3400.00元/年",
    基本保险金额:"160000.00元"
  },
  {
    key: 8,
    客户姓名:"王烨",
    订单号: "8",
    身份证号码: "410502199210240497",
    保险产品名称:"长期健康保障",
    保险类型:"团险",

    被保险人:"王烨集团",
    被保险人身份证号:"410502199210240497",
    日期:"2021-04-01",
    保险期间:"至2040年04月01日",
    交费方式和交费期间:"年交/5年",
    保险费:"2100.00元/年",
    基本保险金额:"110000.00元"
  },
  {
    key: 9,
    客户姓名:"张三",
    订单号: "9",
    身份证号码: "410503197002580121",
    保险产品名称:"企业精英保障",
    保险类型:"团险",

    被保险人:"张三集团",
    被保险人身份证号:"410503197002580121",
    日期:"2021-02-01",
    保险期间:"至2040年02月01日",
    交费方式和交费期间:"年交/10年",
    保险费:"3000.00元/年",
    基本保险金额:"120000.00元"
  },
  {
    key: 10,
    客户姓名:"冯包包",
    订单号: "10",
    身份证号码: "412501199808294034",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",

    被保险人:"冯包包",
    被保险人身份证号:"412501199808294034",
    日期:"2021-03-01",
    保险期间:"至2040年03月01日",
    交费方式和交费期间:"年交/5年",
    保险费:"2000.00元/年",
    基本保险金额:"100000.00元"
  },
  {
    key: 11,
    客户姓名:"张三",
    订单号: "11",
    身份证号码: "410503197002580121",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",

    被保险人:"张三",
    被保险人身份证号:"410503197002580121",
    日期:"2021-04-01",
    保险期间:"至2040年04月01日",
    交费方式和交费期间:"年交/5年",
    保险费:"2100.00元/年",
    基本保险金额:"110000.00元"
  },

];

const find_table = [
  {
    客户姓名:"",
    订单号: "",
    身份证号码: "",
    保险产品名称:"",
    保险类型:"",

    被保险人:"",
    被保险人身份证号:"",
    日期:"",
    保险期间:"",
    交费方式和交费期间:"",
    保险费:"",
    基本保险金额:"",
    查看详情:"",
  },
];

const find_data = [
  {
    客户姓名:"",
    订单号: "",
    身份证号码: "",
    保险产品名称:"",
    保险类型:"",

    被保险人:"",
    被保险人身份证号:"",
    日期:"",
    保险期间:"",
    交费方式和交费期间:"",
    保险费:"",
    基本保险金额:"",
    查看详情:"",
  },
];
const empty =[
  {
    客户姓名:"",
    订单号: "",
    身份证号码: "",
    保险产品名称:"",
    保险类型:"",

    被保险人:"",
    被保险人身份证号:"",
    日期:"",
    保险期间:"",
    交费方式和交费期间:"",
    保险费:"",
    基本保险金额:"",
  },
];


//input状态
const { Search } = Input;

const onSearch = value => console.log(value);
//************************


//查询到多个保单表格列数据------------------------------------
//表单标题伪数据
const columns = [
  {
    title: '保单号',
    dataIndex: '订单号',
    width: 100,
  },
  {
    title: '身份证号码',
    dataIndex: '身份证号码',
    width: 200,
  },
  {
    title: '投保人姓名',
    dataIndex: '客户姓名',
    width: 100,
  },
  {
    title: '保险产品名称',
    dataIndex: '保险产品名称',
    width: 100,
  },
  {
    title: '保险类型',
    dataIndex: '保险类型',
    width: 100,
  },
  {
    title: '查看详情',
    dataIndex: '查看详情',
    width: 100,
  },

];
//------------------------------------------------




//创建组件
class orderFind extends React.Component {
/*  //表单初始状态及功能处理
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };*/
  //组件构造函数
  // 状态机
  constructor(props, context) {
    super(props, context);
    this.state = {
      display_con: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现
      display_Enmpty: 'block', //此状态机为display的取值  none表示隐藏，block表示呈现
      display_Table:'none',//多保单时table表
    }
    this.detail = this.detail.bind(this);
  }




 /* onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };*/
//----------------------------------


  //-------------------------------------------------------显示详情按钮
  detail (num, event){
    console.log("参数",num)
    for(let i = 0 ; i<data.length; i++){

      //找到是点击了的按钮是哪个保单
      if(data[i].订单号 == num){
        find_data[0] = data[i];
      }
    }

    //设置保单加入结果集
    this.setState({display_con: 'block', display_Empty: 'none' ,display_Table:'none'})
  }

  //隐藏
  offVisible = () =>{

    let text = document.getElementById("保单号搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      if(text == data[i].订单号)
      {
        find_data[0] = data[i];
        flag = 1;
      }
    } if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' });
    } else {
      this.setState({ display_con: 'block', display_Empty: 'none' });
    }


    console.log("保单号搜索");
    console.log("text的值：", text);
    console.log("data数据样式",data)


//请求数据库
/*    let text = document.getElementById("保单号搜索").value;
    const url ="http://localhost:8081/find_Order"
    fetch(url,).then(response => {
      return response.json();
    }).then(data =>{
      //得到数据
      console.log("请求到的数据:",data)
    })*/
  }

  //隐藏2
  offVisible2 = () =>{

    let text = document.getElementById("身份证号码搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      if(text == data[i].身份证号码)
      {
        find_data[0] = data[i];
        flag = 1;
      }
    }if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' });
    } else {
      this.setState({ display_con: 'block', display_Empty: 'none' });
    }

    console.log("身份证号码搜索");
    console.log("text的值：", text);
  }

  //隐藏3
  offVisible3 = () =>{
    let text = document.getElementById("客户姓名搜索").value;
    let flag = 0;
    let findDateLength = 0;
    let num = 0;
    let arr_Finds=[];

    //查看数据集个数
    for (let j = 0;j < data.length; j++){
      if(text == data[j].客户姓名) {
        arr_Finds[num] = data[j].订单号;
        num = num + 1;
      }
    }
 /*   console.log("查看数据集个数",num)
    console.log("查看订单号",arr_Finds)*/


    //
    for (let q = 0; q <arr_Finds.length ; q++){
      for (let i = 0;i<data.length;i++){
          if(arr_Finds[q] == data[i].订单号){
            find_table[findDateLength] = data[i];
            findDateLength = findDateLength + 1;
            flag = 1;
            console.log("数据集i",find_table[q])
          }
      }
    }


    if(find_table.length >= 2){
      for(let i = 0 ; i<find_table.length; i++){
        find_table[i].查看详情 = <Button onClick={this.detail.bind(this,find_table[i].订单号)}>查看保单详情</Button>
      }
    }


    if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' , display_Table:'none'});
    }
    if(flag == 1){
      if(find_table.length>=2){
        console.log("结果集大于2",find_table.length)
        this.setState({ display_con: 'none', display_Empty: 'none' , display_Table:'block'});
      }
      if(find_table.length == 1) {
        find_data[0] = find_table[0]
        this.setState({ display_con: 'block', display_Empty: 'none' ,display_Table:'none'});
      }
    }

    console.log("身份证号码搜索");
    console.log("text的值：", text);
    console.log("客户姓名搜索");
    console.log("text的值：", text);
  }


  render() {


    return (
      <div>{/*总体*/}

        <div >{/*头部*/}
          <div className={styles.header2}>   <PageHeader
            className="site-page-header"
            title="保单查询"
            subTitle="Find orders"
          />
            <br />
            <div >
              <Search size="large" placeholder="根据保单号查找" enterButton="搜索"   id={"保单号搜索"} onSearch={this.offVisible.bind()}/>
            </div>
            <br />
            <Search size="large" placeholder="根据身份证号码查找" enterButton="搜索"   id={"身份证号码搜索"} onSearch={this.offVisible2.bind()}/>
            <br />
            <br />
            <Search size="large" placeholder="根据客户姓名查找" enterButton="搜索"   id={"客户姓名搜索"} onSearch={this.offVisible3.bind()}/>
          </div>
        </div>

        {/*空数据展示*/}
        <div style={{
          display:this.state.display_Empty,
          background:'white',
          top:400,
          left:300,
          position:'absolute',
          height:600,
          width:1500,
        }}>
          <Empty style={{marginTop:200}}/>
        </div>


        {/*display 隐藏元素*/}


        {/*多个保单的情况 使用Table表格展示所有查询到的保单大致信息*/}
        <Table style={{display:this.state.display_Table,
          top:400,
          left:300,
          position:'absolute',
        /*  height:600,
          width:1500,*/}} className={styles.allTable} columns={columns} dataSource={find_table} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />



        {/*保单信息显示*/}
        <div style={{display:this.state.display_con}} className={styles.findOrder}>{/*内容*/}
          <div className={styles.result}>
            <PageHeader
              className="site-page-header"
              title="保单查询结果"
              subTitle="Query results"
            />

          </div>

          <PageHeader
            style={{background:'white'}}
            className="site-page-header"
            title="| 保单基本内容"
          />

          <Descriptions style={{background:'white'}} title="" bordered>
            <Descriptions.Item label="投保人">{find_data[0].客户姓名}</Descriptions.Item>
            <Descriptions.Item label="投保人身份证号码">{find_data[0].身份证号码}</Descriptions.Item>

            <Descriptions.Item label="保单编号">{find_data[0].订单号}</Descriptions.Item>
            <Descriptions.Item label="保单提交日期">{find_data[0].日期}</Descriptions.Item>
            <Descriptions.Item label="保险产品名称" span={2}>
              {find_data[0].保险产品名称}
            </Descriptions.Item>
            <Descriptions.Item label="保险类型">{find_data[0].保险类型}</Descriptions.Item>
          </Descriptions>

          <PageHeader
            style={{background:'white'}}
            className="site-page-header"
            title="| 保单利益表"
          />

          <Descriptions title="" style={{background:'white'}} bordered>
            <Descriptions.Item label="保险期间" span={1}>
              <Badge status="processing" text={find_data[0].保险期间} />
            </Descriptions.Item>
            <Descriptions.Item label="交费方式和交费期间" span={2}>
              {find_data[0].交费方式和交费期间}
            </Descriptions.Item>
            <Descriptions.Item label="被保险人">{find_data[0].被保险人}</Descriptions.Item>
            <Descriptions.Item label="被保险人身份证号">{find_data[0].被保险人身份证号}</Descriptions.Item>
            <Descriptions.Item label="保险费">{find_data[0].保险费}</Descriptions.Item>
            <Descriptions.Item label="基本保险金额" span={3}>
              {find_data[0].基本保险金额}
            </Descriptions.Item>
          </Descriptions>

        </div>

      </div>
    );
  }
}
export default orderFind;
