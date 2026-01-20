// Lista de Paises

const countries = [
  { code: "CL", name: "Chile" },
  { code: "VE", name: "Venezuela" },
  { code: "PE", name: "Perú" },

  { code: "AR", name: "Argentina" },
  { code: "AF", name: "Afganistán" },
  { code: "AL", name: "Albania" },
  { code: "DZ", name: "Argelia" },
  { code: "AS", name: "Samoa Americana" },
  { code: "AD", name: "Andorra" },
  { code: "AO", name: "Angola" },
  { code: "AI", name: "Anguila" },
  { code: "AG", name: "Antigua y Barbuda" },
  { code: "AU", name: "Australia" },
  { code: "AT", name: "Austria" },
  { code: "BS", name: "Bahamas" },
  { code: "BH", name: "Baréin" },
  { code: "BD", name: "Bangladés" },
  { code: "BB", name: "Barbados" },
  { code: "BY", name: "Bielorrusia" },
  { code: "BE", name: "Bélgica" },
  { code: "BZ", name: "Belice" },
  { code: "BJ", name: "Benín" },
  { code: "BM", name: "Bermudas" },
  { code: "BT", name: "Bután" },
  { code: "BO", name: "Bolivia" },
  { code: "BA", name: "Bosnia y Herzegovina" },
  { code: "BW", name: "Botsuana" },
  { code: "BR", name: "Brasil" },
  { code: "BN", name: "Brunéi" },
  { code: "BG", name: "Bulgaria" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Camboya" },
  { code: "CM", name: "Camerún" },
  { code: "CA", name: "Canadá" },
  { code: "CV", name: "Cabo Verde" },
  { code: "KY", name: "Islas Caimán" },
  { code: "CF", name: "República Centroafricana" },
  { code: "TD", name: "Chad" },
  { code: "CN", name: "China" },
  { code: "CO", name: "Colombia" },
  { code: "CR", name: "Costa Rica" },
  { code: "HR", name: "Croacia" },
  { code: "CU", name: "Cuba" },
  { code: "CY", name: "Chipre" },
  { code: "CZ", name: "República Checa" },
  { code: "DK", name: "Dinamarca" },
  { code: "DJ", name: "Yibuti" },
  { code: "DM", name: "Dominica" },
  { code: "DO", name: "República Dominicana" },
  { code: "EC", name: "Ecuador" },
  { code: "EG", name: "Egipto" },
  { code: "SV", name: "El Salvador" },
  { code: "GQ", name: "Guinea Ecuatorial" },
  { code: "ER", name: "Eritrea" },
  { code: "EE", name: "Estonia" },
  { code: "ET", name: "Etiopía" },
  { code: "FJ", name: "Fiyi" },
  { code: "FI", name: "Finlandia" },
  { code: "FR", name: "Francia" },
  { code: "GA", name: "Gabón" },
  { code: "GM", name: "Gambia" },
  { code: "GE", name: "Georgia" },
  { code: "DE", name: "Alemania" },
  { code: "GH", name: "Ghana" },
  { code: "GR", name: "Grecia" },
  { code: "GT", name: "Guatemala" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bisáu" },
  { code: "GY", name: "Guyana" },
  { code: "HT", name: "Haití" },
  { code: "HN", name: "Honduras" },
  { code: "HU", name: "Hungría" },
  { code: "IS", name: "Islandia" },
  { code: "IN", name: "India" },
  { code: "ID", name: "Indonesia" },
  { code: "IQ", name: "Iraq" },
  { code: "IE", name: "Irlanda" },
  { code: "IL", name: "Israel" },
  { code: "IT", name: "Italia" },
  { code: "JP", name: "Japón" },
  { code: "JO", name: "Jordania" },
  { code: "KZ", name: "Kazajistán" },
  { code: "KE", name: "Kenia" },
  { code: "KR", name: "Corea del Sur" },
  { code: "KW", name: "Kuwait" },
  { code: "KG", name: "Kirguistán" },
  { code: "LA", name: "Laos" },
  { code: "LV", name: "Letonia" },
  { code: "LB", name: "Líbano" },
  { code: "LY", name: "Libia" },
  { code: "LI", name: "Liechtenstein" },
  { code: "LT", name: "Lituania" },
  { code: "LU", name: "Luxemburgo" },
  { code: "MO", name: "Macao" },
  { code: "MK", name: "Macedonia del Norte" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malaui" },
  { code: "MY", name: "Malasia" },
  { code: "MV", name: "Maldivas" },
  { code: "ML", name: "Mali" },
  { code: "MT", name: "Malta" },
  { code: "MH", name: "Islas Marshall" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauricio" },
  { code: "MX", name: "México" },
  { code: "FM", name: "Micronesia" },
  { code: "MD", name: "Moldavia" },
  { code: "MC", name: "Mónaco" },
  { code: "MN", name: "Mongolia" },
  { code: "MA", name: "Marruecos" },
  { code: "MZ", name: "Mozambique" },
  { code: "MM", name: "Myanmar" },
  { code: "NA", name: "Namibia" },
  { code: "NR", name: "Nauru" },
  { code: "NP", name: "Nepal" },
  { code: "NL", name: "Países Bajos" },
  { code: "NZ", name: "Nueva Zelanda" },
  { code: "NI", name: "Nicaragua" },
  { code: "NE", name: "Níger" },
  { code: "NG", name: "Nigeria" },
  { code: "NO", name: "Noruega" },
  { code: "OM", name: "Omán" },
  { code: "PK", name: "Pakistán" },
  { code: "PW", name: "Palaos" },
  { code: "PA", name: "Panamá" },
  { code: "PG", name: "Papúa Nueva Guinea" },
  { code: "PY", name: "Paraguay" },
  { code: "PH", name: "Filipinas" },
  { code: "PL", name: "Polonia" },
  { code: "PT", name: "Portugal" },
  { code: "QA", name: "Catar" },
  { code: "RO", name: "Rumania" },
  { code: "RU", name: "Rusia" },
  { code: "RW", name: "Ruanda" },
  { code: "KN", name: "San Cristóbal y Nieves" },
  { code: "LC", name: "Santa Lucía" },
  { code: "VC", name: "San Vicente y las Granadinas" },
  { code: "WS", name: "Samoa" },
  { code: "SM", name: "San Marino" },
  { code: "ST", name: "Santo Tomé y Príncipe" },
  { code: "SA", name: "Arabia Saudita" },
  { code: "SN", name: "Senegal" },
  { code: "RS", name: "Serbia" },
  { code: "SC", name: "Seychelles" },
  { code: "SL", name: "Sierra Leona" },
  { code: "SG", name: "Singapur" },
  { code: "SK", name: "Eslovaquia" },
  { code: "SI", name: "Eslovenia" },
  { code: "SB", name: "Islas Salomón" },
  { code: "SO", name: "Somalia" },
  { code: "ZA", name: "Sudáfrica" },
  { code: "ES", name: "España" },
  { code: "LK", name: "Sri Lanka" },
  { code: "SD", name: "Sudán" },
  { code: "SR", name: "Surinam" },
  { code: "SE", name: "Suecia" },
  { code: "CH", name: "Suiza" },
  { code: "SY", name: "Siria" },
  { code: "TW", name: "Taiwán" },
  { code: "TJ", name: "Tayikistán" },
  { code: "TZ", name: "Tanzania" },
  { code: "TH", name: "Tailandia" },
  { code: "TL", name: "Timor Oriental" },
  { code: "TG", name: "Togo" },
  { code: "TO", name: "Tonga" },
  { code: "TT", name: "Trinidad y Tobago" },
  { code: "TN", name: "Túnez" },
  { code: "TR", name: "Turquía" },
  { code: "TM", name: "Turkmenistán" },
  { code: "UG", name: "Uganda" },
  { code: "UA", name: "Ucrania" },
  { code: "AE", name: "Emiratos Árabes Unidos" },
  { code: "GB", name: "Reino Unido" },
  { code: "TZ", name: "Tanzania" },
  { code: "US", name: "Estados Unidos" },
  { code: "UY", name: "Uruguay" },
  { code: "UZ", name: "Uzbekistán" },
  { code: "VU", name: "Vanuatu" },
  { code: "ZM", name: "Zambia" },
  { code: "ZW", name: "Zimbabue" }
];

// Selector de Países sin J Query

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("countrySelect");

  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c.code;
    option.textContent = c.name;
    select.appendChild(option);
  });

  new Choices(select, {
    searchEnabled: true,
    itemSelectText: "",
    shouldSort: false
  });
});

// Validador de Contraseñas

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function validatePasswords() {
  if (confirmPassword.value === "") return;

  if (password.value === confirmPassword.value) {
    confirmPassword.classList.remove("is-invalid");
    confirmPassword.classList.add("is-valid");
  } else {
    confirmPassword.classList.remove("is-valid");
    confirmPassword.classList.add("is-invalid");
  }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);

// Envío de Formulario de Registro

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    confirmPassword.classList.add("is-invalid");
  }
});
