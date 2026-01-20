// Obtiene el estado de la sesión
const isLoggedIn = localStorage.getItem("isLoggedIn");
const userName = localStorage.getItem("userName");

// Elementos de la barra de navegación
const navLogin = document.getElementById("nav-login");
const navRegister = document.getElementById("nav-register");
const navUser = document.getElementById("nav-user");
const userGreeting = document.getElementById("user-greeting");
const logoutBtn = document.getElementById("btn-logout");

// Links de sub-menu dinero
const linkTransactions = document.getElementById("link-transactions");
const linkSendMoney = document.getElementById("link-sendmoney");
const linkDeposit = document.getElementById("link-deposit");

// Usuario logueado
if (isLoggedIn === "true" && userName) {
  // Oculta login y registro de la barra de navegación
  navLogin.classList.add("d-none");
  navRegister.classList.add("d-none");

  // Muestra el bloque usuario
  navUser.classList.remove("d-none");

  // Muestra el saludo 
  userGreeting.innerText = `Hola, ${userName}`;

  // Activa los links ahora NO restringidos a "Dinero"
  linkTransactions.href = "/transactions.html";
  linkSendMoney.href = "/sendmoney.html";
  linkDeposit.href = "/deposit.html";
} else {

  // Usuario no logueado
  navLogin.classList.remove("d-none");
  navRegister.classList.remove("d-none");

  navUser.classList.add("d-none");
  logoutBtn.classList.add("d-none");

  linkTransactions.href = "/login.html";
  linkSendMoney.href = "/login.html";
  linkDeposit.href = "/login.html";
}

// Logout
logoutBtn?.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/index.html";
});