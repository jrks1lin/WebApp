/*
* 以后代码基本都写在这里
* //网页主要内容
* */
//引入React
import React, { useState } from 'react';
import { Row, Col, DatePicker, PageHeader } from 'antd';
import styles from './index.css'
import { Button, Icon } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';//布局导入
import { Modal } from 'antd';//对话框导入
import { Steps } from 'antd';//步骤条导入
import { Table, Radio, Divider } from 'antd';




const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;

class App extends React.Component{

  //对话框用
  state = { visible: false,
    selectedRowKeys: [], // Check here to configure the default column
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
//对话框结束



  render(){

    return(
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="欢迎使用蓝天保险后台订单管理系统"
        /></div>

{/*        <Button type={'danger'}>按钮</Button>
        <Icon type="caret-right" height={'300em'}/>
        <h1 style={{color:'blue'}}>hello antd</h1>
        <h1 className={styles.normal}>hello antd</h1>*/}
{/*        <div>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </div>*/}
{/*        <Row>
          <Col span={6}>
            <h1 className={styles.Title}>诗·词</h1>
          </Col>
          <Col span={6}>
            <h2>首页</h2>
          </Col>
          <Col span={6}>
            <h2>我的收藏</h2>
          </Col>
          <Col span={6}>
            <h2>您好，Admin</h2>
          </Col>
        </Row>*/}

{/*
        输入框
        <input onChange={e=>console.log(e.target.value)} style={{width:200}}/>

        日历选择
        <DatePicker/>
*/}

        {/*对话框*/}
       {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>


        步骤条
        type: navigation 箭头型（step与step之间）
              default    线型

        <Steps current={3} type={'default'}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>*/}

      </div>

    );

  }

}

//把类推出 也就是渲染
export default App

