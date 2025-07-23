import React, { useState } from 'react';
import LoanForm from '../components/calculator/LoanForm';
import ResultsDisplay from '../components/calculator/ResultsDisplay';
import InterestOnlyCalculator from './InterestOnlyCalculator';
import './CalculatorPage.css';

const CalculatorPage = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ amount, rate, years }) => {
    const p = parseFloat(amount);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(years);

    if (isNaN(p) || p <= 0 || isNaN(r) || r < 0 || isNaN(n) || n <= 0) {
      alert('Please enter valid positive numbers for amount, rate, and years.');
      return;
    }

    const monthly = (p * r * Math.pow(1+r,n*12))/(Math.pow(1+r,n*12)-1)
    const total = monthly * n * 12 ;
    const interest = total - p;

    setResults({
      monthly: monthly.toFixed(2),
      total: total.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <div className="calculator-page">
      <h2>Loan Calculators</h2>
      <div className="calculator-section">
        <div className="calculator-card">
          <h3>Monthly Loan Calculator</h3>
          <LoanForm onCalculate={handleCalculate} />
          <ResultsDisplay results={results} />
        </div>

        <InterestOnlyCalculator />
      </div>
    </div>
  );
};

export default CalculatorPage;
