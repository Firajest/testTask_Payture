import { ADD_PAYMENT } from '../actionTypes';

const initialState = {
  // order: '',
  // createdAt: '',
  // amount: '',
  // cardNumber: '',
  allPayments: [],
};
function maskCard(string) {
  const firstPart = string.slice(0, 1);
  const lastPart = string.slice(-1);
  const mask = string.slice(1, string.length - 1);
  let middlePart = '';
  for (let i = 0; i < mask.length; i += 1) {
    middlePart += mask[i].replace(`${mask[i]}`, 'x');
  }
  return firstPart + middlePart + lastPart;
}
export default function Payments(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PAYMENT: {
      const dateOptions = {
        year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
      };
      const newPayment = {
        order: payload.order,
        createdAt: (new Date()).toLocaleTimeString('ru', dateOptions),
        amount: payload.amount,
        cardNumber: maskCard(payload.cardNumber),
      };
      let newAllPayments;
      if (state.allPayments !== undefined) {
        newAllPayments = [...state.allPayments, newPayment];
      } else {
        newAllPayments = [newPayment];
      }

      return {
        // newAllPayments,
        ...state,
        allPayments: newAllPayments,
      };
    }
    default:
      return state;
  }
}
