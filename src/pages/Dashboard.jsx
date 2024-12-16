import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const Dashboard = () => {
  const { transactions, currencyRates, baseCurrency } = useContext(TransactionContext);

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const totalExpense = transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="mb-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-header">Total Income</div>
            <div className="card-body">
              <h5 className="card-title">
                {totalIncome.toFixed(2)} {baseCurrency}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <div className="card-header">Total Expense</div>
            <div className="card-body">
              <h5 className="card-title">
                {totalExpense.toFixed(2)} {baseCurrency}
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Current Balance</div>
            <div className="card-body">
              <h5 className="card-title">
                {balance.toFixed(2)} {baseCurrency}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
