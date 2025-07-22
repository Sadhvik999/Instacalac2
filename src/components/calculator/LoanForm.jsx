import React from 'react';

const LoanForm = ({ onCalculate }) => {
  const [amount, setAmount] = React.useState('');
  const [rate, setRate] = React.useState('');
  const [years, setYears] = React.useState('');

  const handleSubmit = () => {
    onCalculate({ amount, rate, years });
  };

  return (
    <div>
      <h2>Loan Form</h2>
      <input placeholder="Loan Amount" value={amount} onChange={(e) => setAmount(e.target.value)} min={10000} type='number'/>
      <input placeholder="Interest Rate" value={rate} onChange={(e) => setRate(e.target.value)} min={1} type='number'/>
      <input placeholder="Loan Term (years)" value={years} onChange={(e) => setYears(e.target.value)} />
      <button onClick={handleSubmit} min={3} type='number'>Calculate</button>
    </div>
  );
};

export default LoanForm;
