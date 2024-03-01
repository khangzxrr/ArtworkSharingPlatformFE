

import React, { } from 'react';
import { Steps } from 'antd';
import { FIRST_PAYMENT, REPORT, SECOND_PAYMENT } from 'models/RequestProgressTypes';


const Index = (props) => {

  console.log(props.requestProgresses)

  let currentTimeline = 0

  if (props.requestProgresses == undefined) {
    currentTimeline = 0
  }

  const existFirstPayment = props.requestProgresses.some(rp => rp.type === FIRST_PAYMENT)
  if (existFirstPayment) {
    currentTimeline += 1
  }



  const existReport = props.requestProgresses.some(rp => rp.type === REPORT)
  if (existReport) {
    currentTimeline += 1
  }

  const existSecondPayment = props.requestProgresses.some(rp => rp.type === SECOND_PAYMENT)
  if (existSecondPayment) {
    currentTimeline += 1
  }

  console.log(currentTimeline)


  const timeline = [
    {
      title: 'First payment',
      description: 'Pay 80% of choosed bid price'
    },
    {
      title: 'Report',
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
