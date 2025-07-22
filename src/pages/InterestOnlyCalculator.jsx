import React, { useState } from 'react';

const InterestOnlyCalculator = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.amount.value);
    const rate = parseFloat(e.target.rate.value) / 100 / 12;

    if (isNaN(amount) || isNaN(rate) || amount <= 0 || rate < 0) {
      alert('Enter valid numbers.');
      return;
    }

    const interestPayment = amount * rate;
    setResult(interestPayment.toFixed(2));
  };

  return (
    <div className="calculator-card">
      <h3>Interest-Only Loan Calculator</h3>
      <form onSubmit={handleSubmit}>
        <input name="amount" placeholder="Loan Amount" type="number" />
        <input name="rate" placeholder="Annual Interest Rate (%)" type="number" />
        <button type="submit">Calculate</button>
      </form>
      {result && <p>Monthly Interest Payment: ₹{result}</p>}
    </div>
  );
};

export default InterestOnlyCalculator;
