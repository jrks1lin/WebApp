import React from "react";
import { Avatar,Divider } from 'antd';
import {msg,user_tx} from '../assets/index';
import styles from './style.css'

class MyHeader extends React.Component{
  render() {
    return(
      //admin图标那一栏
      <div className={styles.head}>
        <img src={msg} alt=""/>

        {/*分割线*/}
        <Divider type={'vertical'} style={ {width:2,height:25} }/>
        <Avatar style={{color:'#f56a00',backgroundColor:'#fde3cf'}} src={user_tx}/>
         admin
      </div>
    )
  }
}
export default MyHeader;
