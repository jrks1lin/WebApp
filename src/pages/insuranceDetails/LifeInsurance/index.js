import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class LifeInsurance extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2} key="/PropertyInsurance">   <PageHeader
          className="site-page-header"
          title= "财产一切险"
          subTitle="类型：财产保险"
        /></div>

        <div className={styles.detail_form}>
          <div ><PageHeader
            className="site-page-header"
            title="产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;财产一切险可涵盖基本险和综合险的所有保险责任，并能提供更全面的保障，大大提高企业抗风险能力，为其生产、经营的正常进行提供保证。</h3>
          </div>

          <div >   <PageHeader
            className="site-page-header"
            title="产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            该产品适用于所有机关团体，企事业单位，可全面保障客户由于自然灾害和意外事故导致的财产损失。条款表述采用“一切”加“除外”的形式，即除了保险合同责任免除范围列明的风险和损失之外，其他一切由于自然灾害和意外事故造成的财产损失保险人都负责赔偿。</h3></div>

          <div >
            <PageHeader
              className="site-page-header"
              title="保障利益"/>
            <div><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;《财产一切险》采用列明责任免除的方式，承保除责任免除以外的任何自然灾害和意外事故造成的财产损失。</h3></div>
          </div>

          <div >   <PageHeader
            className="site-page-header"
            title="投保示例"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例：一生产金属制品的工厂，建筑物800万，机器设备200万，存货200万，现投保财产一切险，存货附加盗窃、抢劫条款，主险费率0.8%，附加险费率1%，保费合计11600元，另绝对免赔设为每次事故1000元或损失金额的10%，两者以高者为准。（该例收费标准仅供参考，实际收费标准以企业具体风险状况评估结果为准）</h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1．投保前，请您认真阅读我司条款内容；<br/>&nbsp;&nbsp;&nbsp;&nbsp;

            2．对于保险人就保险标的或者被保险人的有关情况提出询问的，请您如实告知，并如实填写投保单。</h3></div>

          <div >   <PageHeader
            className="site-page-header"
            title="投保指引"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1．投保需提供营业执照、组织机构代码证、消防验收合格证明等能基本资料；

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2．可投保财产包括建筑物、机器设备、存货等归您所有或由您负责经营保管或其他具有法律上承认的经济利益的所有财产；

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3．请根据您所投保的财产，提供相应的资产负债表或财产清单；

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4．如我司主险条款未能满足您的保险需求，可扩展相应的附加条款。</h3></div>

        </div>






      </div>
    );
  }
}
export default LifeInsurance;
