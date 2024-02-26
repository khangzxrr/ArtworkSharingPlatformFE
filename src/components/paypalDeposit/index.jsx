

import React, { } from 'react';
import { Card, notification } from 'antd';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { PAYPAL_CONFIG } from 'utils/constants';
import { depositWallet, walletCapture } from 'services/walletService';

const Index = (props) => {

  return (
    <Card title="Deposit 100$ to wallet via paypal">
      <PayPalScriptProvider options={PAYPAL_CONFIG}>
        <PayPalButtons
          style={{
            shape: "rect",
            //color:'blue' change the default color of the buttons
            layout: "vertical", //default value. Can be changed to horizontal
          }}
          createOrder={async () => {
            try {
              const orderData = await depositWallet()

              console.log(orderData);

              if (orderData.id) {
                return orderData.id;
              } else {
                const errorDetail = orderData?.details?.[0];
                const errorMessage = errorDetail
                  ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
                  : JSON.stringify(orderData);

                throw new Error(errorMessage);
              }
            } catch (error) {
              console.error(error);
              notification.error({ message: 'paypal checkout', description: '`Could not initiate PayPal checkout, please try again'})
            }
          }}
          onApprove={async (data, actions) => {
            try {
              const orderData = await walletCapture(data.orderID)

              // Three cases to handle:
              //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              //   (2) Other non-recoverable errors -> Show a failure message
              //   (3) Successful transaction -> Show confirmation or thank you message

              const errorDetail = orderData?.details?.[0];

              if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
                // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
                return actions.restart();
              } else if (errorDetail) {
                // (2) Other non-recoverable errors -> Show a failure message
                // throw new Error(
                //   `${errorDetail.description} (${orderData.debug_id})`,
                // );
                console.log(errorDetail)
                notification.error({ message: 'paypal checkout', description: 'failed! please try again'})
              } else {
                // (3) Successful transaction -> Show confirmation or thank you message
                // Or go to another URL:  actions.redirect('thank_you.html');
                const transaction =
                  orderData.purchase_units[0].payments.captures[0];

                notification.info({ message: 'paypal checkout', description: 'checkout successfully! deposited 100$ to wallet'})
                
                props.reloadWallet()

                console.log(
                  "Capture result",
                  orderData,
                  JSON.stringify(orderData, null, 2),
                );
              }
            } catch (error) {
              console.error(error);
              notification.error({ message: 'paypal checkout', description: 'failed! please try again'})
            }
          }}
        />
      </PayPalScriptProvider>
      
    </Card>
  );
};

export default Index;
