import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 长期健康保障 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="长期健康保障"
          subTitle="类型：团险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期健康保障计划包括终身重大疾病保险和长期护理保险，为员工长期的生活提供保障，提高生活质量。</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重大疾病保险金：被保险人初次罹患合同约定的三十五种重大疾病，按保单载明的保险金额给付重大疾病保险金；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身故保险金：被保险人在保险期间内身故，按照保险单约定的保险金额给付身故保险金；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长期护理保险金：规定年龄前，按基本保额的200%享有长期护理保障；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;老年护理保险金：达到规定年龄后，即可领取老年护理保险金。
          </h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保范围：身体健康，能正常劳作的在职员工；被保险人所在单位可作为投保人，单位在职人员须75%以上投保，且符合投保条件的人数不低于5人；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险期限：自签发保险单的次日零时起至期满日二十四时止；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保金额：保险金额由投保人和本公司约定，并载明于合同的保险单或批注上。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </h3></div>

        </div>





      </div>
    );
  }
}
export default 长期健康保障;
