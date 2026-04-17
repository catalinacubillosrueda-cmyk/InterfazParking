// main.js

const InicioHTML = `
<div class="screen">
  <div class="header">
    <div></div>
    <div class="logo">Park<span>Easy</span></div>
    <div class="menu-btn">☰</div>
  </div>
  
  <div style="padding: 60px 0">
    <h1 class="title title-center">Bienvenido a<br>Park Easy</h1>
    
    <div class="input-group">
      <label class="input-label">Placa o Correo</label>
      <input type="text" class="text-field" placeholder="ABC123 o email@ejemplo.com" id="loginUser">
    </div>
    
    <div class="input-group">
      <label class="input-label">Contraseña</label>
      <input type="password" class="text-field" placeholder="••••••••" id="loginPass">
    </div>
    
    <div class="button">
      <button class="btn btn-primary" onclick="navigateTo('menu')">Ingresar</button>
    </div>
    
    <div class="link" style="text-align: center; margin-top: 20px">
      <a href="#" style="color: #4F46E5">Olvidé mi contraseña</a>
    </div>
  </div>
</div>
`;

const MenuHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('inicio')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h2 class="section-title">Que deseas hacer</h2>
  
  <div class="menu-grid">
    <div class="menu-item" onclick="navigateTo('control-ingreso')">
      <div class="menu-icon">🚗</div>
      <div class="menu-text">Control de Ingreso</div>
    </div>
    
    <div class="menu-item" onclick="navigateTo('control-salida')">
      <div class="menu-icon">🚙</div>
      <div class="menu-text">Control de Salida</div>
    </div>
    
    <div class="menu-item" onclick="navigateTo('registro-vehiculo')">
      <div class="menu-icon">📝</div>
      <div class="menu-text">Registro Vehiculo</div>
    </div>
    
    <div class="menu-item" onclick="navigateTo('historial')">
      <div class="menu-icon">📋</div>
      <div class="menu-text">Historial</div>
    </div>
    
    <div class="menu-item" onclick="navigateTo('principe-carro')">
      <div class="menu-icon">👑</div>
      <div class="menu-text">Principe Carro</div>
    </div>
    
    <div class="menu-item" onclick="navigateTo('principe-moto')">
      <div class="menu-icon">🏍️</div>
      <div class="menu-text">Principe Moto</div>
    </div>
  </div>
  
  <div class="bottom-tab">
    <div class="tab-item active">
      <div class="tab-icon">🏠</div>
      <div class="tab-label">Inicio</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">📊</div>
      <div class="tab-label">Reportes</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">👤</div>
      <div class="tab-label">Perfil</div>
    </div>
  </div>
</div>
`;

const ControlIngresoHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h1 class="title title-center" style="margin-top: 20px">Control de Ingreso</h1>
  
  <div class="vehicle-grid">
    <div class="vehicle-option active" onclick="selectVehicle('carro')">
      <div class="vehicle-icon">🚗</div>
      <div class="vehicle-name">Carro</div>
    </div>
    <div class="vehicle-option" onclick="selectVehicle('moto')">
      <div class="vehicle-icon">🏍️</div>
      <div class="vehicle-name">Moto</div>
    </div>
  </div>
  
  <div class="input-group">
    <label class="input-label">Numero de Placa</label>
    <input type="text" class="text-field" placeholder="Ej: ABC123" id="placa">
  </div>
  
  <div class="input-group">
    <label class="input-label">Hora de Ingreso</label>
    <input type="time" class="text-field" id="horaIngreso">
  </div>
  
  <div class="button">
    <button class="btn btn-primary" onclick="registrarIngreso()">Registrar Ingreso</button>
  </div>
</div>
`;

const ControlSalidaHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h1 class="title title-center" style="margin-top: 20px">Control de Salida</h1>
  
  <div class="card">
    <div class="card-title">Detalles del Vehiculo</div>
    <div class="card-row">
      <span class="card-label">Placa:</span>
      <span class="card-value">ABC123</span>
    </div>
    <div class="card-row">
      <span class="card-label">Tipo:</span>
      <span class="card-value">Carro</span>
    </div>
    <div class="card-row">
      <span class="card-label">Ingreso:</span>
      <span class="card-value">08:30 AM</span>
    </div>
    <div class="card-row">
      <span class="card-label">Salida:</span>
      <span class="card-value">10:45 AM</span>
    </div>
    <div class="card-row">
      <span class="card-label">Tiempo:</span>
      <span class="card-value">2h 15min</span>
    </div>
  </div>
  
  <div class="card" style="background: #F0FDF4">
    <div class="card-title">Total a Pagar</div>
    <div class="card-row">
      <span class="card-label">Tarifa por hora:</span>
      <span class="card-value">$2.000</span>
    </div>
    <div class="card-row">
      <span class="card-label">Total:</span>
      <span class="card-value" style="font-size: 24px; color: #10B981">$5.000</span>
    </div>
  </div>
  
  <div class="button">
    <button class="btn btn-success" onclick="procesarPago()">Confirmar Pago</button>
  </div>
  <div class="button">
    <button class="btn btn-secondary" onclick="navigateTo('menu')">Cancelar</button>
  </div>
</div>
`;

const RegistroVehiculoHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h1 class="title title-center" style="margin-top: 20px">Registro de Vehiculo</h1>
  
  <div class="vehicle-grid">
    <div class="vehicle-option">
      <div class="vehicle-icon">🏍️</div>
      <div class="vehicle-name">Moto</div>
    </div>
    <div class="vehicle-option active">
      <div class="vehicle-icon">🚗</div>
      <div class="vehicle-name">Sedan</div>
    </div>
    <div class="vehicle-option">
      <div class="vehicle-icon">🚙</div>
      <div class="vehicle-name">SUV</div>
    </div>
    <div class="vehicle-option">
      <div class="vehicle-icon">🚐</div>
      <div class="vehicle-name">Camioneta</div>
    </div>
  </div>
  
  <div class="input-group">
    <label class="input-label">Placa</label>
    <input type="text" class="text-field" placeholder="Ej: ABC123" id="regPlaca">
  </div>
  
  <div class="input-group">
    <label class="input-label">Marca</label>
    <input type="text" class="text-field" placeholder="Ej: Toyota, Mazda, etc" id="regMarca">
  </div>
  
  <div class="input-group">
    <label class="input-label">Modelo</label>
    <input type="text" class="text-field" placeholder="Ej: 2020" id="regModelo">
  </div>
  
  <div class="input-group">
    <label class="input-label">Color</label>
    <input type="text" class="text-field" placeholder="Ej: Rojo, Azul, etc" id="regColor">
  </div>
  
  <div class="button">
    <button class="btn btn-primary" onclick="registrarVehiculo()">Registrar Vehiculo</button>
  </div>
</div>
`;

const HistorialHTML = `
<div class="screen screen-white">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div class="menu-btn">✏️</div>
  </div>
  
  <h1 class="title" style="padding: 0 24px; margin-top: 20px">Historial</h1>
  
  <div style="padding: 0 24px; margin: 16px 0">
    <input type="text" class="text-field" placeholder="Buscar por placa..." style="background: #F4F3F6" id="searchHistorial">
  </div>
  
  <div id="historialList">
    <div class="history-item">
      <div>
        <div class="history-date">15/04/2026 08:30</div>
        <div class="history-plate">ABC123</div>
      </div>
      <div class="history-amount">$5.000</div>
    </div>
    
    <div class="history-item">
      <div>
        <div class="history-date">14/04/2026 14:20</div>
        <div class="history-plate">XYZ789</div>
      </div>
      <div class="history-amount">$3.000</div>
    </div>
    
    <div class="history-item">
      <div>
        <div class="history-date">13/04/2026 09:15</div>
        <div class="history-plate">DEF456</div>
      </div>
      <div class="history-amount">$7.000</div>
    </div>
  </div>
  
  <div class="bottom-tab">
    <div class="tab-item">
      <div class="tab-icon">📋</div>
      <div class="tab-label">Ver</div>
    </div>
    <div class="tab-item active">
      <div class="tab-icon">➕</div>
      <div class="tab-label">Crear</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">✏️</div>
      <div class="tab-label">Editar</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">🗑️</div>
      <div class="tab-label">Eliminar</div>
    </div>
    <div class="tab-item">
      <div class="tab-icon">💾</div>
      <div class="tab-label">Guardar</div>
    </div>
  </div>
</div>
`;

const SalidaExitosaHTML = `
<div class="screen screen-white">
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px">
    <div style="font-size: 80px; margin-bottom: 24px">✅</div>
    <h1 class="title title-center">Salida Exitosa</h1>
    <p class="subtitle" style="text-align: center">Gracias por usar Park Easy</p>
    
    <div class="card" style="width: 100%; margin: 20px 0">
      <div class="card-row">
        <span>Placa:</span>
        <span class="card-value">ABC123</span>
      </div>
      <div class="card-row">
        <span>Pago:</span>
        <span class="card-value">$5.000</span>
      </div>
      <div class="card-row">
        <span>Metodo:</span>
        <span class="card-value">Efectivo</span>
      </div>
    </div>
    
    <button class="btn btn-primary" onclick="navigateTo('menu')">Volver al Menu</button>
    <button class="btn btn-secondary" style="margin-top: 12px" onclick="navigateTo('inicio')">Cerrar Sesion</button>
  </div>
</div>
`;

const RechazoHTML = `
<div class="screen">
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px">
    <div style="font-size: 80px; margin-bottom: 24px">❌</div>
    <h1 class="title title-center">Registro No Exitoso</h1>
    <p class="subtitle" style="text-align: center">No se pudo completar el registro</p>
    
    <div class="card" style="background: #FEF2F2; border: 1px solid #FEE2E2">
      <p style="text-align: center; color: #DC2626">La placa ya existe en el sistema</p>
    </div>
    
    <div class="button">
      <button class="btn btn-primary" onclick="navigateTo('registro-vehiculo')">Intentar de Nuevo</button>
    </div>
    <div class="button">
      <button class="btn btn-secondary" onclick="navigateTo('menu')">Volver al Menu</button>
    </div>
  </div>
</div>
`;

const PrincipeCarroHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h1 class="title title-center" style="margin-top: 20px">Principe Carro</h1>
  
  <div class="card">
    <div class="card-title">Garantia 100%</div>
    <div class="card-row">
      <span class="card-label">CARHUS:</span>
      <span class="card-value">Protegido</span>
    </div>
    <div class="card-row">
      <span class="card-label">Guardias:</span>
      <span class="card-value">24/7</span>
    </div>
  </div>
  
  <div class="button">
    <button class="btn btn-primary" onclick="navigateTo('menu')">Volver al Menu</button>
  </div>
</div>
`;

const PrincipeMotoHTML = `
<div class="screen">
  <div class="header">
    <div class="back-btn" onclick="navigateTo('menu')">←</div>
    <div class="logo">Park<span>Easy</span></div>
    <div></div>
  </div>
  
  <h1 class="title title-center" style="margin-top: 20px">Principe Moto</h1>
  
  <div class="card">
    <div class="card-title">Zona Exclusiva</div>
    <div class="card-row">
      <span class="card-label">Seguridad:</span>
      <span class="card-value">24 Horas</span>
    </div>
    <div class="card-row">
      <span class="card-label">Cubiertos:</span>
      <span class="card-value">100%</span>
    </div>
  </div>
  
  <div class="button">
    <button class="btn btn-primary" onclick="navigateTo('menu')">Volver al Menu</button>
  </div>
</div>
`;

const screens = {
  'inicio': InicioHTML,
  'menu': MenuHTML,
  'control-ingreso': ControlIngresoHTML,
  'control-salida': ControlSalidaHTML,
  'registro-vehiculo': RegistroVehiculoHTML,
  'historial': HistorialHTML,
  'salida-exitosa': SalidaExitosaHTML,
  'rechazo': RechazoHTML,
  'principe-carro': PrincipeCarroHTML,
  'principe-moto': PrincipeMotoHTML
};

function navigateTo(screenName) {
  if (screens[screenName]) {
    document.getElementById('app').innerHTML = screens[screenName];
  }
}

function registrarIngreso() {
  const placa = document.getElementById('placa')?.value;
  const hora = document.getElementById('horaIngreso')?.value;
  
  if (!placa) {
    alert('Por favor ingrese la placa');
    return;
  }
  
  if (!hora) {
    alert('Por favor ingrese la hora');
    return;
  }
  
  alert('Ingreso registrado exitosamente');
  navigateTo('menu');
}

function procesarPago() {
  alert('Pago procesado exitosamente');
  navigateTo('salida-exitosa');
}

function registrarVehiculo() {
  const placa = document.getElementById('regPlaca')?.value;
  const marca = document.getElementById('regMarca')?.value;
  const modelo = document.getElementById('regModelo')?.value;
  const color = document.getElementById('regColor')?.value;
  
  if (!placa || !marca || !modelo || !color) {
    alert('Por favor complete todos los campos');
    return;
  }
  
  const exito = true;
  
  if (exito) {
    alert('Vehiculo registrado exitosamente');
    navigateTo('menu');
  } else {
    navigateTo('rechazo');
  }
}

function selectVehicle(type) {
  console.log('Tipo de vehiculo seleccionado:', type);
}

document.addEventListener('DOMContentLoaded', function() {
  navigateTo('inicio');
});