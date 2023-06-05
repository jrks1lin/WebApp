import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';

class 蓝天任我行无忧意外保险 extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2}>   <PageHeader
          className="site-page-header"
          title="蓝天任我行无忧意外保险"
          subTitle="类型：寿险"
        /></div>

        <div className={styles.detail_form}>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 产品特色"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10倍意外给付，尊享百万身价；8种重大灾害，保障范围广泛；7个法定假日，加倍关爱守护；10项意外伤残，轻度重度均赔；110%满期给付，无事增值领取。</h3>
          </div>

          <div className={styles.detail_form}><PageHeader
            className="site-page-header"
            title="| 适用人群"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18周岁至55周岁</h3>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 产品描述"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            由《太平百万行无忧两全保险》和《太平附加百万行无忧意外伤害保险》组成，是一款长期意外伤害保险计划，它涵盖对因各种意外而导致的身故保障、伤残保障。满期所交保费全部给付。</h3></div>

          <div className={styles.detail_form}>
            <PageHeader
              className="site-page-header"
              title="| 保障利益"/>
            <div>
              <h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、身故保险金：给付110%的所交保费。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、满期保险金：给付110%的所交保费。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、意外伤残保险金：比例给付附加险保额。若累计赔付达到保额，附加险终止，主险继续有效。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、意外身故保险金：按以下(1)至(4)项中最高一项给付
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）一般意外身故：给付1倍保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）私家车意外身故：第1年，2倍保额；第2年起至70周岁，10倍保额；70周岁后，2倍保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）公共交通意外身故：70周岁前，10倍保额；70周岁后，2倍保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）8种自然灾害意外身故：10倍保额。
              <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、节假日意外身故保额给付保险金：额外给付1倍保额。
            </h3>
            </div>
          </div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保示例"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;王先生，私家车主，30周岁，他对自己及家人的日常出行有较高的安全保障意识，经过比较，他选择投保了“太平百万行无忧意外保险计划”，保险金额10万，保险期间30年，选择10年交费，年交保费1670元（如选择月交方式，则每月缴纳150.3元）。王先生在保障期间内
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;将可获得如下利益：<br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、身故保障
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;身故给付110%的所交保费，交费期满后为18370元。<br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、意外身故保障
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一般意外身故给付：10万元。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;私家车驾乘意外身故给付：最高100万元。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公共交通意外身故给付：最高100万元。
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8种重大自然灾害意外身故给付：最高100万元。<br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、法定节假日意外身故保障
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若在法定节假日发生意外，更可在意外身故赔付基础上，额外获赔10万元。<br/>
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4、意外伤残保险
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因意外事故导致伤残，根据《人身保险伤残评定标准》确定伤残等级及给付比例，按合同的基本保额乘以该比例给付保险金，最高10万。
            <br/> <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5、满期保险金
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若保险满期时生存，可一次性领取期满保险金18370元。<br/>

          </h3></div>

          <div className={styles.detail_form}>   <PageHeader
            className="site-page-header"
            title="| 投保须知"
          /><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保年龄：18周岁至55周岁
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;投保金额：1万元的整数倍
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最低保额：5万元
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最高保额：18—50周岁50万；51-55周岁25万；学生/家庭主妇/退休人员12万</h3></div>

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
export default 蓝天任我行无忧意外保险;
