const balanceEl = document.getElementById("currentBalance");
const tableBody = document.getElementById("transactionsTable");

const balance = Number(localStorage.getItem("balance")) || 0;
const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

balanceEl.innerText = `$${balance.toLocaleString()}`;

// Toma una lista de transacciones y las muestra en una tabla HTML "transactionsTable", agregando una fila por cada transacción.

transactions.slice().reverse().forEach(tx => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${tx.date}</td>
    <td>${tx.description}</td>
    <td>${tx.amount}</td>
  `;
  tableBody.appendChild(row);
});
