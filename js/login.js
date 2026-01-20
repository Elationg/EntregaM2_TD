const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "admin@piggywallet.com" && password === "admin1234") {
    // Guarda la sesión actual
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", "Admin");

    // Al desloguear, nos redirige a index.html
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
