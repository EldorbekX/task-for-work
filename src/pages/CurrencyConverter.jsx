import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const CurrencyConverter = () => {
  const { currencyRates, baseCurrency } = useContext(TransactionContext);
  const [amount, setAmount] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('EUR');

 
  if (!currencyRates || Object.keys(currencyRates).length === 0) {
    return <p>Loading currency rates...</p>;
  }

  const convertedAmount = amount * (currencyRates[targetCurrency] || 1);

  return (
    <div>
      <h3>Currency Converter</h3>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-control mb-2"
      />
      <select
        value={targetCurrency}
        onChange={(e) => setTargetCurrency(e.target.value)}
        className="form-control mb-2"
      >
        {Object.keys(currencyRates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <p>
        {amount} {baseCurrency} = {convertedAmount.toFixed(2)} {targetCurrency}
      </p>
    </div>
  );
};

export default CurrencyConverter;
