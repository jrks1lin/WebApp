import React from 'react';
import { Button, Divider, Input, Layout, Pagination, Select, Table } from 'antd';
import styles from '@/components/style.css';
import { PageHeader } from 'antd';


class currentVersion extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header2} >    <PageHeader
          className="site-page-header"
          title="当前版本1.0---by 谢林岐"
          subTitle="Vision 1.0 "
        /></div></div>
    );
  }
}
export default currentVersion;
