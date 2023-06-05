import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 现金综合险 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="现金综合险"
          subTitle="类型：财险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;承保企业存放于营业处所以及运送途中的现金因自然灾害或意外事故导致的损失。</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            现金保险面向依法设立且财务制度健全的国家机关、企业事业单位及社会团体而设计，承保被保险人所有的、或替他人保管的、或与他人共有的现金、政府债券、支票、现金银行汇票和邮政汇票等保险标的，由于火灾、爆炸、洪水等灾害和在被保险人雇员前往银行送款或自银行提款回程中、或存放在金库、保险箱（柜）内时、或在营业过程中遭受盗窃或抢劫而造成的损失。</h3></div>

          <div className={styles.detail_form}>
            <PageHeader
              className="site-page-header"
              title="| 保障利益"/>
            <div><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现金综合保险承保在营业过程中、运输途中或库存状态的现金因火灾爆炸、雷电、洪水、盗窃抢劫等事故造成的损失。</h3></div>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保示例"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;例：xx银行xx支行，投保现金险方案如下：

            总投保现金限额800万，其中金库现金600万，营业处所现金100万，运输途中现金100万，费率1%，保费8000元，每次事故绝对免赔1000元。（该例收费标准仅供参考，实际收费标准以企业具体风险状况评估结果为准）</h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1．投保前，请您认真阅读我司条款内容，对于保险人就保险标的或者被保险人的有关情况提出询问的，请您如实告知，并如实填写投保单；<br/>&nbsp;&nbsp;&nbsp;&nbsp;

            2．本保险所指现金指由您所拥有或负责保管的现金、政府债券、支票、现金银行汇票、邮政汇票、金块、银块。</h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保指引"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1．请分项列明存放在营业场所内及运输途中现金金额；

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2．如投保企业（包括押运公司）现金地址不只一处，应提供各地址清单及每一地址对应投保项目的保额或赔偿限额的明细；

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3．如需投保运输途中的现金，请提供运送路线及运送区域范围（运送区域范围应在投保单中注明），运送车辆的车牌号、发动机号及车架号。

            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></div>

        </div>





      </div>
    );
  }
}
export default 现金综合险;
