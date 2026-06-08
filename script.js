// ==================== QUINIELA MUNDIAL - VERSIÓN CORREGIDA ====================

// Puntos por acierto
const PUNTOS_POR_ACIERTO = 3;

// ==================== PARTIDOS OFICIALES MUNDIAL 2026 ====================
let partidos = [];

function agregarPartido(id, fecha, equipoA, equipoB, etapa, grupo = null) {
    partidos.push({
        id: id,
        fecha: fecha,
        equipoA: equipoA,
        equipoB: equipoB,
        etapa: etapa,
        grupo: grupo,
        resultadoReal: null
    });
}

// GRUPO A
agregarPartido(1, "2026-06-11T15:00:00-05:00", "México", "Sudáfrica", "Grupo A", "A");
agregarPartido(2, "2026-06-11T22:00:00-05:00", "Corea del Sur", "República Checa", "Grupo A", "A");
agregarPartido(3, "2026-06-18T12:00:00-05:00", "República Checa", "Sudáfrica", "Grupo A", "A");
agregarPartido(4, "2026-06-18T21:00:00-05:00", "México", "Corea del Sur", "Grupo A", "A");
agregarPartido(5, "2026-06-24T21:00:00-05:00", "República Checa", "México", "Grupo A", "A");
agregarPartido(6, "2026-06-24T21:00:00-05:00", "Sudáfrica", "Corea del Sur", "Grupo A", "A");

// GRUPO B
agregarPartido(7, "2026-06-12T15:00:00-05:00", "Canadá", "Bosnia y Herzegovina", "Grupo B", "B");
agregarPartido(8, "2026-06-13T15:00:00-05:00", "Qatar", "Suiza", "Grupo B", "B");
agregarPartido(9, "2026-06-18T15:00:00-05:00", "Suiza", "Bosnia y Herzegovina", "Grupo B", "B");
agregarPartido(10, "2026-06-18T18:00:00-05:00", "Canadá", "Qatar", "Grupo B", "B");
agregarPartido(11, "2026-06-24T15:00:00-05:00", "Suiza", "Canadá", "Grupo B", "B");
agregarPartido(12, "2026-06-24T15:00:00-05:00", "Bosnia y Herzegovina", "Qatar", "Grupo B", "B");

// GRUPO C
agregarPartido(13, "2026-06-13T18:00:00-05:00", "Brasil", "Marruecos", "Grupo C", "C");
agregarPartido(14, "2026-06-13T21:00:00-05:00", "Haití", "Escocia", "Grupo C", "C");
agregarPartido(15, "2026-06-19T18:00:00-05:00", "Escocia", "Marruecos", "Grupo C", "C");
agregarPartido(16, "2026-06-19T21:00:00-05:00", "Brasil", "Haití", "Grupo C", "C");
agregarPartido(17, "2026-06-24T18:00:00-05:00", "Escocia", "Brasil", "Grupo C", "C");
agregarPartido(18, "2026-06-24T18:00:00-05:00", "Marruecos", "Haití", "Grupo C", "C");

// GRUPO D
agregarPartido(19, "2026-06-12T21:00:00-05:00", "Estados Unidos", "Paraguay", "Grupo D", "D");
agregarPartido(20, "2026-06-14T00:00:00-05:00", "Australia", "Turquía", "Grupo D", "D");
agregarPartido(21, "2026-06-19T15:00:00-05:00", "Estados Unidos", "Australia", "Grupo D", "D");
agregarPartido(22, "2026-06-20T00:00:00-05:00", "Turquía", "Paraguay", "Grupo D", "D");
agregarPartido(23, "2026-06-25T22:00:00-05:00", "Turquía", "Estados Unidos", "Grupo D", "D");
agregarPartido(24, "2026-06-25T22:00:00-05:00", "Paraguay", "Australia", "Grupo D", "D");

// GRUPO E
agregarPartido(25, "2026-06-14T13:00:00-05:00", "Alemania", "Curazao", "Grupo E", "E");
agregarPartido(26, "2026-06-14T19:00:00-05:00", "Costa de Marfil", "Ecuador", "Grupo E", "E");
agregarPartido(27, "2026-06-20T16:00:00-05:00", "Alemania", "Costa de Marfil", "Grupo E", "E");
agregarPartido(28, "2026-06-20T22:00:00-05:00", "Ecuador", "Curazao", "Grupo E", "E");
agregarPartido(29, "2026-06-25T16:00:00-05:00", "Curazao", "Costa de Marfil", "Grupo E", "E");
agregarPartido(30, "2026-06-25T16:00:00-05:00", "Ecuador", "Alemania", "Grupo E", "E");

// GRUPO F
agregarPartido(31, "2026-06-14T16:00:00-05:00", "Países Bajos", "Japón", "Grupo F", "F");
agregarPartido(32, "2026-06-14T22:00:00-05:00", "Suecia", "Túnez", "Grupo F", "F");
agregarPartido(33, "2026-06-20T13:00:00-05:00", "Países Bajos", "Suecia", "Grupo F", "F");
agregarPartido(34, "2026-06-21T00:00:00-05:00", "Túnez", "Japón", "Grupo F", "F");
agregarPartido(35, "2026-06-25T19:00:00-05:00", "Japón", "Suecia", "Grupo F", "F");
agregarPartido(36, "2026-06-25T19:00:00-05:00", "Túnez", "Países Bajos", "Grupo F", "F");

// GRUPO G
agregarPartido(37, "2026-06-15T15:00:00-05:00", "Bélgica", "Egipto", "Grupo G", "G");
agregarPartido(38, "2026-06-15T21:00:00-05:00", "Irán", "Nueva Zelanda", "Grupo G", "G");
agregarPartido(39, "2026-06-21T15:00:00-05:00", "Bélgica", "Irán", "Grupo G", "G");
agregarPartido(40, "2026-06-21T21:00:00-05:00", "Nueva Zelanda", "Egipto", "Grupo G", "G");
agregarPartido(41, "2026-06-26T23:00:00-05:00", "Egipto", "Irán", "Grupo G", "G");
agregarPartido(42, "2026-06-26T23:00:00-05:00", "Nueva Zelanda", "Bélgica", "Grupo G", "G");

// GRUPO H
agregarPartido(43, "2026-06-15T12:00:00-05:00", "España", "Cabo Verde", "Grupo H", "H");
agregarPartido(44, "2026-06-15T18:00:00-05:00", "Arabia Saudita", "Uruguay", "Grupo H", "H");
agregarPartido(45, "2026-06-21T12:00:00-05:00", "España", "Arabia Saudita", "Grupo H", "H");
agregarPartido(46, "2026-06-21T18:00:00-05:00", "Uruguay", "Cabo Verde", "Grupo H", "H");
agregarPartido(47, "2026-06-26T20:00:00-05:00", "Cabo Verde", "Arabia Saudita", "Grupo H", "H");
agregarPartido(48, "2026-06-26T20:00:00-05:00", "Uruguay", "España", "Grupo H", "H");

// GRUPO I
agregarPartido(49, "2026-06-16T15:00:00-05:00", "Francia", "Senegal", "Grupo I", "I");
agregarPartido(50, "2026-06-16T18:00:00-05:00", "Irak", "Noruega", "Grupo I", "I");
agregarPartido(51, "2026-06-22T17:00:00-05:00", "Francia", "Irak", "Grupo I", "I");
agregarPartido(52, "2026-06-22T20:00:00-05:00", "Noruega", "Senegal", "Grupo I", "I");
agregarPartido(53, "2026-06-26T15:00:00-05:00", "Noruega", "Francia", "Grupo I", "I");
agregarPartido(54, "2026-06-26T15:00:00-05:00", "Senegal", "Irak", "Grupo I", "I");

// GRUPO J
agregarPartido(55, "2026-06-16T21:00:00-05:00", "Argentina", "Argelia", "Grupo J", "J");
agregarPartido(56, "2026-06-17T00:00:00-05:00", "Austria", "Jordania", "Grupo J", "J");
agregarPartido(57, "2026-06-22T13:00:00-05:00", "Argentina", "Austria", "Grupo J", "J");
agregarPartido(58, "2026-06-22T23:00:00-05:00", "Jordania", "Argelia", "Grupo J", "J");
agregarPartido(59, "2026-06-27T22:00:00-05:00", "Argelia", "Austria", "Grupo J", "J");
agregarPartido(60, "2026-06-27T22:00:00-05:00", "Jordania", "Argentina", "Grupo J", "J");

// GRUPO K
agregarPartido(61, "2026-06-17T13:00:00-05:00", "Portugal", "RD Congo", "Grupo K", "K");
agregarPartido(62, "2026-06-17T22:00:00-05:00", "Uzbekistán", "Colombia", "Grupo K", "K");
agregarPartido(63, "2026-06-23T13:00:00-05:00", "Portugal", "Uzbekistán", "Grupo K", "K");
agregarPartido(64, "2026-06-23T22:00:00-05:00", "Colombia", "RD Congo", "Grupo K", "K");
agregarPartido(65, "2026-06-27T19:30:00-05:00", "Colombia", "Portugal", "Grupo K", "K");
agregarPartido(66, "2026-06-27T19:30:00-05:00", "RD Congo", "Uzbekistán", "Grupo K", "K");

// GRUPO L
agregarPartido(67, "2026-06-17T16:00:00-05:00", "Inglaterra", "Croacia", "Grupo L", "L");
agregarPartido(68, "2026-06-17T19:00:00-05:00", "Ghana", "Panamá", "Grupo L", "L");
agregarPartido(69, "2026-06-23T16:00:00-05:00", "Inglaterra", "Ghana", "Grupo L", "L");
agregarPartido(70, "2026-06-23T19:00:00-05:00", "Panamá", "Croacia", "Grupo L", "L");
agregarPartido(71, "2026-06-27T17:00:00-05:00", "Panamá", "Inglaterra", "Grupo L", "L");
agregarPartido(72, "2026-06-27T17:00:00-05:00", "Croacia", "Ghana", "Grupo L", "L");

// ELIMINATORIAS - Dieciseisavos (IDs 73-88)
agregarPartido(73, "2026-06-28T15:00:00-05:00", "2° Grupo A", "2° Grupo B", "Dieciseisavos");
agregarPartido(74, "2026-06-29T13:00:00-05:00", "1° Grupo E", "3° Grupo A/B/C/D/F", "Dieciseisavos");
agregarPartido(75, "2026-06-29T16:00:00-05:00", "1° Grupo F", "2° Grupo C", "Dieciseisavos");
agregarPartido(76, "2026-06-29T19:00:00-05:00", "1° Grupo C", "2° Grupo F", "Dieciseisavos");
agregarPartido(77, "2026-06-30T15:00:00-05:00", "1° Grupo I", "3° Grupo C/D/F/G/H", "Dieciseisavos");
agregarPartido(78, "2026-06-30T18:00:00-05:00", "2° Grupo E", "2° Grupo I", "Dieciseisavos");
agregarPartido(79, "2026-06-30T21:00:00-05:00", "1° Grupo A", "3° Grupo C/E/F/H/I", "Dieciseisavos");
agregarPartido(80, "2026-07-01T15:00:00-05:00", "1° Grupo L", "3° Grupo E/H/I/J/K", "Dieciseisavos");
agregarPartido(81, "2026-07-01T18:00:00-05:00", "1° Grupo D", "3° Grupo B/E/F/I/J", "Dieciseisavos");
agregarPartido(82, "2026-07-01T21:00:00-05:00", "1° Grupo G", "3° Grupo A/E/H/I/J", "Dieciseisavos");
agregarPartido(83, "2026-07-02T15:00:00-05:00", "2° Grupo K", "2° Grupo L", "Dieciseisavos");
agregarPartido(84, "2026-07-02T18:00:00-05:00", "1° Grupo H", "2° Grupo J", "Dieciseisavos");
agregarPartido(85, "2026-07-02T21:00:00-05:00", "1° Grupo B", "3° Grupo E/F/G/I/J", "Dieciseisavos");
agregarPartido(86, "2026-07-03T15:00:00-05:00", "1° Grupo J", "2° Grupo H", "Dieciseisavos");
agregarPartido(87, "2026-07-03T18:00:00-05:00", "1° Grupo K", "3° Grupo D/E/I/J/L", "Dieciseisavos");
agregarPartido(88, "2026-07-03T21:00:00-05:00", "2° Grupo D", "2° Grupo G", "Dieciseisavos");

// Octavos (IDs 89-96)
agregarPartido(89, "2026-07-04T15:00:00-05:00", "Ganador 74", "Ganador 77", "Octavos");
agregarPartido(90, "2026-07-04T19:00:00-05:00", "Ganador 73", "Ganador 75", "Octavos");
agregarPartido(91, "2026-07-05T15:00:00-05:00", "Ganador 76", "Ganador 78", "Octavos");
agregarPartido(92, "2026-07-05T19:00:00-05:00", "Ganador 79", "Ganador 80", "Octavos");
agregarPartido(93, "2026-07-06T15:00:00-05:00", "Ganador 83", "Ganador 84", "Octavos");
agregarPartido(94, "2026-07-06T19:00:00-05:00", "Ganador 81", "Ganador 82", "Octavos");
agregarPartido(95, "2026-07-07T15:00:00-05:00", "Ganador 86", "Ganador 88", "Octavos");
agregarPartido(96, "2026-07-07T19:00:00-05:00", "Ganador 85", "Ganador 87", "Octavos");

// Cuartos (IDs 97-100)
agregarPartido(97, "2026-07-09T15:00:00-05:00", "Ganador 89", "Ganador 90", "Cuartos");
agregarPartido(98, "2026-07-10T15:00:00-05:00", "Ganador 93", "Ganador 94", "Cuartos");
agregarPartido(99, "2026-07-11T15:00:00-05:00", "Ganador 91", "Ganador 92", "Cuartos");
agregarPartido(100, "2026-07-11T19:00:00-05:00", "Ganador 95", "Ganador 96", "Cuartos");

// Semifinales (IDs 101-102)
agregarPartido(101, "2026-07-14T15:00:00-05:00", "Ganador 97", "Ganador 98", "Semifinal");
agregarPartido(102, "2026-07-15T15:00:00-05:00", "Ganador 99", "Ganador 100", "Semifinal");

// Tercer puesto (ID 103)
agregarPartido(103, "2026-07-18T15:00:00-05:00", "Perdedor 101", "Perdedor 102", "Tercer puesto");

// Final (ID 104)
agregarPartido(104, "2026-07-19T15:00:00-05:00", "Ganador 101", "Ganador 102", "Final");

// Usuarios
let usuarios = [];
let usuarioActual = null;

// ==================== INICIALIZACIÓN ====================
function cargarDatos() {
    const usuariosGuardados = localStorage.getItem("quiniela_usuarios");
    if (usuariosGuardados) {
        usuarios = JSON.parse(usuariosGuardados);
    }
    
    const partidosGuardados = localStorage.getItem("quiniela_partidos");
    if (partidosGuardados) {
        partidos = JSON.parse(partidosGuardados);
    } else {
        guardarPartidos();
    }
    
    const sesionGuardada = localStorage.getItem("quiniela_sesion");
    if (sesionGuardada) {
        const usuarioEncontrado = usuarios.find(u => u.usuario === sesionGuardada);
        if (usuarioEncontrado) {
            usuarioActual = usuarioEncontrado;
            mostrarPantallaPrincipal();
        }
    }
}

function guardarUsuarios() {
    localStorage.setItem("quiniela_usuarios", JSON.stringify(usuarios));
}

function guardarPartidos() {
    localStorage.setItem("quiniela_partidos", JSON.stringify(partidos));
}

function guardarSesion(usuario) {
    if (usuario) {
        localStorage.setItem("quiniela_sesion", usuario.usuario);
    } else {
        localStorage.removeItem("quiniela_sesion");
    }
}

// ==================== GENERAR PIN ====================
function generarPin() {
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    const pinInput = document.getElementById("regPin");
    if (pinInput) {
        pinInput.value = pin;
    }
}

// ==================== REGISTRO ====================
function hacerRegistro() {
    const nombre = document.getElementById("regNombre").value.trim();
    const usuario = document.getElementById("regUser").value.trim().toLowerCase();
    const pin = document.getElementById("regPin").value;
    const msgDiv = document.getElementById("registerMsg");
    
    if (!nombre) {
        msgDiv.innerHTML = "❌ Escribe tu nombre completo";
        msgDiv.style.color = "red";
        return;
    }
    if (!usuario) {
        msgDiv.innerHTML = "❌ Escribe un usuario (apodo)";
        msgDiv.style.color = "red";
        return;
    }
    if (usuarios.find(u => u.usuario === usuario)) {
        msgDiv.innerHTML = "❌ Usuario ya registrado. Elige otro";
        msgDiv.style.color = "red";
        return;
    }
    if (!pin || pin.length !== 4) {
        msgDiv.innerHTML = "❌ Genera un PIN de 4 dígitos";
        msgDiv.style.color = "red";
        return;
    }
    
    const nuevoUsuario = {
        nombre: nombre,
        usuario: usuario,
        pin: pin,
        predicciones: {},
        puntosTotal: 0
    };
    
    usuarios.push(nuevoUsuario);
    guardarUsuarios();
    
    // GUARDAR DATOS AUTOMÁTICAMENTE PARA RECORDARLOS
    localStorage.setItem("recordar_usuario", usuario);
    localStorage.setItem("recordar_pin", pin);
    
    msgDiv.innerHTML = "✅ ¡Registro exitoso! Iniciando sesión...";
    msgDiv.style.color = "green";
    
    setTimeout(() => {
        usuarioActual = nuevoUsuario;
        guardarSesion(nuevoUsuario);
        mostrarPantallaPrincipal();
    }, 1000);
}

// ==================== LOGIN ====================
function hacerLogin() {
    const usuario = document.getElementById("loginUser").value.trim().toLowerCase();
    const pin = document.getElementById("loginPin").value;
    const msgDiv = document.getElementById("loginMsg");
    
    if (!usuario) {
        msgDiv.innerHTML = "❌ Escribe tu usuario";
        msgDiv.style.color = "red";
        return;
    }
    if (!pin) {
        msgDiv.innerHTML = "❌ Escribe tu PIN";
        msgDiv.style.color = "red";
        return;
    }
    
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario);
    if (!usuarioEncontrado) {
        msgDiv.innerHTML = "❌ Usuario no registrado";
        msgDiv.style.color = "red";
        return;
    }
    if (usuarioEncontrado.pin !== pin) {
        msgDiv.innerHTML = "❌ PIN incorrecto";
        msgDiv.style.color = "red";
        return;
    }
    
    msgDiv.innerHTML = "✅ ¡Bienvenido!";
    msgDiv.style.color = "green";
    
    setTimeout(() => {
        usuarioActual = usuarioEncontrado;
        guardarSesion(usuarioEncontrado);
        mostrarPantallaPrincipal();
    }, 500);
}

// ==================== CERRAR SESIÓN ====================
function cerrarSesion() {
    usuarioActual = null;
    guardarSesion(null);
    mostrarPantallaLogin();
}

// ==================== MOSTRAR PANTALLAS ====================
function mostrarPantallaLogin() {
    document.getElementById("authScreen").classList.remove("hidden");
    document.getElementById("mainScreen").classList.add("hidden");
    
    // Cargar datos guardados automáticamente del registro
    const usuarioRecordado = localStorage.getItem("recordar_usuario");
    const pinRecordado = localStorage.getItem("recordar_pin");
    
    if (usuarioRecordado) {
        document.getElementById("loginUser").value = usuarioRecordado;
    } else {
        document.getElementById("loginUser").value = "";
    }
    
    if (pinRecordado) {
        document.getElementById("loginPin").value = pinRecordado;
    } else {
        document.getElementById("loginPin").value = "";
    }
    
    document.getElementById("loginMsg").innerHTML = "";
}

function mostrarPantallaPrincipal() {
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("mainScreen").classList.remove("hidden");
    
    // Mostrar nombre del usuario
    document.getElementById("userNameDisplay").innerHTML = `👤 ${usuarioActual.nombre} (@${usuarioActual.usuario}) | 🎯 Puntos: ${usuarioActual.puntosTotal || 0}`;
    
    // Cargar datos
    recalcularPuntos();
    renderPartidos();
    renderMisPredicciones();
    renderClasificacion();
}

// ==================== MOSTRAR TABS DE AUTH ====================
function mostrarLogin() {
    // Cambiar estilo de pestañas
    const btns = document.querySelectorAll(".tabs-auth .tab-btn-auth");
    btns.forEach(btn => btn.classList.remove("active"));
    btns[0].classList.add("active");
    
    // Mostrar panel de login, ocultar registro
    document.getElementById("loginPanel").classList.remove("hidden");
    document.getElementById("registerPanel").classList.add("hidden");
}

function mostrarRegistro() {
    // Cambiar estilo de pestañas
    const btns = document.querySelectorAll(".tabs-auth .tab-btn-auth");
    btns.forEach(btn => btn.classList.remove("active"));
    btns[1].classList.add("active");
    
    // Mostrar panel de registro, ocultar login
    document.getElementById("loginPanel").classList.add("hidden");
    document.getElementById("registerPanel").classList.remove("hidden");
    
    // Si hay usuario logueado, mostrar sus datos (opcional)
    if (usuarioActual) {
        document.getElementById("regNombre").value = usuarioActual.nombre;
        document.getElementById("regUser").value = usuarioActual.usuario;
        document.getElementById("regPin").value = usuarioActual.pin;
    } else {
        // Si no hay usuario, limpiar y generar PIN nuevo
        document.getElementById("regNombre").value = "";
        document.getElementById("regUser").value = "";
        generarPin();
    }
}

// ==================== BORRAR DATOS GUARDADOS ====================
function borrarDatosGuardados() {
    localStorage.removeItem("recordar_usuario");
    localStorage.removeItem("recordar_pin");
    document.getElementById("loginUser").value = "";
    document.getElementById("loginPin").value = "";
    console.log("✅ Datos guardados eliminados");
}

// ==================== RECALCULAR PUNTOS ====================
function recalcularPuntos() {
    for (let usuario of usuarios) {
        let total = 0;
        if (usuario.predicciones) {
            for (let partido of partidos) {
                const pred = usuario.predicciones[partido.id];
                if (partido.resultadoReal !== null && pred === partido.resultadoReal) {
                    total += PUNTOS_POR_ACIERTO;
                }
            }
        }
        usuario.puntosTotal = total;
    }
    usuarios.sort((a, b) => b.puntosTotal - a.puntosTotal);
    guardarUsuarios();
}

// ==================== GUARDAR PREDICCIÓN ====================
function guardarPrediccion(partidoId, resultado) {
    if (!usuarioActual) return;
    
    const partido = partidos.find(p => p.id === partidoId);
    if (partido.resultadoReal !== null) {
        alert("⚠️ Este partido ya terminó. No puedes cambiar la predicción.");
        return;
    }
    
    if (!usuarioActual.predicciones) {
        usuarioActual.predicciones = {};
    }
    
    usuarioActual.predicciones[partidoId] = resultado;
    recalcularPuntos();
    guardarUsuarios();
    
    // Actualizar vistas
    renderPartidos();
    renderMisPredicciones();
    renderClasificacion();
    document.getElementById("userNameDisplay").innerHTML = `👤 ${usuarioActual.nombre} (@${usuarioActual.usuario}) | 🎯 Puntos: ${usuarioActual.puntosTotal || 0}`;
}

// ==================== RENDER PARTIDOS ====================
function renderPartidos() {
    const container = document.getElementById("partidosList");
    if (!container) return;
    
    let html = "";
    for (let partido of partidos) {
        const prediccionActual = usuarioActual?.predicciones?.[partido.id];
        const resultadoTexto = partido.resultadoReal ? 
            `🏁 Resultado: ${partido.resultadoReal === '1' ? partido.equipoA : partido.resultadoReal === '2' ? partido.equipoB : "Empate"}` : 
            "⏳ Partido pendiente";
        
        const puntosGanados = (partido.resultadoReal && prediccionActual === partido.resultadoReal) ? 
            `<div class="puntos">✅ +${PUNTOS_POR_ACIERTO} puntos</div>` : 
            (partido.resultadoReal ? `<div class="puntos">❌ 0 puntos</div>` : "");
        
        html += `
            <div class="match-card">
                <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                <div class="pred-buttons">
                    <button class="pred-btn ${prediccionActual === '1' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, '1')" 
                        ${partido.resultadoReal ? 'disabled' : ''}>🏆 ${partido.equipoA}</button>
                    <button class="pred-btn ${prediccionActual === 'X' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, 'X')"
                        ${partido.resultadoReal ? 'disabled' : ''}>🤝 Empate</button>
                    <button class="pred-btn ${prediccionActual === '2' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, '2')"
                        ${partido.resultadoReal ? 'disabled' : ''}>🏆 ${partido.equipoB}</button>
                </div>
                <div class="resultado-real">${resultadoTexto}</div>
                ${puntosGanados}
            </div>
        `;
    }
    container.innerHTML = html;
}

// ==================== RENDER MIS PREDICCIONES ====================
function renderMisPredicciones() {
    const container = document.getElementById("misPrediccionesList");
    if (!container) return;
    
    if (!usuarioActual.predicciones || Object.keys(usuarioActual.predicciones).length === 0) {
        container.innerHTML = "<p style='text-align:center'>📝 Aún no has hecho ninguna predicción</p>";
        return;
    }
    
    let html = "";
    for (let [id, pred] of Object.entries(usuarioActual.predicciones)) {
        const partido = partidos.find(p => p.id === parseInt(id));
        if (!partido) continue;
        
        const predTexto = pred === '1' ? partido.equipoA : pred === '2' ? partido.equipoB : "Empate";
        const realTexto = partido.resultadoReal ? 
            (partido.resultadoReal === '1' ? partido.equipoA : partido.resultadoReal === '2' ? partido.equipoB : "Empate") : 
            "Pendiente";
        const acierto = partido.resultadoReal !== null && partido.resultadoReal === pred;
        
        html += `
            <div class="match-card">
                <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                <div>📌 Pronóstico: <strong>${predTexto}</strong></div>
                <div>🏁 Resultado real: <strong>${realTexto}</strong></div>
                <div class="puntos" style="background:${acierto ? '#c8e6c9' : '#ffcdd2'}">${acierto ? `✅ +${PUNTOS_POR_ACIERTO} puntos` : "❌ 0 puntos"}</div>
            </div>
        `;
    }
    container.innerHTML = html;
}

// ==================== RENDER CLASIFICACIÓN ====================
function renderClasificacion() {
    const container = document.getElementById("clasificacionList");
    if (!container) return;
    
    if (usuarios.length === 0) {
        container.innerHTML = "<p style='text-align:center'>👥 No hay usuarios registrados</p>";
        return;
    }
    
    let html = `<table><thead><tr><th>#</th><th>Usuario</th><th>Puntos</th></tr></thead><tbody>`;
    usuarios.forEach((user, i) => {
        const medalla = i === 0 ? "🥇 " : i === 1 ? "🥈 " : i === 2 ? "🥉 " : "";
        html += `<tr><td>${i+1}</td><td>${medalla}${user.nombre}</td><td><strong>${user.puntosTotal || 0}</strong></td></tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
}

// ==================== TABS PRINCIPALES ====================
function cambiarTab(tab) {
    const btns = document.querySelectorAll(".tab-btn-main");
    btns.forEach(btn => btn.classList.remove("active"));
    
    document.getElementById("tabPartidos").classList.add("hidden");
    document.getElementById("tabPredicciones").classList.add("hidden");
    document.getElementById("tabClasificacion").classList.add("hidden");
    
    if (tab === 'partidos') {
        btns[0].classList.add("active");
        document.getElementById("tabPartidos").classList.remove("hidden");
        renderPartidos();
    } else if (tab === 'predicciones') {
        btns[1].classList.add("active");
        document.getElementById("tabPredicciones").classList.remove("hidden");
        renderMisPredicciones();
    } else if (tab === 'clasificacion') {
        btns[2].classList.add("active");
        document.getElementById("tabClasificacion").classList.remove("hidden");
        renderClasificacion();
    }
}

// ==================== ADMIN (CONSOLA) ====================
function adminCargarResultado(id, resultado) {
    const partido = partidos.find(p => p.id === id);
    if (!partido) {
        console.log("❌ Partido no existe");
        return;
    }
    partido.resultadoReal = resultado;
    guardarPartidos();
    recalcularPuntos();
    if (usuarioActual) {
        renderPartidos();
        renderMisPredicciones();
        renderClasificacion();
    }
    console.log(`✅ Resultado cargado: ${partido.equipoA} vs ${partido.equipoB} -> ${resultado === '1' ? partido.equipoA : resultado === '2' ? partido.equipoB : 'Empate'}`);
}

function adminReiniciarResultados() {
    partidos.forEach(p => p.resultadoReal = null);
    guardarPartidos();
    recalcularPuntos();
    if (usuarioActual) {
        renderPartidos();
        renderMisPredicciones();
        renderClasificacion();
    }
    console.log("🔄 Resultados reiniciados");
}

function adminVerUsuarios() {
    console.table(usuarios.map(u => ({ Nombre: u.nombre, Usuario: u.usuario, PIN: u.pin, Puntos: u.puntosTotal })));
}

// Exponer funciones admin globalmente
window.adminCargarResultado = adminCargarResultado;
window.adminReiniciarResultados = adminReiniciarResultados;
window.adminVerUsuarios = adminVerUsuarios;
window.borrarDatosGuardados = borrarDatosGuardados;

// ==================== INICIAR ====================
cargarDatos();

if (usuarioActual) {
    mostrarPantallaPrincipal();
} else {
    mostrarPantallaLogin();
    // Generar PIN solo si no hay usuario logueado y estamos en registro
    if (!usuarioActual && document.getElementById("registerPanel") && !document.getElementById("registerPanel").classList.contains("hidden")) {
        generarPin();
    }
}

console.log("🏆 Quiniela Mundial lista!");
console.log("💡 Comandos admin: adminVerUsuarios(), adminCargarResultado(1,'1'), adminReiniciarResultados()");
console.log("💡 Borrar datos guardados: borrarDatosGuardados()");