import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 企业精英保障 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="企业精英保障"
          subTitle="类型：团险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为企业精英而设计，满足您高质量、国际化生活需求的医疗健康保障计划。</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;
            超越基本医疗保障范围，具有特色医疗保健项目，专业医疗服务网络遍布中国大陆及港澳台地区；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高额保障、区域灵活定制，可覆盖全球；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保障计划全面细致、灵活定制；预约担保零现金结算的尊贵体验；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;医院网络广泛覆盖、就医免现金直付担保服务；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随时随地的全球紧急救援、紧急医疗运送和送返；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;多语言环球完善客户服务体系、特殊疾病额外保障。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


          </h3></div>



          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 投保范围：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;被保险人所在单位可作为投保人，单位在职人员须75%以上投保，且符合投保条件的人数不低于5人。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 保险期限：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;自签发保险单的次日零时起至期满日二十四时止。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 投保金额：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险金额由投保人和本公司约定，并载明于合同的保险单或批注上。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </h3></div>


        </div>





      </div>
    );
  }
}
export default 企业精英保障;
