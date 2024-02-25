

import React, { } from 'react';
import { Steps } from 'antd';


const Index = (props) => {

  const currentTimeline = props.requestProgresses ? props.requestProgresses.length : 0;

  const timeline = props.requestProgresses.map(rp => {

    if (rp.type === 'FIRST_PAYMENT') {
      return {
        title: 'First payment',
        subTitle: rp.date
      }
    }
    else if (rp.type === 'SECOND_PAYMENT') {
      return {
        title: 'Second payment',
        subTitle: rp.date
      }
    }
    else if (rp.type.contains('REPORT')) {
      return {
        title: 'Report',
        subTitle: rp.date
      }
    }

  })

  return (
    <Steps
      direction='vertical'
      current={currentTimeline}
      items={timeline}
    />
  );
};

export default Index;
