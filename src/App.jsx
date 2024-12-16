import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import Dashboard from './pages/Dashboard';
import TransactionForm from './pages/TransactionForm';
import TransactionList from './pages/TransactionList';
import CurrencyConverter from './pages/CurrencyConverter';
import Charts from './pages/Charts';

function App() {
  return (
    <TransactionProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Finance Tracker</h1>
        <Dashboard />
        <TransactionForm />
        <TransactionList />
        <CurrencyConverter />
        <Charts />
      </div>
    </TransactionProvider>
  );
}

export default App;
