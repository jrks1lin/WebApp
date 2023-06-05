import React from 'react';
import { Badge, Button, Descriptions, Divider, Empty, Input, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';
import { Form, Checkbox } from 'antd';

//表单数据
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 7 },
};
const tailLayout = {
  wrapperCol: { offset: 7, span: 7 },
};

//保险产品列表
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


//input状态
const { Search } = Input;

//下拉框状态
const { Option } = Select;

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

const newOrder = [
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

class orderHandle extends React.Component {
  //组件构造函数
  // 状态机
  constructor(props, context) {
    super(props, context);
    this.state = {
      display_con: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现
    }
  }

  onTypeChange=(a)=>{
    console.log("a",a)
    newOrder[0].保险类型=a;
  }

  onNameChange=(b)=>{
    console.log("b",b)
    newOrder[0].保险产品名称=b;
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
    let data_aim = new Date();
    let 日 = data_aim.getDate();
    let 月 = data_aim.getMonth()+1;
    let 年 = data_aim.getFullYear();
    let newDate = 年 + "-" + 月 +"-"+日;

    newOrder[0].被保险人=被投保人;
    newOrder[0].被保险人身份证号=被投保人身份证号码;
    newOrder[0].交费方式和交费期间=交费时间和交费期间;
    newOrder[0].保险期间=保险期间;
    newOrder[0].保险费=保险费;
    newOrder[0].基本保险金额=基本保险金额;
    newOrder[0].日期=newDate;
    newOrder[0].客户姓名=name;
    newOrder[0].身份证号码=id;
    newOrder[0].订单号=data.length+1;
    data[data.length] = newOrder[0];
    alert("保单提交成功！")
  }

  //隐藏3
  offVisible3 = () =>{
    let text = document.getElementById("客户姓名搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      if(text == data[i].客户姓名)
      {
        find_data[0] = data[i];
        flag = 1;
      }
      if(flag == 0){
        find_data[0] = empty[0];
      }
    }
    this.setState({display_con:'block'});

    console.log("身份证号码搜索");
    console.log("text的值：", text);
    console.log("客户姓名搜索");
    console.log("text的值：", text);
  }


  render() {
    return (
      <div>
        <div >{/*头部*/}
          <div className={styles.header2}>   <PageHeader
            className="site-page-header"
            title="保单办理"
            subTitle="Order Handle "
          />
            <br />
          </div>
        </div>

        <div className={styles.margin_Top}>
          <Search size="large" placeholder="根据客户姓名查找" enterButton="搜索"   id={"客户姓名搜索"} onSearch={this.offVisible3.bind()}/>
        </div>

        {/*表单块*/}
        <div className={styles.bg_white}>
          <div className={styles.form_left}><br/><br/></div>{/*空白块 用来调整布局*/}
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            /*onFinish={onFinish}
            onFinishFailed={onFinishFailed}*/
          >

            <Form.Item
              label="选择保单类型"
              name="选择保单类型"
              rules={[{ required: true, message: '请选择保单类型' }]}
            >
              <Select
                placeholder="请选择保单类型"
                onChange={this.onTypeChange.bind()}
                allowClear
              >
                <Option value="寿险">寿险</Option>
                <Option value="财险">财险</Option>
                <Option value="团险">团险</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="选择产品名称"
              name="选择产品名称"
              rules={[{ required: true, message: '请选择产品名称' }]}
            >
              <Select
                placeholder="请选择产品名称"
                onChange={this.onNameChange.bind()}
                allowClear

              >
                <Option value="蓝天无忧综合意外伤害保险">蓝天无忧综合意外伤害保险</Option>
                <Option value="蓝天优享意外保险">蓝天优享意外保险</Option>
                <Option value="蓝天任我行无忧意外保险">蓝天任我行无忧意外保险</Option>
                <Option value="财产一切险">财产一切险</Option>
                <Option value="长期健康保障">长期健康保障</Option>
                <Option value="企业精英保障">企业精英保障</Option>
                <Option value="现金综合险">现金综合险</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="客户姓名"
              name="客户姓名"
              rules={[{ required: true, message: '请输入客户姓名' }]}
            >
              <Input placeholder={'请输入客户姓名' } id={"newName"}/>
            </Form.Item>

            <Form.Item
              label="客户身份证号码"
              name="客户身份证号码"
              rules={[{ required: true, message: '请输入客户身份证号码' }]}
            >
              <Input placeholder={"请输入客户身份证号码"} id={"newID"}/>
            </Form.Item>

            <Form.Item
              label="请输入被投保人"
              name="请输入被投保人"
              rules={[{ required: true, message: '请输入被投保人' }]}
            >
              <Input placeholder={"请输入被投保人"} id={"被投保人"}/>
            </Form.Item>


            <Form.Item
              label="请输入被投保人身份证号码"
              name="请输入被投保人身份证号码"
              rules={[{ required: true, message: '请输入被投保人身份证号码' }]}
            >
              <Input placeholder={"请输入被投保人身份证号码"} id={"被投保人身份证号码"}/>
            </Form.Item>


            <Form.Item
              label="请输入交费方式和交费期间"
              name="请输入交费方式和交费期间"
              rules={[{ required: true, message: '请输入交费方式和交费期间' }]}
            >
              <Input placeholder={"请输入交费方式和交费期间"} id={"交费方式和交费期间"}/>
            </Form.Item>

            <Form.Item
              label="请输入保险期间"
              name="请输入保险期间"
              rules={[{ required: true, message: '请输入保险期间' }]}
            >
              <Input placeholder={"请输入保险期间"} id={"保险期间"}/>
            </Form.Item>



            <Form.Item
              label="请输入保险费金额"
              name="请输入保险费金额"
              rules={[{ required: true, message: '请输入保险费金额' }]}
            >
              <Input placeholder={"请输入保险费金额"} id={"保险费金额"}/>
            </Form.Item>


            <Form.Item
              label="请输入基本保险金额"
              name="请输入基本保险金额"
              rules={[{ required: true, message: '请输入基本保险金额' }]}
            >
              <Input placeholder={"请输入基本保险金额"} id={"基本保险金额"}/>
            </Form.Item>







            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" onClick={this.buttonSubmit.bind()}>
                提交信息
              </Button>
              <br/><br/>
            </Form.Item>
          </Form>
        </div>


        {/*display 隐藏元素*/}
        <div style={{display:this.state.display_con}} className={styles.findOrder} >
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
export default orderHandle;
