import { ADD_PAYMENT } from '../actionTypes';

// const initialState = [];
const initialState = {
  // order: '',
  // createdAt: '',
  // amount: '',
  // cardNumber: '',
  allPayments: [],
};

export default function UserProps(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_PAYMENT: {
      const newPayment = {
        order: payload.order,
        createdAt: (new Date()).toLocaleDateString(),
        amount: payload.amount,
        cardNumber: payload.cardNumber,
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
