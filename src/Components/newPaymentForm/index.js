/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
    // eslint-disable-next-line max-len
    dispatch(addPayment(event.target.order.value, event.target.amount.value, event.target.cardNumber.value));
  }

  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="order" className="mr-sm-2">№ заказа</Label>
        <Input type="text" name="order" id="order" placeholder="№ заказа" value={order} onChange={handleChange} />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="amount" className="mr-sm-2">Сумма заказа</Label>
        <Input type="text" name="amount" id="amount" placeholder="Сумма заказа" value={amount} onChange={handleChange} />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="cardNumber" className="mr-sm-2">Сумма заказа</Label>
        <Input type="text" name="cardNumber" id="cardNumber" placeholder="№ карты" value={cardNumber} onChange={handleChange} pattern="\d{16}"/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

// <form onSubmit={handleSubmit}>
//   <input type="text" placeholder="№ заказа" name="order" value={order} onChange={handleChange} required />
//   <input type="text" placeholder="Сумма заказа" name="amount" value={amount} onChange={handleChange} required />
//   <input type="text" placeholder="№ карты" name="cardNumber" value={cardNumber} onChange={handleChange} pattern="\d{16}" />
//   <input type="submit" value="Добавить" />
// </form>
export default NewPaymentForm;
