import React from 'react';
import { Modal } from 'antd';


class DialogBox extends React.Component{

  render() {
    return (
      <div>
        <Modal
          title={this.props.title||"新建数据集市"}
          visible={this.props.visible}
          /*箭头函数 （）=> xxx   xxx为返回值，同时也是函数语句 */
          onCancel={()=>this.props.onCancel()}
          footer={null}
          width="726px"
          height='748px'
        >

          {this.props.con}

        </Modal>
      </div>
    );
  }

}
export default DialogBox;
