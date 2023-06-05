/*
* 以后代码基本都写在这里
* //网页主要内容
* */
//引入React
import React from 'react';
import styles from './index.css'
import { Button, Icon } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class PoemMain extends React.Component{

  render(){
    return(
      <div>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

      </div>

    );
  }

}

