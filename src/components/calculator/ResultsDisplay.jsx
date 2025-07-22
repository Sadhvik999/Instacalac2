
const ResultsDisplay = ({ results }) => (
  <div>
    
    {results && (
      <>
      <h2>Results</h2>
        <p>Monthly Payment: ₹{results.monthly}</p>
        <p>Total Interest: ₹{results.interest}</p>
        <p>Total Payment: ₹{results.total}</p>
      </>
    )}
  </div>
);

export default ResultsDisplay;
