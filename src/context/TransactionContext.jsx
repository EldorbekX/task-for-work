


import React, { createContext, useState, useEffect } from 'react';

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [currencyRates, setCurrencyRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
    fetchCurrencyRates();
  }, []);


  const addTransaction = (transaction) => {
    setTransactions((prev) => {
      const updated = [...prev, transaction];
      localStorage.setItem('transactions', JSON.stringify(updated)); 
      return updated;
    });
  };


  const updateTransactions = (updatedTransactions) => {
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions)); 
    setTransactions(updatedTransactions);
  };

 
  const fetchCurrencyRates = async () => {
    try {
      const response = await fetch('https://v6.exchangerate-api.com/v6/ddfd6b0f97d94876d216ceb8/latest/USD');
      const data = await response.json();
      setCurrencyRates(data.conversion_rates);
    } catch (error) {
      console.error('Error fetching currency data:', error);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions: updateTransactions, 
        addTransaction,
        currencyRates,
        baseCurrency,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};



