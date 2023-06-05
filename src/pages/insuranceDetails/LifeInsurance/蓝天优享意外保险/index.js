import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 蓝天无忧综合意外伤害保险 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="蓝天无忧综合意外伤害保险"
          subTitle="类型：寿险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身故、伤残全覆盖；就医住院全享有；假日额外有给付（仅限计划二、三）；三大计划随意选；最低每日约2.3元即可投保。</h3>
          </div>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 适用人群"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28日至60周岁</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            太平家无忧综合意外伤害保险是一款综合意外保障产品，提供3款不同的计划供客户灵活选择，保障全面，性价比高。该产品涵盖了意外医疗保险金、意外住院津贴保险金、意外伤残保险金、一般意外身故保险金、电梯意外身故保险金、私家车意外身故保险金、水陆公共交通意外身故保险金、航空意外身故保险金、重大自然灾害意外身故保险金、法定节假日意外身故保险金，满足客户不同的意外保障需求，为您的出行保驾护航。</h3></div>

          <div className={styles.detail_form}>
            <PageHeader
              className="site-page-header"
              title="| 保障利益"/>
            <div><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. 意外医疗保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外伤害事故之日起180日内因该事故经医院必要治疗，对实际发生的医疗费用给付意外医疗保险金。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ⅰ已通过基本医保、公费医疗或大病医疗补偿，对实际发生的医疗费用扣除补偿后的剩余部分按100%的比例给付。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ⅱ没有通过基本医保、公费医疗或大病医疗补偿，对实际发生的医疗费用按70%的比例给付。同一保单年度和30日延续期内累计给付的意外医疗保险金数额以该项责任基本保额为限。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.意外住院津贴保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外伤害事故之日起180日内因该事故必须住院治疗，根据实际住院日数给付意外住院津贴保险金：
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;住院津贴保险金=实际住院日数×本项责任的基本保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同一意外伤害事故的给付最高以30日为限；同一保单年度和30日延续期内累计所承担的住院给付日数，最高以90日为限。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.意外伤残保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外伤害事故之日起180日内因该事故伤残，按本项责任基本保额乘以给付比例给付意外伤残保险金。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.意外身故保险金
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;意外伤害事故之日起180日内因该事故导致身故，同时符合以下多种情况的，按最高一项给付；如果已给付过意外伤残保险金，扣除已给付的意外伤残保险金后的余额给付意外身故保险金。给付意外身故保险金后，产品终止。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;①一般意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;②电梯意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;③私家车意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;④水陆公共交通意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑤航空意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⑥重大自然灾害意外身故保险金：本项责任的基本保额
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法定节假日遭受意外伤害事故之日起180日内因该事故身故，除给付“意外身故保险金”之外，按本项责任的基本保额给付法定节假日意外身故保险金，产品终止。
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
            title="投保须知"
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
            title="投保指引"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话渠道销售
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网销售
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></div>
        </div>





      </div>
    );
  }
}
export default 蓝天无忧综合意外伤害保险;
