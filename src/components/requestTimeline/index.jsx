

import React, { } from 'react';
import { Steps } from 'antd';


const Index = (props) => {

  const currentTimeline = props.requestProgresses ? props.requestProgresses.length : 0;

  const timeline = [
    {
      title: 'First payment',
      description: 'Pay 80% of choosed bid price'
    },
    {
      title: 'Report 1st',
      description: 'Creator report request process'
    },
    {
      title: 'Report 2nd',
      description: 'Creator report request process'
    },
    {
      title: 'Report 3rd',
      description: 'Creator report request process'
    },
    {
      title: 'Report 4th',
      description: 'Creator report request process'
    },
    {
      title: 'Second payment',
      description: 'Pay 20% of remain choosed bid price'
    },
  ]

  return (
    <Steps
      current={currentTimeline}
      items={timeline}
    />
  );
};

export default Index;
