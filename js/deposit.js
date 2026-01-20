const form = document.getElementById("depositForm");
const amountInput = document.getElementById("depositAmount");

//Envío de formulario de Depósito

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = Number(amountInput.value);
  if (amount <= 0) return;

  const balance = Number(localStorage.getItem("balance")) || 0;
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const newBalance = balance + amount;

// Actualización en transacciones

  transactions.push({
    date: new Date().toLocaleDateString(),
    description: "Depósito",
    amount: `+$${amount}`
  });

  localStorage.setItem("balance", newBalance);
  localStorage.setItem("transactions", JSON.stringify(transactions));

  alert("Depósito realizado con éxito");
  window.location.href = "transactions.html";
});
