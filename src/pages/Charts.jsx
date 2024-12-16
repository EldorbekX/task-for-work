import React, { useContext } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { TransactionContext } from '../context/TransactionContext';


ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Charts = () => {
  const { transactions } = useContext(TransactionContext);


  const expenseCategories = transactions
    .filter((t) => t.type === 'expense')
    .reduce((categories, transaction) => {
      const { category, amount } = transaction;
      categories[category] = (categories[category] || 0) + parseFloat(amount);
      return categories;
    }, {});

  
  const incomeByMonth = Array(12).fill(0);
  const expenseByMonth = Array(12).fill(0);

  transactions.forEach((t) => {
    const month = new Date(t.date).getMonth();
    if (t.type === 'income') {
      incomeByMonth[month] += parseFloat(t.amount);
    } else if (t.type === 'expense') {
      expenseByMonth[month] += parseFloat(t.amount);
    }
  });

 
  const doughnutData = {
    labels: Object.keys(expenseCategories),
    datasets: [
      {
        data: Object.values(expenseCategories),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  
  const barData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ],
    datasets: [
      {
        label: 'Income',
        data: incomeByMonth,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenseByMonth,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h3 className="text-center my-4">Expenses by Category</h3>
      <div className="d-flex justify-content-center mb-4">
        <div style={{ width: '400px', height: '400px' }}>
          <Doughnut data={doughnutData} />
        </div>
      </div>

      <h3 className="text-center my-4">Income and Expenses by Month</h3>
      <div>
        <Bar data={barData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Charts;
