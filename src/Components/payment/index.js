/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Payments() {
  const allPayments = useSelector((state) => state.allPayments);

  return (
    <>
      <Table hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>№ заказа</th>
            <th>Дата заказа</th>
            <th>Сумма заказа</th>
            <th>№ карты</th>
          </tr>
        </thead>
        <tbody>
          {allPayments && allPayments.map((payment, i) => (
            <tr key={Math.random()}>
              <th scope="row">{i + 1}</th>
              <td>{payment.order}</td>
              <td>{payment.createdAt}</td>
              <td>{payment.amount} руб.</td>
              <td>{payment.cardNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Payments;
