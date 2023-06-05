import React from 'react';
import { Steps } from 'antd';


const { Step } = Steps;

class StepList extends React.Component{

  render() {
    return (
      <div>
        StepList

          <Steps current={this.props.current} style={{padding:"0 120px"}} >
            {this.props.steps.map(item=>(
              <Step title={item.title} key={item.title} />
            ))}
          </Steps>

        <div className="steps-content" >
          {this.props.steps[this.props.current].content}
        </div>

      </div>
    );
  }

}
export default StepList
