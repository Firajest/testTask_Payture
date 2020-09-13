/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

function Payments() {
  const allPayments = useSelector((state) => state.allPayments);
  console.log(allPayments);

  return (
    <>
      {allPayments && allPayments.map((payment) => {
        return (
          <li key={Math.random()}>
            {payment.order} | {payment.createdAt} | {payment.amount} rub. | {payment.cardNumber}
          </li>
        );
      })
      }
    </>
  );
}

export default Payments;
