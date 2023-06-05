import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';





//表单伪数据
const columns = [
  {
    title: '订单号',
    dataIndex: '订单号',
    width: 90,
  },
  {
    title: '身份证号码',
    dataIndex: '身份证号码',
    width: 200,
  },
  {
    title: '保险类型',
    dataIndex: '保险类型',
    width: 100,
  },

  {
    title: '保险产品名称',
    dataIndex: '保险产品名称',
    width: 300,
  },
  {
    title: '客户姓名',
    dataIndex: '客户姓名',
    width: 150,
  },
];

const datas = [
  {
    key: 1,
    客户姓名:"悠木璧",
    订单号: "1",
    身份证号码: "410502197207240728",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",
  },
  {
    key: 2,
    客户姓名:"艾德",
    订单号: "2",
    身份证号码: "410502198201240525",
    保险产品名称:"蓝天优享意外保险",
    保险类型:"寿险",
  },
  {
    key: 3,
    客户姓名:"路目圆",
    订单号: "3",
    身份证号码: "410502198202100356",
    保险产品名称:"蓝天任我行无忧意外保险",
    保险类型:"寿险",
  },
  {
    key: 4,
    客户姓名:"凯撒亮",
    订单号: "4",
    身份证号码: "410502198203240518",
    保险产品名称:"财产一切险",
    保险类型:"财险",
  },
  {
    key: 5,
    客户姓名:"萧美焰",
    订单号: "5",
    身份证号码: "410502199201140242",
    保险产品名称:"财产一切险",
    保险类型:"财险",
  },
  {
    key: 6,
    客户姓名:"李舜生",
    订单号: "6",
    身份证号码: "410502199202240519",
    保险产品名称:"现金综合险",
    保险类型:"财险",
  },
  {
    key: 7,
    客户姓名:"周防尊",
    订单号: "7",
    身份证号码: "410502199202280617",
    保险产品名称:"长期健康保障",
    保险类型:"团险",
  },
  {
    key: 8,
    客户姓名:"王烨",
    订单号: "8",
    身份证号码: "410502199210240497",
    保险产品名称:"长期健康保障",
    保险类型:"团险",
  },
  {
    key: 9,
    客户姓名:"张三",
    订单号: "9",
    身份证号码: "410503197002580121",
    保险产品名称:"企业精英保障",
    保险类型:"团险",
  },
  {
    key: 10,
    客户姓名:"冯包包",
    订单号: "10",
    身份证号码: "412501199808294034",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",
  },
  {
    key: 11,
    客户姓名:"张三",
    订单号: "11",
    身份证号码: "410503197002580121",
    保险产品名称:"蓝天无忧综合意外伤害保险",
    保险类型:"寿险",

  },
];



class All extends React.Component {

  //表单初始状态及功能处理
  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
    }
    /*this.change = this.change.bind(this);*/
    this.btn = this.btn.bind(this);
  }


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
//----------------------------------

  btn() {
/*    //原生ajax
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users');
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200){
        console.log("请求到的数据:",xhr.responseText)
      }
    }
    xhr.send();
    //---------------------------*/

    //fetch
    fetch('http://localhost:8081/find_All_Order').then(response =>{
        return response.json();
    })
      .then(data => {
        console.log("请求到的数据:",data)
      })


    //-------------------------------
/*    const url ="http://localhost:8081/find_All_Order"
    fetch(url).then(response => {
      return response.json();
    }).then(data =>{
      //得到数据
      console.log("请求到的数据:",data)
/!*      let i = 0;
      for (i = 0; i<data.length; i++){
        datas[i] = data[i];
      }*!/*/


      /*  $.ajax({
          url:"http://localhost:8081/find_All_Order",
          type:"GET",
          data:{//传入

          },
          dataType:'json',
          success:function (data) {


            if(data.code == "1000"){
              console.log("请求到的数据",data)
              alert("请求成功")
            }
          },

          error:function (err) {
            alert("登陆失败!")
          }
        })*/


  }

  render() {

    //数据处理

    //数据处理

    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="全部订单"
          subTitle="All orders"
        /></div>
        {/*<Button onClick={this.btn.bind()}>请求数据</Button>*/}
        <Table className={styles.allTable} columns={columns} dataSource={datas} pagination={{ pageSize: 40 }} scroll={{ y: 420}} />
      </div>
    );
  }
}
export default All;
