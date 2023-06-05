
//入口文件---有点像导航栏
//重点：这里的布局不会因为路径切换而改变，这里写出的页面是永久显示的
import {Layout} from "antd";
import Sid from "@/components/Sid"
import MyHeader from "@/components/MyHeader";
import React from "react";
import styles from "@/components/style.css";
import { Input, Button, Select, Row, Col, Table } from 'antd';
import backGorund from '../assets/index';



const { Header, Sider, Content } = Layout;

//管理员账号密码数据
const admin_data = [
  {
    账号:'123',
    密码:'123',
},
  {
    账号:'admin',
    密码:'admin',
  },
]

//目前登录的管理员
const now_admin = [
  {
    账号:'',
    密码:'',
  },
]

class BasicLayout extends React.Component{

  constructor(props,context){
    super(props,context);
    this.state={
      display_login: 'block', //此状态机为display的取值  none表示隐藏，block表示呈现  控制登录页面
      display_register: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现  控制注册页面
      display_main: 'none', //此状态机为display的取值  none表示隐藏，block表示呈现  控制注册页面
    }
   /* this.handleClickbtn= this.handleClickbtn.bind(this);*/

    //当出现 Cannot read property 'state' of undefined  错误时 ， 需要手动绑定this
    this.login = this.login.bind(this);
  }

/*  handleClickbtn(){//路径到文件夹 自动取到index.js
    this.props.history.push("/main");
  }*/

/*
  componentWillMount() {
    console.log("测试children", this.children)
  }
*/

  login(){
/*    const 日期 = new Date().getDate();
    console.log("获取日期",日期);
    console.log("login函数启动！！！");*/

    let 账号 = document.getElementById("账号").value;
    let 密码 = document.getElementById("密码").value;
    let flag = 0;

    //提示管理员输入
    if (账号 == ''){
      alert("请输入账号")
    }
    if (密码 == ''){
      alert("请输入密码")
    }
    if(账号 != '' && 密码 != ''){
      //判断
      for (let i = 0; i < admin_data.length ; i++){
        if(账号==admin_data[i].账号 && 密码 == admin_data[i].密码){
          flag = 1;
          console.log(this.state.display_main);
          this.setState({display_login:'none'})
          this.setState({display_main: 'block'});
          alert("管理员登录成功！")
        }
      }

      if(flag == 0){
        alert("账号或密码错误！")
      }

    }


  }

  render() {
    return(
    <div>
      {/*登录页面*/}
      <div style={{display:this.state.display_login}} className={styles.bg}>
        <div  className={styles.login_form}>

          <div className={styles.login_form_contentTitle}>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={styles.login_Header}>蓝天保险订单后台管理系统</div>
            <br/>
            <br/>
            <br/>
            <br/>

            <div className={styles.login_form_content}>
              <Input style={{width:300}} placeholder={"请输入账号"} id={"账号"}></Input>
              <br/>
              <br/>
              <Input  style={{width:300}} placeholder={"请输入密码"} id={"密码"} ></Input>
              <br/>
              <br/>
              <br/>
              <Button style={{width:300}} type={'primary'} onClick={this.login.bind()}>登录</Button>
            </div>

          </div>

        </div>

      </div>



      {/*注册页面*/}
      <div>

      </div>


      {/*主页面*/}
      <div style={{display:this.state.display_main}}>
        {/*<Button onClick={this.handleClickbtn}></Button>*/}
        <Layout>
          <Sider width={256}  className={styles.sider}>
            <div className={styles.log}>
              <div className={styles.log_top}>蓝天保险后台管理</div>
              <div className={styles.log_btm}>by 谢林岐</div>
            </div>

            <div className={styles.font_family}>
              <Sid/>
            </div>
          </Sider>


          <Layout>
            <Header className={styles.header}>
              <MyHeader/>
            </Header>

            <Layout>
              {/*  内容上方一栏
                  <Header className={styles.header2}>
                    <MyBreadcrumb/><h2>标题2</h2>
                  </Header>*/}
              <Content style={{padding:20, margin:24, height:'100%'}}>
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </div>

    )
  }
}

export default BasicLayout;
