// main.js

const InicioHTML = `
<div class="inicio">
  <div class="header">
    <div></div>
    <div class="logo">Park<span>Easy</span></div>
    <div class="back-btn">☰</div>
  </div>
  <div style="padding: 60px 0">
    <h1 class="title">BIENVENIDO A<br>PARKEASY</h1>
    <div class="input-group">
      <label class="input-label">Usuario</label>
      <input type="text" class="text-field" placeholder="Escritura usuario">
    </div>
    <div class="input-group">
      <label class="input-label">Contraseña</label>
      <input type="password" class="text-field" placeholder="Escritura contraseña">
    </div>
    <button class="btn btn-primary" onclick="navigateTo('menu')">INGRESAR</button>
    <div class="link" style="text-align: center; margin-top: 20px">
      <a href="#" style="color: #4F46E5; text-decoration: none;">¿Qué más te gustaría?</a>
    </div>
  </div>
</div>
`;

const MenuHTML = `
<div class="menu">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('inicio')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <div style="padding: 20px 24px">
    <p style="color: #8B8B8B; margin-bottom: 20px;">Si ya te registraste:</p>
  </div>
  <div class="menu-grid">
    <div class="menu-item" onclick="navigateTo('carros')">
      <div class="menu-text">Ingreso</div>
    </div>
    <div class="menu-item" onclick="navigateTo('control-salida-1')">
      <div class="menu-text">Salida</div>
    </div>
  </div>
  <div class="menu-grid" style="margin-top: 20px;">
    <div class="menu-item" onclick="navigateTo('principe-moto')">
      <div class="menu-text">Ver cupos</div>
    </div>
    <div class="menu-item" onclick="navigateTo('registro-vehiculo')">
      <div class="menu-text">Registro Vehiculo</div>
    </div>
  </div>
</div>
`;

const CarrosHTML = `
<div class="carros">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">CARROS</h1>
  
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">18</div>
      <div class="stat-label">TOTAL</div>
    </div>
    <div class="stat-card">
      <div class="stat-percent">50%</div>
      <div class="stat-label">DISPONIBLES</div>
    </div>
  
  </div>
  
  <div class="section-divider">
    <h3>REGISTRAR MI VEHÍCULO</h3>
  </div>
  
  <button class="btn btn-primary" onclick="navigateTo('registro-vehiculo')">REGISTRAR</button>
</div>
`;

const PrincipeMotoHTML = `
<div class="Cupos Vehículos">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">VEHÍCULOS</h1>
  
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">30</div>
      <div class="stat-label">MOTOS</div>
    </div>
    <div class="stat-card">
      <div class="stat-percent">45%</div>
      <div class="stat-label">DISPONIBLES</div>
    </div>
    <div class="stat-card">
      <div class="stat-percent">55%</div>
      <div class="stat-label">OCUPADO</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">12</div>
      <div class="stat-label">CARROS</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">18</div>
      <div class="stat-label">BICICLETAS</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">10</div>
      <div class="stat-label">DISPONIBLES</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">12</div>
      <div class="stat-label">PATINETAS</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">17</div>
      <div class="stat-label">OCUPADO</div>
    </div>
  </div>
  
  <div class="section-divider">
    <h3>REGISTRAR MI VEHÍCULO</h3>
  </div>
  
  <button class="btn btn-primary" onclick="navigateTo('registro-vehiculo')">REGISTRAR</button>
</div>
`;

const RegistroVehiculoHTML = `
<div class="registro-vehiculo">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">REGISTRA TU VEHÍCULO</h1>
  
  <div class="input-group">
    <label class="input-label">PLACA</label>
    <input type="text" class="text-field" placeholder="ABC123" id="regPlaca">
    <p style="font-size: 12px; color: #8B8B8B; margin-top: 4px;">Escritura de la placa del vehículo</p>
  </div>
  
  <div class="input-group">
    <label class="input-label">TIPO</label>
    <input type="text" class="text-field" placeholder="Moto, Carro, Bicicleta..." id="regTipo">
    <p style="font-size: 12px; color: #8B8B8B; margin-top: 4px;">Escritura el tipo de vehículo</p>
  </div>
  
  <div class="input-group">
    <label class="input-label">NOMBRE</label>
    <input type="text" class="text-field" placeholder="Nombre completo" id="regNombre">
    <p style="font-size: 12px; color: #8B8B8B; margin-top: 4px;">Escritura de nombre completo</p>
  </div>
  
  <div class="input-group">
    <label class="input-label">CEDULA</label>
    <input type="text" class="text-field" placeholder="1000022233" id="regCedula">
    <p style="font-size: 12px; color: #8B8B8B; margin-top: 4px;">Escritura de número de identificación</p>
  </div>
  
  <div class="input-group">
    <label class="input-label">PARQUEADERO</label>
    <input type="text" class="text-field" placeholder="02" id="regParqueadero">
    <p style="font-size: 12px; color: #8B8B8B; margin-top: 4px;">Escritura el número de reparación</p>
  </div>
  
  <button class="btn btn-primary" onclick="registrarVehiculoCompleto()">REGISTRAR INGRESO</button>
</div>
`;

const ControlSalida1HTML = `
<div class="control-salida-1">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">CONTROL DE SALIDA</h1>
  <div class="input-group">
    <label class="input-label">Placa</label>
    <input type="text" class="text-field" placeholder="Escrita su Placa" id="placa1">
  </div>
  <button class="btn btn-primary" onclick="buscarVehiculo()">BUSCAR</button>
  <button class="btn btn-secondary" onclick="navigateTo('control-salida-2')">REGISTRAR SALIDA</button>
</div>
`;

const ControlSalida2HTML = `
<div class="control-salida-2">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('control-salida-1')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">CONTROL DE SALIDA</h1>
  <div class="input-group">
    <label class="input-label">Placa</label>
    <input type="text" class="text-field" placeholder="Escrita su Placa" id="placa2">
  </div>
  <button class="btn btn-primary" onclick="registrarSalida()">Registrar</button>
  <button class="btn btn-secondary" onclick="navigateTo('control-salida-1')">REGISTRAR SALIDA</button>
</div>
`;

const SalidaExitosaHTML = `
<div class="salida-exitosa">
  <div class="full-page">
    <div class="success-icon">✓</div>
    <h1 class="title">SALIDA EXITOSA</h1>
    <p class="message">La salida de su vehículo ha sido registrada exitosamente. Dispone de un tiempo aproximado de 10 minutos para abandonar el parqueadero.</p>
    <button class="btn btn-primary" onclick="navigateTo('menu')">TERMINAR PROCESO</button>
  </div>
</div>
`;

const HistorialHTML = `
<div class="historial">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  <h1 class="title">HISTORIAL</h1>
  <div class="history-item">
    <div>
      <div class="history-date">Entrada: 11/03/2027</div>
    </div>
    <div>
      <div class="history-date">Salida: 10/03/2027</div>
    </div>
  </div>
  <div class="history-item">
    <div>
      <div class="history-date">Entrada: 10/03/2027</div>
    </div>
    <div>
      <div class="history-date">Salida: 01/03/2027</div>
    </div>
  </div>
  <div class="history-item">
    <div>
      <div class="history-date">Entrada: 01/03/2027</div>
    </div>
    <div></div>
  </div>
  <div class="ver-mas">
    <a href="#">VER MAS...</a>
  </div>
</div>
`;

const RechazoHTML = `
<div class="rechazo">
  <div class="full-page">
    <div class="success-icon" style="background: #EF4444;">✗</div>
    <h1 class="title">REGISTRO NO EXITOSO</h1>
    <button class="btn btn-primary" onclick="navigateTo('registro-vehiculo')">REGISTRO EXITOSO</button>
    <button class="btn btn-secondary" onclick="navigateTo('menu')">TERMINAR PROCESO</button>
  </div>
</div>
`;

const screens = {
  inicio: InicioHTML,
  menu: MenuHTML,
  carros: CarrosHTML,
  'principe-moto': PrincipeMotoHTML,
  'registro-vehiculo': RegistroVehiculoHTML,
  'control-salida-1': ControlSalida1HTML,
  'control-salida-2': ControlSalida2HTML,
  'salida-exitosa': SalidaExitosaHTML,
  historial: HistorialHTML,
  rechazo: RechazoHTML
};

function navigateTo(screenName) {
  if (screens[screenName]) {
    document.getElementById('app').innerHTML = screens[screenName];
  }
}

function buscarVehiculo() {
  const placa = document.getElementById('placa1')?.value;
  if (!placa) {
    alert('Ingrese una placa');
    return;
  }
  alert('Vehículo encontrado');
  navigateTo('control-salida-2');
}

function registrarSalida() {
  const placa = document.getElementById('placa2')?.value;
  if (!placa) {
    alert('Ingrese una placa');
    return;
  }
  navigateTo('salida-exitosa');
}

function registrarVehiculoCompleto() {
  const placa = document.getElementById('regPlaca')?.value;
  const tipo = document.getElementById('regTipo')?.value;
  const nombre = document.getElementById('regNombre')?.value;
  const cedula = document.getElementById('regCedula')?.value;
  const parqueadero = document.getElementById('regParqueadero')?.value;
  
  if (!placa || !tipo || !nombre || !cedula || !parqueadero) {
    alert('Complete todos los campos');
    return;
  }
  
  alert('Vehículo registrado exitosamente');
  navigateTo('menu');
}

document.addEventListener('DOMContentLoaded', () => navigateTo('inicio'));
