import React, { useContext, useState } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TransactionList = () => {
  const { transactions, setTransactions } = useContext(TransactionContext);
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});


  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
  };


  const handleEdit = (transaction) => {
    setEditId(transaction.id);
    setEditForm(transaction);
  };


  const saveEdit = () => {
    const updatedTransactions = transactions.map((t) =>
      t.id === editId ? { ...t, ...editForm } : t
    );
    setTransactions(updatedTransactions);
    setEditId(null);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const sortedTransactions = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div>
      <h3>Transaction List</h3>
      <ul className="list-group">
        {sortedTransactions.map((t) => (
          <li key={t.id} className="list-group-item">
            {editId === t.id ? (
              <div>
                <input
                  type="number"
                  name="amount"
                  value={editForm.amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  name="category"
                  value={editForm.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="form-control mb-2"
                />
                <input
                  type="date"
                  name="date"
                  value={editForm.date}
                  onChange={handleChange}
                  className="form-control mb-2"
                />
                <select
                  name="type"
                  value={editForm.type}
                  onChange={handleChange}
                  className="form-control mb-2"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
                <button className="btn btn-success me-2" onClick={saveEdit}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => setEditId(null)}>
                  Cancel
                </button>
              </div>
            ) : (

              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong>{t.category}</strong>: {t.amount} ({t.type}) - {t.date}
                </span>
                <div>
                  <div className="buttons-container">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleEdit(t)}
                    >
                      <EditOutlined />
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(t.id)}
                    >
                      <DeleteOutlined />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
