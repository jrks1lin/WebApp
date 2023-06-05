import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 蓝天优享意外保险 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="蓝天优享意外保险"
          subTitle="类型：寿险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保障全，额度高；全方位意外保障，最高3倍保额；意外伤残累积赔；领取保费更安心。</h3>
          </div>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 适用人群"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28日至55周岁</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            优享太平保险产品计划由《太平优享太平两全保险》和《太平附加优享太平意外伤害保险》组成，是一款满期领取型的长期意外伤害保障计划，它涵盖对因各种意外而导致的身故保障、意外伤残保障及住院津贴保障，生存至满期更领取约140%的已交保费。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.身故保险金
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人未满18周岁，我们按主附险月交保费*12*保单年度数和交费年期数取小给付身故保险金，本保障计划终止；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人年满18周岁，我们按已交保险费的140%*主附险月交保费*12*保单年度数和交费年期数取小给付身故保险金，本保障计划终止。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.满期生存金
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人在合同期满日零时仍然生存，则按140%*主附险月交保费*12*交费年期数给付，本保障计划终止。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.意外伤残保险金
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人遭遇意外伤害事故，且自该事故发生之日起180天内因该事故导致伤残，我们将按照伤残比例赔付，最高可累积赔付至保额。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.意外身故保险金（若同时满足以下多项，仅给付最高一项）
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）一般意外身故：1倍保额
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）公交意外身故：18周岁前1倍基本保额，18周岁后3倍基本保额
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）私家车意外身故：18周岁前1倍基本保额，18周岁后3倍基本保额
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.意外住院津贴
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按该项基本保额*实际住院天数给付，同一意外事故最多给付90天，每个保单年度最多给付180天，保险期间内累计给付1000天。



          </h3></div>

          <div className={styles.detail_form}>
            <PageHeader
              className="site-page-header"
              title="| 保障利益"/>
            <div><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.身故保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人未满18周岁，我们按主附险月交保费*12*保单年度数和交费年期数取小给付身故保险金，本保障计划终止；
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人年满18周岁，我们按140%*主附险月交保费*12*保单年度数和交费年期数取小给付身故保险金，本保障计划终止。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.满期生存金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人在合同期满日零时仍然生存，则按140%*主附险月交保费*12*交费年期数给付，本保障计划终止。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.意外伤残保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果被保险人遭遇意外伤害事故，且自该事故发生之日起180天内因该事故导致伤残，我们将按照伤残比例赔付，最高可累积赔付至附加合同的基本保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.意外身故保险金（若同时满足以下多项，仅给付最高一项）
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）一般意外身故：1倍基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）公交意外身故：18周岁前 1倍基本保额，18周岁后 3倍基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3）私家车意外身故：18周岁前 1倍基本保额，18周岁后 3倍基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.意外住院津贴
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按该项基本保额*实际住院天数给付，同一意外事故最多给付90天，每个保单年度最多给付180天，保险期间内累计给付1000天。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.主险身故保险金和附加险意外身故保险金可同时给付，但满期保险金不可同时兼得。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.附加险意外身故保险金需扣除已给付的意外伤残保险金。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.若意外伤残累计赔付达到附加合同的基本保额，附加险终止，主险继续有效。

            </h3></div>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保示例"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小王二十岁，决定投保太平家无忧计划二，首年费率2100元：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小王享有的保障有：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般意外身故保险金：30万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电梯意外身故保险金：50万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;私家车意外身故保险金：50万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水陆公共交通意外身故保险金：60万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;航空意外身故保险金：150万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重大自然灾害意外身故保险金：60万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外医疗保险金：最高1万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外住院津贴保险金：100元/天，累计最高90天；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外伤残保险金：最高30万；
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.同时符合意外身故多种情况的，按最高一项给付；如果已给付过意外伤残保险金，扣除已给付的意外伤残保险金后的余额给付意外身故保险金。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.本产品适用“补偿原则”，仅对实际医疗费用扣除补偿后的剩余部分承担给付责任。

          </h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保年龄：28天至60周岁，续保可至70周岁
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保年龄：28天至60周岁，续保可至70周岁
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险期间：1年
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保额规则：
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1）同一被保险人只能投保其中1个计划，且限投1份
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2）未成年人、成年学生、退休、农民、下岗人员、家庭主妇、医务人员、保险外勤人员、56周岁（含）以上者只能投保计划一
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;残疾人和孕妇拒保
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：本产品为非保证续保，如被保险人超过70周岁或统一停售，我们将不再接受续保。

          </h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保指引"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话渠道销售
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网销售
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></div>
        </div>





      </div>
    );
  }
}
export default 蓝天优享意外保险;
