/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPayment } from '../../redux/actionCreators';

function NewPaymentForm() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    order: '',
    amount: '',
    cardNumber: '',
  });
  const { order, amount, cardNumber } = inputs;

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.order.value, event.target.amount.value, event.target.cardNumber.value);
    
    dispatch(addPayment(event.target.order.value, event.target.amount.value, event.target.cardNumber.value));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="№ заказа" name="order" value={order} onChange={handleChange} />
      <input type="text" placeholder="Сумма заказа" name="amount" value={amount} onChange={handleChange} />
      <input type="text" placeholder="№ карты" name="cardNumber" value={cardNumber} onChange={handleChange} />
      <input type="submit" value="Добавить" />
    </form>
  );
}

export default NewPaymentForm;
