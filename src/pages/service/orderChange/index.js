import React from 'react';
import { Badge, Button, Descriptions, Divider, Empty, Form, Input, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';
import { Modal  } from 'antd';
import { Cascader } from 'antd';  //下拉菜单

//下拉菜单选项
const options = [
  {
    value: '寿险',
    label: '寿险',

  },
  {
    value: '财险',
    label: '财险',
  },
  {
    value: '团险',
    label: '团险',
  },
];

const options_Insurance = [
  {
    value: '蓝天无忧综合意外伤害保险',
    label: '蓝天无忧综合意外伤害保险',
  },
  {
    value: '蓝天优享意外保险',
    label: '蓝天优享意外保险',
  },
  {
    value: '蓝天任我行无忧意外保险',
    label: '蓝天任我行无忧意外保险',
  },
  {
    value: '财产一切险',
    label: '财产一切险',
  },
  {
    value: '长期健康保障',
    label: '长期健康保障',
  },
  {
    value: '企业精英保障',
    label: '企业精英保障',
  },
  {
    value: '现金综合险',
    label: '现金综合险',
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
    基本保险金额:""
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
    基本保险金额:""
  },
];


const newOrder =[
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
    基本保险金额:""
  },
];

//input状态  搜索框状态
const { Search } = Input;

class orderChange extends React.Component {
  //组件构造函数
  // 状态机
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      display_con: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现
      display_Enmpty: 'block', //此状态机为display的取值  none表示隐藏，block表示呈现
    }

    /*this.change = this.change.bind(this);*/
  }

  //隐藏
  offVisible = () =>{

    let text = document.getElementById("保单号搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      /*data[i].保单操作 = <div> <Button onClick={this.orderChange.bind()}>保单变更</Button> </div>;*/
      if(text == data[i].订单号)
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


    console.log("保单号搜索");
    console.log("text的值：", text);
    console.log("data数据样式",data)


  }

  //隐藏2
  offVisible2 = () =>{

    let text = document.getElementById("身份证号码搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
    /*  data[i].保单操作 = <div> <Button onClick={this.orderChange2.bind()}>保单变更</Button> </div>;*/
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
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
     /* data[i].保单操作 = <div> <Button onClick={this.orderChange3.bind()}>保单变更</Button> </div>;*/
      if(text == data[i].客户姓名)
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
    console.log("客户姓名搜索");
    console.log("text的值：", text);
  }

  //打开对话框 修改信息
  orderChange = () =>{
    this.setState({visible: true})
  }

  orderChange2 = () =>{
    this.setState({visible: true})
  }

  orderChange3 = () =>{
    this.setState({visible: true})
  }


  //对话框隐藏
  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  //下拉取值菜单测试
  onChange_Type(value) {
    console.log(value);
    let num = find_data[0].订单号; //获得待修改的订单号
    let text = value[0]; //修改保险类型的值
    let i = 0;
    for (i = 0; i<data.length; i++){
      if(data[i].订单号==num)//找到待修改的订单
      {
        data[i].保险类型=text;
        find_data[0] = data[i];
      }
    }

  }

  //下拉取值菜单测试(修改保险产品名)
  onChange_Name(value) {
    console.log(value);
    let num = find_data[0].订单号; //获得待修改的订单号
    let text = value[0];
    let i = 0;
    for (i = 0; i<data.length; i++){
      if(data[i].订单号==num)//找到待修改的订单
      {
        data[i].保险产品名称=text;
        find_data[0] = data[i];
      }
    }

  }

  change=()=> {
    this.setState({visible:true})
  }

//提交信息
  buttonSubmit=()=>{
    let name = document.getElementById("newName").value;
    let id = document.getElementById("newID").value;
    let 被投保人 = document.getElementById("被投保人").value;
    let 被投保人身份证号码 = document.getElementById("被投保人身份证号码").value;
    let 交费时间和交费期间 = document.getElementById("交费方式和交费期间").value;
    let 保险期间 = document.getElementById("保险期间").value;
    let 保险费金额= document.getElementById("保险费金额").value;
    let 基本保险金额 = document.getElementById("基本保险金额").value;
    let 保险费 = 保险费金额 + ".00元"

    let num = find_data[0].订单号; //获得待修改的订单号
    let i = 0;
    for (i = 0; i<data.length; i++){
      if(data[i].订单号==num)//找到待修改的订单
      {
        if(name!=''){
          data[i].客户姓名 = name;
        }
        if(id!=''){
          data[i].身份证号码 = id;
        }
        if(被投保人!=''){
          data[i].被保险人 = 被投保人;
        }
        if(被投保人身份证号码!=''){
          data[i].被保险人身份证号 = 被投保人身份证号码;
        }
        if(交费时间和交费期间!=''){
          data[i].交费方式和交费期间 = 交费时间和交费期间;
        }
        if(保险期间!=''){
          data[i].保险期间 = 保险期间;
        }
        if(保险费金额!=''){
          data[i].保险费 = 保险费;
        }
        if(基本保险金额!=''){
          data[i].基本保险金额 = 基本保险金额;
        }
      }
    }
    this.setState({
      visible: false,
    });
  }




  render() {

    return (
      <div>
        <div >{/*头部*/}
          <div className={styles.header2}>   <PageHeader
            className="site-page-header"
            title="保单变更"
            subTitle="Order Change "
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
          <div style={{display:this.state.display_con}} className={styles.findOrder}>
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
            <br/>
            <br/>
            <Button onClick={this.change.bind()}>{<h1>保单变更</h1>}</Button>
          </div>

          <Modal
            title="保单信息修改"
            visible={this.state.visible}
            onOk={this.buttonSubmit}
            onCancel={this.hideModal.bind()}
          >
            <p className={styles.font_bold}><span>保单类型修改为     </span><Cascader className={styles.margin_left} options={options} onChange={this.onChange_Type.bind()} placeholder="请选择" /></p>
            <p className={styles.font_bold}><span>保险产品修改为     </span><Cascader className={styles.margin_left} options={options_Insurance} onChange={this.onChange_Name.bind()} placeholder="请选择" /></p>
            <Form.Item
              label="投保人姓名"
              name="投保人姓名"
              rules={[{ required: true, message: '请修改投保人姓名' }]}
            >
              <Input placeholder={'请修改投保人姓名' } id={"newName"}/>
            </Form.Item>

            <Form.Item
              label="投保人身份证号码"
              name="投保人身份证号码"
              rules={[{ required: true, message: '请修改投保人身份证号码' }]}
            >
              <Input placeholder={"请修改投保人身份证号码"} id={"newID"}/>
            </Form.Item>

            <Form.Item
              label="被投保人"
              name="被投保人"
              rules={[{ required: true, message: '请修改被投保人' }]}
            >
              <Input placeholder={"请修改被投保人"} id={"被投保人"}/>
            </Form.Item>


            <Form.Item
              label="被投保人身份证号码"
              name="被投保人身份证号码"
              rules={[{ required: true, message: '请修改被投保人身份证号码' }]}
            >
              <Input placeholder={"请修改被投保人身份证号码"} id={"被投保人身份证号码"}/>
            </Form.Item>


            <Form.Item
              label="交费方式和交费期间"
              name="交费方式和交费期间"
              rules={[{ required: true, message: '请修改交费方式和交费期间' }]}
            >
              <Input placeholder={"请修改交费方式和交费期间"} id={"交费方式和交费期间"}/>
            </Form.Item>

            <Form.Item
              label="保险期间"
              name="请输入保险期间"
              rules={[{ required: true, message: '请修改保险期间' }]}
            >
              <Input placeholder={"请修改保险期间"} id={"保险期间"}/>
            </Form.Item>



            <Form.Item
              label="保险费金额"
              name="保险费金额"
              rules={[{ required: true, message: '请修改保险费金额' }]}
            >
              <Input placeholder={"请修改保险费金额"} id={"保险费金额"}/>
            </Form.Item>


            <Form.Item
              label="基本保险金额"
              name="基本保险金额"
              rules={[{ required: true, message: '请修改基本保险金额' }]}
            >
              <Input placeholder={"请修改基本保险金额"} id={"基本保险金额"}/>
            </Form.Item>

          </Modal>


        </div>
    );
  }
}
export default orderChange;
