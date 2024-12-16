import React, { useState, useContext } from 'react';
import { TransactionContext } from '../context/TransactionContext';

const TransactionForm = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [formData, setFormData] = useState({
    amount: '',
    category: '',
    date: '',
    type: 'income',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...formData, id: Date.now() });
    setFormData({ amount: '', category: '', date: '', type: 'income', note: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="row">
        <div className="col">
          <input
            type="number"
            placeholder="Amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="col">
          <select name="type" value={formData.type} onChange={handleChange} className="form-control">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary btnAdd">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;



