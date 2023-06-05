import React from 'react';
import { Button, Divider, Empty, Input, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';
import { Modal  } from 'antd';
import { Cascader } from 'antd';  //下拉菜单

//下拉菜单选项
const options = [
  {
    value: '男',
    label: '男',

  },
  {
    value: '女',
    label: '女',
  },
];


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

  {
    title: '信息操作',
    dataIndex: '信息操作',
    width: 100,
  },


];

const data = [
  {
    客户姓名:"悠木璧",
    身份证号码: "410502197207240728",
    电话号码:"18916852498",
    性别:"女",
    保单操作:"",
  },
  {
    客户姓名:"艾德",
    身份证号码: "410502198201240525",
    电话号码:"13725496852",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"路目圆",
    身份证号码: "410502198202100356",
    电话号码:"15828465873",
    性别:"女",
    保单操作:"",
  },
  {
    客户姓名:"凯撒亮",
    身份证号码: "410502198203240518",
    电话号码:"15862051884",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"萧美焰",
    身份证号码: "410502199201140242",
    电话号码:"15813943582",
    性别:"女",
    保单操作:"",
  },
  {
    客户姓名:"李舜生",
    身份证号码: "410502199202240519",
    电话号码:"15868420518",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"周防尊",
    身份证号码: "410502199202280617",
    电话号码:"13725685249",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"王烨",
    身份证号码: "410502199210240497",
    电话号码:"15821357896",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"张三",
    身份证号码: "410503197002580121",
    电话号码:"13742682015",
    性别:"男",
    保单操作:"",
  },
  {
    客户姓名:"冯包包",
    身份证号码: "412501199808294034",
    电话号码:"15889647358",
    性别:"女",
    保单操作:"",
  },
];

const find_data = [
  {
    客户姓名:"",
    身份证号码: "",
    电话号码:"",
    性别:"",
    保单操作:"",
  },
];
const empty =[  {
  客户姓名:"无数据",
  身份证号码: "无数据",
  电话号码:"无数据",
  性别:"无数据",
  保单操作:"",
},];

const newData = [{
  客户姓名:"",
  身份证号码: "",
  电话号码:"",
  性别:"",
}]


//input状态
const { Search } = Input;

const onSearch = value => console.log(value);


class userChange extends React.Component {
  //组件构造函数
  // 状态机
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: false,
      display_con: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现
      display_Enmpty: 'block', //此状态机为display的取值  none表示隐藏，block表示呈现
    }
  }

  //隐藏
  offVisible = () =>{

    let text = document.getElementById("根据手机号搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      data[i].信息操作 = <div> <Button onClick={this.orderChange.bind()}>信息变更</Button> </div>;
      if(text == data[i].电话号码)
      {
        find_data[0] = data[i];
        flag = 1;
      }
    }
    if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' });
    } else {
      this.setState({ display_con: 'block', display_Empty: 'none' });
    }

    console.log("visible",this.state.visible);
/*    console.log("保单号搜索");
    console.log("text的值：", text);
    console.log("data数据样式",data)*/


  }

  //隐藏2
  offVisible2 = () =>{

    let text = document.getElementById("身份证号码搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      data[i].信息操作 = <div> <Button onClick={this.orderChange2.bind()}>信息变更</Button> </div>;
      if(text == data[i].身份证号码)
      {
        find_data[0] = data[i];
        flag = 1;
      }
    }
    if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' });
    } else {
      this.setState({ display_con: 'block', display_Empty: 'none' });
    }
/*
    console.log("身份证号码搜索");
    console.log("text的值：", text);*/
  }

  //隐藏3
  offVisible3 = () =>{
    let text = document.getElementById("客户姓名搜索").value;
    let i = 0;
    let flag = 0;
    for (i=0;i<data.length;i++){
      data[i].信息操作 = <div> <Button onClick={this.orderChange3.bind()}>信息变更</Button> </div>;
      if(text == data[i].客户姓名)
      {
        find_data[0] = data[i];
        flag = 1;
      }
    }
    if (flag == 0) {
      find_data[0] = empty[0];
      this.setState({ display_Empty: 'block', display_con: 'none' });
    } else {
      this.setState({ display_con: 'block', display_Empty: 'none' });
    }

/*    console.log("身份证号码搜索");
    console.log("text的值：", text);
    console.log("客户姓名搜索");
    console.log("text的值：", text);*/
  }

  //打开对话框 修改信息
  orderChange = () =>{
    console.log("visible改前",this.state.visible);
    this.setState({visible: true})
    console.log("visible改后",this.state.visible);
  }

  orderChange2 = () =>{
    console.log("visible改前",this.state.visible);
    this.setState({visible: true})
    console.log("visible改后",this.state.visible);
  }

  orderChange3 = () =>{
    console.log("visible改前",this.state.visible);
    this.setState({visible: true})
    console.log("visible改后",this.state.visible);
  }
  //对话框隐藏
  hideModal = () => {
    console.log("hide隐藏前",this.state.visible)
    this.setState({
      visible: false,
    });
  };
  hideModalOK= () => {
    console.log(find_data[0])
    let newName = document.getElementById("姓名").value;
    let newTel = document.getElementById("电话号码").value;
    let newId = document.getElementById("身份证号码").value;
    newData[0].客户姓名 = newName;
    newData[0].电话号码 = newTel;
    newData[0].身份证号码 = newId;
    let i = 0;
    console.log("newName:",newName);
    console.log("newTel:",newTel);
    console.log("newId:",newId);
    console.log("newGender:",newData[0].性别);
    for(i = 0; i<data.length ; i++){
      if(find_data[0].身份证号码==data[i].身份证号码){
        if(newName != ""){
        /*  console.log("wwwwwwww")*/
            data[i].客户姓名 = newName;
        }
        if(newTel != ""){

          data[i].电话号码 = newTel;
        }
        if(newId != ""){
          data[i].身份证号码 = newId;
        }
        if(newData[0].性别 != ""){
          data[i].性别 = newData[0].性别;
        }
      }
    }

    this.setState({
      visible: false,
    });
  };

  //下拉取值菜单测试(修改保险产品名)
  onChange_Gender(value) {
    console.log(value);
    if(value[0] != ""){
      newData[0].性别 = value[0];
    }
  }

  render() {
    return (
      <div>
        <div >{/*头部*/}
          <div className={styles.header2}>   <PageHeader
            className="site-page-header"
            title="客户信息变更"
            subTitle="Client Info Change "
          />
            <br />
            <div >
              <Search size="large" placeholder="根据手机号查找" enterButton="搜索"   id={"根据手机号搜索"} onSearch={this.offVisible.bind()}/>
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

        <div style={{display:this.state.display_con}} className={styles.findOrder}>{/*内容*/}
          <div className={styles.result}>
            <PageHeader
              className="site-page-header"
              title="查询结果"
              subTitle="Query results"
            />
          </div>
          <Table className={styles.allTable} columns={columns} dataSource={find_data} pagination={{ pageSize: 40 }} scroll={{ y: 400}} />
          <Modal
            title="保单信息修改"
            visible={this.state.visible}
            onOk={this.hideModalOK}
            onCancel={this.hideModal}
          >
            <p>修改客户姓名：<Input id={"姓名"} className={styles.width_200}></Input></p>
            <p>修改身份证号码：<Input id={"身份证号码"} className={styles.width_200}></Input></p>
            <p>修改电话号码：<Input id={"电话号码"} className={styles.width_200}></Input></p>
            <p className={styles.font_bold}><span>客户性别修改为     </span><Cascader className={styles.margin_left} options={options} onChange={this.onChange_Gender.bind()} placeholder="请选择" /></p>
          </Modal>
        </div>
      </div>
    );
  }
}
export default userChange;
