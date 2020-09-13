/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PaymentList from './Components/paymentList';
import NewPaymentForm from './Components/newPaymentForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewPaymentForm />
      </header>
      <div className="ListContainer">
        <PaymentList />
      </div>
      
    </div>
  );
}

export default App;
