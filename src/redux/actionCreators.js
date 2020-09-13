import { ADD_PAYMENT } from './actionTypes'

export const addPayment = (order, amount, cardNumber) => ({ type: ADD_PAYMENT, payload: { order, amount, cardNumber } });
