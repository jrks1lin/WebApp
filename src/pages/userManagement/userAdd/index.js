import React from 'react';
import { Button, Divider, Input, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';
import { Form, Checkbox } from 'antd';

//表单标题伪数据
const columns = [
  {
    title: '客户姓名',
    dataIndex: '客户姓名',
    width: 100,
  },
  {
    title: '身份证号码',
    dataIndex: '身份证号码',
    width: 200,
  },
  {
    title: '电话号码',
    dataIndex: '电话号码',
    width: 100,
  },

  {
    title: '性别',
    dataIndex: '性别',
    width: 100,
  },

];

const data = [
  {
    客户姓名:"悠木璧",
    身份证号码: "410502197207240728",
    电话号码:"18916852498",
    性别:"女",
  },
  {
    客户姓名:"艾德",
    身份证号码: "410502198201240525",
    电话号码:"13725496852",
    性别:"男",
  },
  {
    客户姓名:"路目圆",
    身份证号码: "410502198202100356",
    电话号码:"15828465873",
    性别:"女",
  },
  {
    客户姓名:"凯撒亮",
    身份证号码: "410502198203240518",
    电话号码:"15862051884",
    性别:"男",
  },
  {
    客户姓名:"萧美焰",
    身份证号码: "410502199201140242",
    电话号码:"15813943582",
    性别:"女",
  },
  {
    客户姓名:"李舜生",
    身份证号码: "410502199202240519",
    电话号码:"15868420518",
    性别:"男",
  },
  {
    客户姓名:"周防尊",
    身份证号码: "410502199202280617",
    电话号码:"13725685249",
    性别:"男",
  },
  {
    客户姓名:"王烨",
    身份证号码: "410502199210240497",
    电话号码:"15821357896",
    性别:"男",
  },
  {
    客户姓名:"张三",
    身份证号码: "410503197002580121",
    电话号码:"13742682015",
    性别:"男",
  },
  {
    客户姓名:"冯包包",
    身份证号码: "412501199808294034",
    电话号码:"15889647358",
    性别:"女",
  },
];

const find_data = [
  {
    客户姓名:"",
    身份证号码: "",
    电话号码:"",
    性别:"",
  },
];
const empty =[  {
  客户姓名:"无数据",
  身份证号码: "无数据",
  电话号码:"无数据",
  性别:"无数据",
},];

const newOrder=[
  {
    客户姓名:"无数据",
    身份证号码: "无数据",
    电话号码:"无数据",
    性别:"无数据",
  }
]

//input状态
const { Search } = Input;

//下拉框状态
const { Option } = Select;

//表单数据
const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 7 },
};
const tailLayout = {
  wrapperCol: { offset: 7, span: 7 },
};


class userAdd extends React.Component {
  //组件构造函数
  // 状态机
  constructor(props, context) {
    super(props, context);
    this.state = {
      display_con: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现
    }
  }

  changeGender=(a)=>{
    console.log("a",a)
    newOrder[0].性别=a;
  }

  //提交信息
  buttonSubmit=()=>{
    console.log("提交按钮")
    let name = document.getElementById("newName").value;
    let tel = document.getElementById("newTel").value;
    let id = document.getElementById("newID").value;
    newOrder[0].客户姓名=name;
    newOrder[0].身份证号码=id;
    newOrder[0].电话号码=tel;
    data[data.length] = newOrder[0];
    console.log("newClient",newOrder[0]);
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
            title="新增客户"
            subTitle="New Client "
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
              label="客户电话号码"
              name="客户电话号码"
              rules={[{ required: true, message: '请输入客户电话号码' }]}
            >
              <Input placeholder={"请输入客户电话号码"} id={"newTel"}/>
            </Form.Item>

            <Form.Item
              label="选择性别"
              name="选择性别"
              rules={[{ required: true, message: '请选择性别' }]}
            >
              <Select
                placeholder="请选择性别"
                onChange={this.changeGender.bind()}
                allowClear
              >
                <Option value="男">男</Option>
                <Option value="女">女</Option>
              </Select>
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
        <div style={{display:this.state.display_con}} className={styles.margin_Top}>{/*内容*/}
          <div className={styles.result}>
            <PageHeader
              className="site-page-header"
              title="查询结果"
              subTitle="Query results"
            />
          </div>
          <Table className={styles.allTable} columns={columns} dataSource={find_data} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />
        </div>
      </div>
    );
  }
}
export default userAdd;
