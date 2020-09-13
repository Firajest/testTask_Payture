/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Payments from '../payment';
import './paymentList.css';

function PaymentList() {
  return (
    <ul>
      <li>№ заказа | дата операции | сумма | № карты</li>
      <Payments />
    </ul>
  );
}

export default PaymentList;
