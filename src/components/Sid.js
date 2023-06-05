import React from "react";
import { Menu} from "antd";
import styles from './style.css';
import router from 'umi/router'
import  { data_resource_icon,  data_resource_icon_selected,
  data_source_icon, data_source_icon_selected, empty_img,
  equal_icon, login_bg_img,  pack_up_icon, unfold_icon,
  data_etl_icon, data_etl_icon_selected, data_market_icon,
  data_market_icon_selected, data_target_icon, data_target_icon_selected,
  data_label_icon, data_label_icon_selected, task_icon, task_icon_selected,
  interface_icon, interface_icon_selected, file_icon, file_icon_selected,
  system_icon,system_icon_selected,no_data_source_img, password_icon,
  popup_window_close_icon,user_icon} from '../assets/index'
import groupInsurance from '@/pages/orderData/groupInsurance';
import propertyInsurance from '@/pages/orderData/propertyInsurance';
import lifeInsurance from '@/pages/orderData/lifeInsurance';
const { SubMenu } = Menu;

class Sid extends React.Component{
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5', 'sub6', 'sub7','sub8', 'sub9', 'sub10','sub11'];

  state = {
    openKeys: ['sub1'],
    img_l:'sub1'
  };

  onOpenChange = openKeys => {
    console.log(openKeys)
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  onClickItem = (e)=>{
    console.log(e)
    router.push(e.key)
  }

  render() {
    let open_key
    if(this.state.openKeys.length===0){
      /*打开的按钮与当前相同时 什么都不做*/
    } else {
      /*取当前打开的按钮号码*/
      open_key = this.state.openKeys[0]
      console.log("open_key"+open_key)
    }


    return(
      <div style={{paddingTop:10}}>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          onClick={this.onClickItem}
          style={{ width: 256 }}
          theme={"dark"}
        >
          <SubMenu
            key="sub1"
            title={

              /*光标移动到哪里 哪里图标亮*/
              <span onMouseOver={ ()=>this.setState({img_l:"sub1"}) }
                     onMouseOut={ ()=>this.setState({img_l:null}) }
              >
                  <img src={open_key==="sub1"||this.state.img_l==="sub1"?data_resource_icon_selected:data_resource_icon} className={styles.img_l} alt=""/>
                <span>保险订单数据</span>
                  <img src={open_key==="sub1"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>
            }
          >
            {/* key = ' 路径 '    具体参考下面数据集市例子*/}
            <Menu.Item key="/orderData/All">全部订单</Menu.Item>
            <Menu.Item key="/orderData/lifeInsurance">人寿保险</Menu.Item>
            <Menu.Item key="/orderData/propertyInsurance">财产保险</Menu.Item>
            <Menu.Item key="/orderData/groupInsurance">团体保险</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub2"
            title={
              <span onMouseOver={ ()=>this.setState({img_l:"sub2"}) }
                    onMouseOut={ ()=>this.setState({img_l:null}) }
              >
                  <img src={open_key==="sub1"||this.state.img_l==="sub2"?data_source_icon_selected:data_source_icon} className={styles.img_l} alt=""/>
                <span>服务办理</span>
                  <img src={open_key==="sub2"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>

/*              <span>
                <img src={open_key==="sub2"?data_source_icon_selected:data_source_icon} className={styles.img_l} alt=""/>
              <span>服务办理</span>
                <img src={open_key==="sub2"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>*/
            }
          >
            <Menu.Item key="/service/orderFind">保单查询</Menu.Item>
            <Menu.Item key="/service/orderChange">保单变更</Menu.Item>
            <Menu.Item key="/service/orderDelete">保单删除</Menu.Item>
            <Menu.Item key="/service/orderHandle">保单办理</Menu.Item>
 {/*             嵌套SubMenu
              <SubMenu key="sub3" title="保单删除">
                <Menu.Item key="7">寿险</Menu.Item>
                <Menu.Item key="8">财险</Menu.Item>
              </SubMenu>*/}
          </SubMenu>

          <SubMenu
            key="sub4"
            title={

              <span onMouseOver={ ()=>this.setState({img_l:"sub4"}) }
                    onMouseOut={ ()=>this.setState({img_l:null}) }
              >
                  <img src={open_key==="sub4"||this.state.img_l==="sub4"?data_etl_icon_selected:data_etl_icon} className={styles.img_l} alt=""/>
                <span>用户管理</span>
                  <img src={open_key==="sub4"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>
/*              <span>
                <img src={open_key==="sub4"?data_etl_icon_selected:data_etl_icon} className={styles.img_l} alt=""/>
              <span>用户管理</span>
                 <img src={open_key==="sub4"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>*/
            }
          >
            <Menu.Item key="/userManagement/userFind">查询用户</Menu.Item>
            <Menu.Item key="/userManagement/userAdd">添加用户</Menu.Item>
            <Menu.Item key="/userManagement/userDelete">删除用户</Menu.Item>
            <Menu.Item key="/userManagement/userChange">修改用户信息</Menu.Item>
          </SubMenu>

          {/*<SubMenu
            key="sub5"
            title={
              <span>
                <img src={open_key==="sub5"?data_market_icon_selected:data_market_icon} className={styles.img_l} alt=""/>
              <span>数据集市</span>
                 <img src={open_key==="sub5"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>
            }
          >
            <Menu.Item key="/dataMarket/dataMarketManager">数据集市管理</Menu.Item>
            <Menu.Item key="/dataMarket/dataMonitor">数据集市监控</Menu.Item>

          </SubMenu>*/}

          <SubMenu
            key="sub6"
            title={
              <span onMouseOver={ ()=>this.setState({img_l:"sub6"}) }
                    onMouseOut={ ()=>this.setState({img_l:null}) }
              >
                  <img src={open_key==="sub6"||this.state.img_l==="sub6"?data_target_icon_selected:data_target_icon} className={styles.img_l} alt=""/>
                <span>保险业务详情</span>
                  <img src={open_key==="sub6"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>
/*              <span>
                 <img src={open_key==="sub6"?data_target_icon_selected:data_target_icon} className={styles.img_l} alt=""/>
              <span>保险业务详情</span>
                 <img src={open_key==="sub6"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>*/
            }
          >

            <SubMenu key="/insuranceDetails/LifeInsurance" title="人寿保险">
              <Menu.Item key="/insuranceDetails/LifeInsurance/蓝天任我行无忧意外保险">蓝天任我行无忧意外保险</Menu.Item>
              <Menu.Item key="/insuranceDetails/LifeInsurance/蓝天无忧综合意外伤害保险">蓝天无忧综合意外伤害保险</Menu.Item>
              <Menu.Item key="/insuranceDetails/LifeInsurance/蓝天优享意外保险">蓝天优享意外保险</Menu.Item>
            </SubMenu>

            <SubMenu key="/insuranceDetails/PropertyInsurance" title="财产保险">
              <Menu.Item key="/insuranceDetails/PropertyInsurance/现金综合险">现金综合险</Menu.Item>
              <Menu.Item key="/insuranceDetails/PropertyInsurance/财产一切险">财产一切险</Menu.Item>
            </SubMenu>

            <SubMenu key="/insuranceDetails/GroupInsurance" title="团体保险">
              <Menu.Item key="/insuranceDetails/GroupInsurance/企业精英保障">企业精英保障</Menu.Item>
              <Menu.Item key="/insuranceDetails/GroupInsurance/长期健康保障">长期健康保障</Menu.Item>
            </SubMenu>

{/*            嵌套SubMenu
            <SubMenu key="sub3" title="人寿保险">
              <Menu.Item key="7">寿险</Menu.Item>
              <Menu.Item key="8">财险</Menu.Item>
            </SubMenu>

            嵌套SubMenu
            <SubMenu key="sub3" title="财产保险">
              <Menu.Item key="7">寿险</Menu.Item>
              <Menu.Item key="8">财险</Menu.Item>
            </SubMenu>

            嵌套SubMenu
            <SubMenu key="sub3" title="团体保险">
              <Menu.Item key="7">寿险</Menu.Item>
              <Menu.Item key="8">财险</Menu.Item>
            </SubMenu>*/}

          </SubMenu>

          {/*<SubMenu 以下代码待定，可能根据项目进度或需求更改 使用快捷键ctrl+/  解除注释 */}
          {/*  key="sub7"*/}
          {/*  title={*/}
          {/*    <span>*/}
          {/*       <img src={open_key==="sub7"?data_label_icon_selected:data_label_icon} className={styles.img_l} alt=""/>*/}
          {/*    <span>数据标签管理</span>*/}
          {/*       <img src={open_key==="sub7"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>*/}
          {/*  </span>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
          {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
          {/*  <Menu.Item key="11">Option 11</Menu.Item>*/}
          {/*  <Menu.Item key="12">Option 12</Menu.Item>*/}
          {/*</SubMenu>*/}

          {/*<SubMenu*/}
          {/*  key="sub8"*/}
          {/*  title={*/}
          {/*    <span>*/}
          {/*       <img src={open_key==="sub8"?task_icon_selected:task_icon} className={styles.img_l} alt=""/>*/}
          {/*    <span>任务管理</span>*/}
          {/*       <img src={open_key==="sub8"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>*/}
          {/*  </span>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
          {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
          {/*  <Menu.Item key="11">Option 11</Menu.Item>*/}
          {/*  <Menu.Item key="12">Option 12</Menu.Item>*/}
          {/*</SubMenu>*/}

          {/*<SubMenu*/}
          {/*  key="sub9"*/}
          {/*  title={*/}
          {/*    <span>*/}
          {/*       <img src={open_key==="sub9"?interface_icon_selected:interface_icon} className={styles.img_l} alt=""/>*/}
          {/*    <span>接口管理</span>*/}
          {/*       <img src={open_key==="sub9"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>*/}
          {/*  </span>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
          {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
          {/*  <Menu.Item key="11">Option 11</Menu.Item>*/}
          {/*  <Menu.Item key="12">Option 12</Menu.Item>*/}
          {/*</SubMenu>*/}

          {/*<SubMenu*/}
          {/*  key="sub10"*/}
          {/*  title={*/}
          {/*    <span>*/}
          {/*       <img src={open_key==="sub10"?file_icon_selected:file_icon} className={styles.img_l} alt=""/>*/}
          {/*    <span>文件管理</span>*/}
          {/*       <img src={open_key==="sub10"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>*/}
          {/*  </span>*/}
          {/*  }*/}
          {/*>*/}
          {/*  <Menu.Item key="9">Option 9</Menu.Item>*/}
          {/*  <Menu.Item key="10">Option 10</Menu.Item>*/}
          {/*  <Menu.Item key="11">Option 11</Menu.Item>*/}
          {/*  <Menu.Item key="12">Option 12</Menu.Item>*/}
          {/*</SubMenu>*/}
          <SubMenu key="sub12"     title={
            <span onMouseOver={ ()=>this.setState({img_l:"sub5"}) }
                  onMouseOut={ ()=>this.setState({img_l:null}) }
            >
                  <img src={open_key==="sub5"||this.state.img_l==="sub5"?data_market_icon_selected:data_market_icon} className={styles.img_l} alt=""/>
                <span>数据统计</span>
                  <img src={open_key==="sub5"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>
/*            <span>
                <img src={open_key==="sub5"?data_market_icon_selected:data_market_icon} className={styles.img_l} alt=""/>
              <span>数据统计</span>
                 <img src={open_key==="sub5"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>*/
          }>
            <Menu.Item key="/DataShow/条形图数据展示">条形图数据展示</Menu.Item>
            <Menu.Item key="/DataShow/饼状图数据展示">饼状图数据展示</Menu.Item>
            <Menu.Item key="/DataShow/折线图数据展示">折线图数据展示</Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub11"
            title={
              <span onMouseOver={ ()=>this.setState({img_l:"sub11"}) }
                    onMouseOut={ ()=>this.setState({img_l:null}) }
              >
                  <img src={open_key==="sub11"||this.state.img_l==="sub11"?system_icon_selected:system_icon} className={styles.img_l} alt=""/>
                <span>系统管理</span>
                  <img src={open_key==="sub11"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
              </span>
/*              <span>
                 <img src={open_key==="sub11"?system_icon_selected:system_icon} className={styles.img_l} alt=""/>
              <span>系统管理</span>
                 <img src={open_key==="sub11"?pack_up_icon:unfold_icon} className={styles.img_r}  alt=""/>
            </span>*/
            }
          >
            <Menu.Item key="/systemManagement/currentVersion">系统当前版本</Menu.Item>
            <Menu.Item key="/systemManagement/toBeDeveloped">待开发功能...</Menu.Item>

          {/* 一定注意路径以 / 开头代表pages根目录 */}
          </SubMenu>


        </Menu>
      </div>
    )
  }
}


export default Sid;
