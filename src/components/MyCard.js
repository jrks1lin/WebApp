import React from 'react';
import { Card } from 'antd';


class MyCard extends React.Component{

  render() {
    return (
      <div>
        <div className="site-card-border-less-wrapper">
          <Card title={this.props.title} bordered={false} >
            {this.props.con}
          </Card>
        </div>
      </div>
    );
  }

}

export default MyCard;
