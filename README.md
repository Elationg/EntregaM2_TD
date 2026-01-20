# Entrega Módulo 2

Repositorio: https://github.com/Elationg/EntregaM2_TD

# Piggy Wallet

Simulación de banca en línea con HTML, CSS, JavaScript y jQuery

## Descripción general

**Piggy Wallet** es una aplicación web estática que simula el funcionamiento básico de una banca en línea.
Permite a un usuario:

* Iniciar sesión
* Visualizar saldo y movimientos
* Realizar depósitos
* Enviar dinero a contactos
* Gestionar contactos
* Navegar dinámicamente según estado de sesión

El proyecto **no utiliza backend ni base de datos**, toda la información se maneja mediante `localStorage` y `sessionStorage`.

## Tecnologías utilizadas

* **HTML5**
* **CSS3**
* **Bootstrap 5**
* **JavaScript (Vanilla JS)**
* **jQuery 3**
* **jQuery UI (Autocomplete)**

## Autenticación y control de sesión

### Usuario válido de prueba

Email: admin@piggywallet.com
Password: admin1234

### Manejo de sesión

* Al iniciar sesión correctamente se guarda en `localStorage`:

  * `isLoggedIn`
  * `userName`
* Al cerrar sesión se eliminan estos valores
* El estado de sesión controla:

  * La visibilidad de botones **Login / Registro**
  * El saludo **Hola, usuario**
  * El botón **Logout**
  * El acceso real a las secciones de dinero

## Comportamiento dinámico del Navbar

### Usuario NO logueado

* Se muestran:

  * Login
  * Registro
* Los links de:

  * Transacciones
  * Enviar dinero
  * Depósitos
    redirigen a `login.html`

### Usuario logueado

* Se muestra:

  * `Hola, {nombre}`
  * Botón Logout
* Los links de dinero apuntan a:

  * `transactions.html`
  * `sendmoney.html`
  * `deposit.html`

Todo esto se controla **solo con JavaScript** leyendo el estado de sesión.


## Estructura del proyecto

/
├── css/
│   └── styles.css
├── img/
│   └── 
├── js/
│   ├── deposit.js
│   ├── login.js
│   ├── navbar.js
│   ├── register.js
│   ├── sendmoney.js
│   └── transactions.
├── index.html
├── login.html
├── register.html
├── transactions.html
├── deposit.html
├── sendmoney.html


## Persistencia de datos (localStorage)

El proyecto guarda información en el navegador:

| Clave          | Uso                      |
| -------------- | ------------------------ |
| `isLoggedIn`   | Estado de sesión         |
| `userName`     | Nombre del usuario       |
| `balance`      | Saldo actual             |
| `transactions` | Historial de movimientos |
| `contacts`     | Lista de contactos       |

## Flujo de transacciones

### Depositar dinero

* Ir a `deposit.html`
* Ingresar monto
* El saldo se actualiza dinámicamente
* Se registra una transacción tipo **Depósito**

### Enviar dinero

* Ir a `sendmoney.html`
* Buscar contacto (con autocomplete)
* Ingresar monto
* Validaciones:

  * Saldo suficiente
  * Contacto válido
* Se descuenta el saldo
* Se registra una transacción tipo **Transferencia**

### Ver transacciones

* En cualquier momento acceder a `transactions.html`
* Se visualiza:

  * Saldo actual
  * Historial completo de movimientos

## Gestión de contactos

* Los contactos se almacenan en `localStorage`
* Se pueden agregar desde `sendmoney.html`
* No se usan bases de datos externas

## Uso de jQuery y jQuery UI

### Autocomplete de contactos

En la pantalla **Enviar Dinero (`sendmoney.html`)** se implementa:

* **jQuery UI Autocomplete**
* Búsqueda dinámica de contactos

