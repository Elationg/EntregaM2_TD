$(document).ready(function () {

  const $contactInput = $("#contactSelect");
  const $transferForm = $("#transferForm");
  const $contactForm = $("#contactForm");
  const $contactNameInput = $("#contactName");
  const $transferAmount = $("#transferAmount");

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  // Inicializar autocomplete con jquery
  function initAutocomplete() {
    $contactInput.autocomplete({
      source: contacts,
      minLength: 1
    });
  }

  initAutocomplete();

  // Transferencia
  $transferForm.on("submit", function (e) {
    e.preventDefault();

    const selectedContact = $contactInput.val();
    const amount = Number($transferAmount.val());
    let balance = Number(localStorage.getItem("balance")) || 0;
    // Validación de contacto
    if (!contacts.includes(selectedContact)) {
      alert("Debes seleccionar un contacto válido");
      return;
    }

    // Validación de saldo

    if (amount > balance) {
      alert("Saldo insuficiente");
      return;
    }

    balance -= amount;

    transactions.push({
      date: new Date().toLocaleDateString(),
      description: `Transferencia a ${selectedContact}`,
      amount: `-$${amount}`
    });

    localStorage.setItem("balance", balance);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    alert("Transferencia realizada");
    window.location.href = "transactions.html";
  });

  // Agregar nuevo contacto
  $contactForm.on("submit", function (e) {
    e.preventDefault();

    const newContact = $contactNameInput.val().trim();

    if (newContact === "") return;

    contacts.push(newContact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    $contactNameInput.val("");
    initAutocomplete();
  });

});
