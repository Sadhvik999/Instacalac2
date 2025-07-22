import React, { useState } from 'react';

const EarlyPayoffCalculator = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const balance = parseFloat(e.target.balance.value);
    const rate = parseFloat(e.target.rate.value) / 100 / 12;
    const extra = parseFloat(e.target.extra.value);

    if (isNaN(balance) || isNaN(rate) || isNaN(extra) || balance <= 0 || rate < 0 || extra <= 0) {
      alert('Please enter valid numbers.');
      return;
    }

    let months = 0;
    let remaining = balance;
    while (remaining > 0 && months < 1000) {
      const interest = remaining * rate;
      remaining = remaining + interest - extra;
      months++;
    }

    setResult(months);
  };

  return (
    <div className="calculator-card">
      <h3>Early Payoff Calculator</h3>
      <form onSubmit={handleSubmit}>
        <input name="balance" placeholder="Loan Balance" type="number" />
        <input name="rate" placeholder="Annual Interest Rate (%)" type="number" />
        <input name="extra" placeholder="Monthly Extra Payment" type="number" />
        <button type="submit">Calculate</button>
      </form>
      {result && <p>You can pay off the loan in approximately {result} months.</p>}
    </div>
  );
};

export default EarlyPayoffCalculator;
