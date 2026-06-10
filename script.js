// ==================== QUINIELA MUNDIAL 2026 - CON FIREBASE ====================
// Control de jornadas (fase de grupos) y fases (eliminatorias)
// Los resultados se sincronizan para TODOS los usuarios

const PUNTOS_POR_ACIERTO = 1;

// ==================== CONFIGURACIÓN DE FIREBASE ====================
const firebaseConfig = {
    apiKey: "AIzaSyBQUm--jGlatkKEzj1SJqYh09daKjEYe0o",
    authDomain: "quiniela-logisfashion.firebaseapp.com",
    databaseURL: "https://quiniela-logisfashion-default-rtdb.firebaseio.com",
    projectId: "quiniela-logisfashion",
    storageBucket: "quiniela-logisfashion.firebasestorage.app",
    messagingSenderId: "270163524897",
    appId: "1:270163524897:web:d821a27a8395986a665260",
    measurementId: "G-7EN2XCK0Q0"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();
let adminAutenticado = false;

// ==================== FUNCIONES DE FIREBASE ====================
async function autenticarAdmin(email, password) {
    try {
        await auth.signInWithEmailAndPassword(email, password);
        adminAutenticado = true;
        console.log("✅ Autenticado como administrador");
        return true;
    } catch (error) {
        console.error("❌ Error de autenticación:", error);
        adminAutenticado = false;
        return false;
    }
}

async function cargarResultadosFirebase() {
    const snapshot = await database.ref('resultados').once('value');
    const resultados = snapshot.val() || {};
    for (let id in resultados) {
        const partido = partidos.find(p => p.id === parseInt(id));
        if (partido) partido.resultadoReal = resultados[id];
    }
    console.log("✅ Resultados cargados desde Firebase");
    if (usuarioActual) renderPartidos();
}

async function cargarJornadaFirebase() {
    const snapshot = await database.ref('jornadaActiva').once('value');
    const valor = snapshot.val();
    if (valor) {
        jornadaActiva = valor;
        console.log(`📅 Jornada activa: ${jornadaActiva}`);
        if (usuarioActual) renderPartidos();
    }
}

async function cargarFaseFirebase() {
    const snapshot = await database.ref('faseActiva').once('value');
    const valor = snapshot.val();
    if (valor) {
        faseActiva = valor;
        console.log(`🏆 Fase activa: ${faseActiva}`);
        if (usuarioActual) renderPartidos();
    }
}

async function guardarUsuarioFirebase(usuario) {
    await database.ref(`usuarios/${usuario.usuario}`).set(usuario);
}

async function guardarPrediccionFirebase(usuario, partidoId, prediccion) {
    await database.ref(`predicciones/${usuario}/${partidoId}`).set(prediccion);
}

async function cargarPrediccionesFirebase(usuario) {
    const snapshot = await database.ref(`predicciones/${usuario}`).once('value');
    return snapshot.val() || {};
}

// ==================== PARTIDOS OFICIALES MUNDIAL 2026 ====================
let partidos = [];
let etapaActual = "grupos";
let jornadaActiva = 1; // 1, 2 o 3 (solo para fase de grupos)
let faseActiva = "grupos"; // grupos, dieciseisavos, octavos, cuartos, semifinales, tercerpuesto, final
let fasesHorariosVisibles = ["grupos"]; // Fases que se muestran en horarios

function agregarPartido(id, equipoA, equipoB, etapa, grupo = null) {
    partidos.push({
        id: id,
        equipoA: equipoA,
        equipoB: equipoB,
        etapa: etapa,
        grupo: grupo,
        resultadoReal: null,
        fecha: `2026-06-${String(id).padStart(2, '0')}T12:00:00-06:00`
    });
}

// ==================== DATOS PARA LA PESTAÑA HORARIOS ====================
const estadios = {
    1: "Estadio Ciudad de México", 2: "Estadio Guadalajara",
    3: "Estadio Toronto", 4: "Estadio Los Ángeles",
    5: "Estadio Bahía de San Francisco", 6: "Estadio Nueva York Nueva Jersey",
    7: "Estadio Boston", 8: "Estadio BC Place Vancouver",
    9: "Estadio Houston", 10: "Estadio Dallas",
    11: "Estadio Filadelfia", 12: "Estadio Monterrey",
    13: "Estadio Atlanta", 14: "Estadio Seattle",
    15: "Estadio Miami", 16: "Estadio Los Ángeles",
    17: "Estadio Nueva York Nueva Jersey", 18: "Estadio Boston",
    19: "Estadio Kansas City", 20: "Estadio Bahía de San Francisco",
    21: "Estadio Houston", 22: "Estadio Dallas",
    23: "Estadio Toronto", 24: "Estadio Ciudad de México",
    25: "Estadio Atlanta", 26: "Estadio Los Ángeles",
    27: "Estadio BC Place Vancouver", 28: "Estadio Guadalajara",
    29: "Estadio Seattle", 30: "Estadio Boston",
    31: "Estadio Filadelfia", 32: "Estadio Bahía de San Francisco",
    33: "Estadio Houston", 34: "Estadio Toronto",
    35: "Estadio Kansas City", 36: "Estadio Monterrey",
    37: "Estadio Atlanta", 38: "Estadio Los Ángeles",
    39: "Estadio Miami", 40: "Estadio BC Place Vancouver",
    41: "Estadio Dallas", 42: "Estadio Filadelfia",
    43: "Estadio Nueva York Nueva Jersey", 44: "Estadio Bahía de San Francisco",
    45: "Estadio Houston", 46: "Estadio Boston",
    47: "Estadio Toronto", 48: "Estadio Guadalajara",
    49: "Estadio BC Place Vancouver", 50: "Estadio Seattle",
    51: "Estadio Miami", 52: "Estadio Atlanta",
    53: "Estadio Ciudad de México", 54: "Estadio Monterrey",
    55: "Estadio Filadelfia", 56: "Estadio Nueva York Nueva Jersey",
    57: "Estadio Dallas", 58: "Estadio Kansas City",
    59: "Estadio Los Ángeles", 60: "Estadio Bahía de San Francisco",
    61: "Estadio Boston", 62: "Estadio Toronto",
    63: "Estadio Houston", 64: "Estadio Guadalajara",
    65: "Estadio Seattle", 66: "Estadio BC Place Vancouver",
    67: "Estadio Nueva York Nueva Jersey", 68: "Estadio Filadelfia",
    69: "Estadio Miami", 70: "Estadio Atlanta",
    71: "Estadio Kansas City", 72: "Estadio Dallas"
};

const horarios = {
    1: "13:00", 2: "20:00", 3: "13:00", 4: "19:00",
    5: "13:00", 6: "16:00", 7: "19:00", 8: "22:00",
    9: "11:00", 10: "14:00", 11: "17:00", 12: "20:00",
    13: "10:00", 14: "13:00", 15: "16:00", 16: "19:00",
    17: "13:00", 18: "16:00", 19: "19:00", 20: "22:00",
    21: "11:00", 22: "14:00", 23: "17:00", 24: "20:00",
    25: "10:00", 26: "13:00", 27: "16:00", 28: "19:00",
    29: "13:00", 30: "16:00", 31: "19:00", 32: "22:00",
    33: "11:00", 34: "14:00", 35: "20:00", 36: "22:00",
    37: "10:00", 38: "13:00", 39: "16:00", 40: "19:00",
    41: "11:00", 42: "15:00", 43: "18:00", 44: "21:00",
    45: "11:00", 46: "14:00", 47: "17:00", 48: "20:00",
    49: "13:00", 50: "13:00", 51: "16:00", 52: "16:00",
    53: "19:00", 54: "19:00", 55: "14:00", 56: "14:00",
    57: "17:00", 58: "17:00", 59: "20:00", 60: "20:00",
    61: "13:00", 62: "13:00", 63: "18:00", 64: "18:00",
    65: "21:00", 66: "21:00", 67: "15:00", 68: "15:00",
    69: "17:30", 70: "17:30", 71: "20:00", 72: "20:00"
};

const fechasPartidos = {
    1: "11/06/2026", 2: "11/06/2026",
    3: "12/06/2026", 4: "12/06/2026",
    5: "13/06/2026", 6: "13/06/2026", 7: "13/06/2026", 8: "13/06/2026",
    9: "14/06/2026", 10: "14/06/2026", 11: "14/06/2026", 12: "14/06/2026",
    13: "15/06/2026", 14: "15/06/2026", 15: "15/06/2026", 16: "15/06/2026",
    17: "16/06/2026", 18: "16/06/2026", 19: "16/06/2026", 20: "16/06/2026",
    21: "17/06/2026", 22: "17/06/2026", 23: "17/06/2026", 24: "17/06/2026",
    25: "18/06/2026", 26: "18/06/2026", 27: "18/06/2026", 28: "18/06/2026",
    29: "19/06/2026", 30: "19/06/2026", 31: "19/06/2026", 32: "19/06/2026",
    33: "20/06/2026", 34: "20/06/2026", 35: "20/06/2026", 36: "20/06/2026",
    37: "21/06/2026", 38: "21/06/2026", 39: "21/06/2026", 40: "21/06/2026",
    41: "22/06/2026", 42: "22/06/2026", 43: "22/06/2026", 44: "22/06/2026",
    45: "23/06/2026", 46: "23/06/2026", 47: "23/06/2026", 48: "23/06/2026",
    49: "24/06/2026", 50: "24/06/2026", 51: "24/06/2026", 52: "24/06/2026",
    53: "24/06/2026", 54: "24/06/2026",
    55: "25/06/2026", 56: "25/06/2026", 57: "25/06/2026", 58: "25/06/2026",
    59: "25/06/2026", 60: "25/06/2026",
    61: "26/06/2026", 62: "26/06/2026", 63: "26/06/2026", 64: "26/06/2026",
    65: "26/06/2026", 66: "26/06/2026",
    67: "27/06/2026", 68: "27/06/2026", 69: "27/06/2026", 70: "27/06/2026",
    71: "27/06/2026", 72: "27/06/2026"
};

// ==================== DATOS PARA ELIMINATORIAS (HORARIOS) ====================
const horariosEliminatorias = {
    73: "13:00", 74: "13:00", 75: "13:00", 76: "14:00",
    77: "13:00", 78: "13:00", 79: "19:00", 80: "10:00",
    81: "13:00", 82: "19:00", 83: "11:00", 84: "13:00",
    85: "19:00", 86: "11:00", 87: "14:00", 88: "19:00",
    89: "14:00", 90: "14:00", 91: "11:00", 92: "16:00",
    93: "11:00", 94: "14:00", 95: "14:00", 96: "19:00",
    97: "13:00", 98: "16:00", 99: "13:00", 100: "16:00",
    101: "16:00", 102: "16:00",
    103: "14:00",
    104: "14:00"
};

const estadiosEliminatorias = {
    73: "Estadio Los Ángeles", 74: "Estadio Boston", 75: "Estadio Monterrey", 76: "Estadio Houston",
    77: "Estadio Nueva York Nueva Jersey", 78: "Estadio Dallas", 79: "Estadio Ciudad de México", 80: "Estadio Atlanta",
    81: "Estadio Bahía de San Francisco", 82: "Estadio Seattle", 83: "Estadio Toronto", 84: "Estadio Los Ángeles",
    85: "Estadio BC Place Vancouver", 86: "Estadio Miami", 87: "Estadio Kansas City", 88: "Estadio Dallas",
    89: "Estadio Filadelfia", 90: "Estadio Houston", 91: "Estadio Nueva York Nueva Jersey", 92: "Estadio Ciudad de México",
    93: "Estadio Dallas", 94: "Estadio Seattle", 95: "Estadio Atlanta", 96: "Estadio BC Place Vancouver",
    97: "Estadio Boston", 98: "Estadio Los Ángeles", 99: "Estadio Miami", 100: "Estadio Kansas City",
    101: "Estadio Dallas", 102: "Estadio Atlanta",
    103: "Estadio Miami",
    104: "Estadio Nueva York Nueva Jersey"
};

const fechasEliminatorias = {
    73: "28/06/2026", 74: "29/06/2026", 75: "29/06/2026", 76: "29/06/2026",
    77: "30/06/2026", 78: "30/06/2026", 79: "30/06/2026", 80: "01/07/2026",
    81: "01/07/2026", 82: "01/07/2026", 83: "02/07/2026", 84: "02/07/2026",
    85: "02/07/2026", 86: "03/07/2026", 87: "03/07/2026", 88: "03/07/2026",
    89: "04/07/2026", 90: "04/07/2026", 91: "05/07/2026", 92: "05/07/2026",
    93: "06/07/2026", 94: "06/07/2026", 95: "07/07/2026", 96: "07/07/2026",
    97: "09/07/2026", 98: "10/07/2026", 99: "11/07/2026", 100: "11/07/2026",
    101: "14/07/2026", 102: "15/07/2026",
    103: "18/07/2026",
    104: "19/07/2026"
};

// ==================== FASE DE GRUPOS ====================
agregarPartido(1, "México", "Sudáfrica", "Grupo A", "A");
agregarPartido(2, "República de Corea", "República Checa", "Grupo A", "A");
agregarPartido(3, "Canadá", "Bosnia y Herzegovina", "Grupo B", "B");
agregarPartido(4, "Estados Unidos", "Paraguay", "Grupo D", "D");
agregarPartido(5, "Catar", "Suiza", "Grupo B", "B");
agregarPartido(6, "Brasil", "Marruecos", "Grupo C", "C");
agregarPartido(7, "Haití", "Escocia", "Grupo C", "C");
agregarPartido(8, "Australia", "Turquía", "Grupo D", "D");
agregarPartido(9, "Alemania", "Curazao", "Grupo E", "E");
agregarPartido(10, "Países Bajos", "Japón", "Grupo F", "F");
agregarPartido(11, "Costa de Marfil", "Ecuador", "Grupo E", "E");
agregarPartido(12, "Suecia", "Túnez", "Grupo F", "F");
agregarPartido(13, "España", "Cabo Verde", "Grupo H", "H");
agregarPartido(14, "Bélgica", "Egipto", "Grupo G", "G");
agregarPartido(15, "Arabia Saudí", "Uruguay", "Grupo H", "H");
agregarPartido(16, "RI de Irán", "Nueva Zelanda", "Grupo G", "G");
agregarPartido(17, "Francia", "Senegal", "Grupo I", "I");
agregarPartido(18, "Irak", "Noruega", "Grupo I", "I");
agregarPartido(19, "Argentina", "Argelia", "Grupo J", "J");
agregarPartido(20, "Austria", "Jordania", "Grupo J", "J");
agregarPartido(21, "Portugal", "RD Congo", "Grupo K", "K");
agregarPartido(22, "Inglaterra", "Croacia", "Grupo L", "L");
agregarPartido(23, "Ghana", "Panamá", "Grupo L", "L");
agregarPartido(24, "Uzbekistán", "Colombia", "Grupo K", "K");
agregarPartido(25, "República Checa", "Sudáfrica", "Grupo A", "A");
agregarPartido(26, "Suiza", "Bosnia y Herzegovina", "Grupo B", "B");
agregarPartido(27, "Canadá", "Catar", "Grupo B", "B");
agregarPartido(28, "México", "República de Corea", "Grupo A", "A");
agregarPartido(29, "Estados Unidos", "Australia", "Grupo D", "D");
agregarPartido(30, "Escocia", "Marruecos", "Grupo C", "C");
agregarPartido(31, "Brasil", "Haití", "Grupo C", "C");
agregarPartido(32, "Turquía", "Paraguay", "Grupo D", "D");
agregarPartido(33, "Países Bajos", "Suecia", "Grupo F", "F");
agregarPartido(34, "Alemania", "Costa de Marfil", "Grupo E", "E");
agregarPartido(35, "Ecuador", "Curazao", "Grupo E", "E");
agregarPartido(36, "Túnez", "Japón", "Grupo F", "F");
agregarPartido(37, "España", "Arabia Saudí", "Grupo H", "H");
agregarPartido(38, "Bélgica", "Irán", "Grupo G", "G");
agregarPartido(39, "Uruguay", "Cabo Verde", "Grupo H", "H");
agregarPartido(40, "Nueva Zelanda", "Egipto", "Grupo G", "G");
agregarPartido(41, "Argentina", "Austria", "Grupo J", "J");
agregarPartido(42, "Francia", "Irak", "Grupo I", "I");
agregarPartido(43, "Noruega", "Senegal", "Grupo I", "I");
agregarPartido(44, "Jordania", "Argelia", "Grupo J", "J");
agregarPartido(45, "Portugal", "Uzbekistán", "Grupo K", "K");
agregarPartido(46, "Inglaterra", "Ghana", "Grupo L", "L");
agregarPartido(47, "Panamá", "Croacia", "Grupo L", "L");
agregarPartido(48, "Colombia", "RD Congo", "Grupo K", "K");
agregarPartido(49, "Suiza", "Canadá", "Grupo B", "B");
agregarPartido(50, "Bosnia y Herzegovina", "Catar", "Grupo B", "B");
agregarPartido(51, "Escocia", "Brasil", "Grupo C", "C");
agregarPartido(52, "Marruecos", "Haití", "Grupo C", "C");
agregarPartido(53, "República Checa", "México", "Grupo A", "A");
agregarPartido(54, "Sudáfrica", "República de Corea", "Grupo A", "A");
agregarPartido(55, "Curazao", "Costa de Marfil", "Grupo E", "E");
agregarPartido(56, "Ecuador", "Alemania", "Grupo E", "E");
agregarPartido(57, "Japón", "Suecia", "Grupo F", "F");
agregarPartido(58, "Túnez", "Países Bajos", "Grupo F", "F");
agregarPartido(59, "Turquía", "Estados Unidos", "Grupo D", "D");
agregarPartido(60, "Paraguay", "Australia", "Grupo D", "D");
agregarPartido(61, "Noruega", "Francia", "Grupo I", "I");
agregarPartido(62, "Senegal", "Irak", "Grupo I", "I");
agregarPartido(63, "Cabo Verde", "Arabia Saudí", "Grupo H", "H");
agregarPartido(64, "Uruguay", "España", "Grupo H", "H");
agregarPartido(65, "Egipto", "Irán", "Grupo G", "G");
agregarPartido(66, "Nueva Zelanda", "Bélgica", "Grupo G", "G");
agregarPartido(67, "Panamá", "Inglaterra", "Grupo L", "L");
agregarPartido(68, "Croacia", "Ghana", "Grupo L", "L");
agregarPartido(69, "Colombia", "Portugal", "Grupo K", "K");
agregarPartido(70, "RD Congo", "Uzbekistán", "Grupo K", "K");
agregarPartido(71, "Argelia", "Austria", "Grupo J", "J");
agregarPartido(72, "Jordania", "Argentina", "Grupo J", "J");
agregarPartido(73, "2° Grupo A", "2° Grupo B", "Dieciseisavos");
agregarPartido(74, "1° Grupo E", "3° Grupo A/B/C/D/F", "Dieciseisavos");
agregarPartido(75, "1° Grupo F", "2° Grupo C", "Dieciseisavos");
agregarPartido(76, "1° Grupo C", "2° Grupo F", "Dieciseisavos");
agregarPartido(77, "1° Grupo I", "3° Grupo C/D/F/G/H", "Dieciseisavos");
agregarPartido(78, "2° Grupo E", "2° Grupo I", "Dieciseisavos");
agregarPartido(79, "1° Grupo A", "3° Grupo C/E/F/H/I", "Dieciseisavos");
agregarPartido(80, "1° Grupo L", "3° Grupo E/H/I/J/K", "Dieciseisavos");
agregarPartido(81, "1° Grupo D", "3° Grupo B/E/F/I/J", "Dieciseisavos");
agregarPartido(82, "1° Grupo G", "3° Grupo A/E/H/I/J", "Dieciseisavos");
agregarPartido(83, "2° Grupo K", "2° Grupo L", "Dieciseisavos");
agregarPartido(84, "1° Grupo H", "2° Grupo J", "Dieciseisavos");
agregarPartido(85, "1° Grupo B", "3° Grupo E/F/G/I/J", "Dieciseisavos");
agregarPartido(86, "1° Grupo J", "2° Grupo H", "Dieciseisavos");
agregarPartido(87, "1° Grupo K", "3° Grupo D/E/I/J/L", "Dieciseisavos");
agregarPartido(88, "2° Grupo D", "2° Grupo G", "Dieciseisavos");
agregarPartido(89, "Ganador 74", "Ganador 77", "Octavos");
agregarPartido(90, "Ganador 73", "Ganador 75", "Octavos");
agregarPartido(91, "Ganador 76", "Ganador 78", "Octavos");
agregarPartido(92, "Ganador 79", "Ganador 80", "Octavos");
agregarPartido(93, "Ganador 83", "Ganador 84", "Octavos");
agregarPartido(94, "Ganador 81", "Ganador 82", "Octavos");
agregarPartido(95, "Ganador 86", "Ganador 88", "Octavos");
agregarPartido(96, "Ganador 85", "Ganador 87", "Octavos");
agregarPartido(97, "Ganador 89", "Ganador 90", "Cuartos");
agregarPartido(98, "Ganador 93", "Ganador 94", "Cuartos");
agregarPartido(99, "Ganador 91", "Ganador 92", "Cuartos");
agregarPartido(100, "Ganador 95", "Ganador 96", "Cuartos");
agregarPartido(101, "Ganador 97", "Ganador 98", "Semifinal");
agregarPartido(102, "Ganador 99", "Ganador 100", "Semifinal");
agregarPartido(103, "Perdedor 101", "Perdedor 102", "Tercer puesto");
agregarPartido(104, "Ganador 101", "Ganador 102", "Final");

// ==================== USUARIOS ====================
let usuarios = [];
let usuarioActual = null;

// ==================== FUNCIONES DE ALMACENAMIENTO ====================
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

// ==================== REGISTRO ====================
async function hacerRegistro() {
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
    if (!pin || pin.length !== 4 || !/^\d+$/.test(pin)) {
        msgDiv.innerHTML = "❌ Elige un PIN de 4 dígitos (solo números)";
        msgDiv.style.color = "red";
        return;
    }
    
    // Verificar si el usuario ya existe en Firebase
    const snapshot = await database.ref(`usuarios/${usuario}`).once('value');
    if (snapshot.exists()) {
        msgDiv.innerHTML = "❌ Usuario ya registrado. Elige otro";
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
    
    // Guardar en Firebase
    await database.ref(`usuarios/${usuario}`).set(nuevoUsuario);
    
    // También guardar en el array local para compatibilidad
    usuarios.push(nuevoUsuario);
    guardarUsuarios();
    
    localStorage.setItem("recordar_usuario", usuario);
    localStorage.setItem("recordar_pin", pin);
    
    msgDiv.innerHTML = "✅ ¡Registro exitoso! Iniciando sesión...";
    msgDiv.style.color = "green";
    
    setTimeout(() => {
        usuarioActual = nuevoUsuario;
        localStorage.setItem("quiniela_sesion", usuario);
        mostrarPantallaPrincipal();
    }, 1000);
}
// ==================== LOGIN ====================
async function hacerLogin() {
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
    
    // Buscar en Firebase
    const snapshot = await database.ref(`usuarios/${usuario}`).once('value');
    const usuarioData = snapshot.val();
    
    if (!usuarioData) {
        msgDiv.innerHTML = "❌ Usuario no registrado";
        msgDiv.style.color = "red";
        return;
    }
    if (usuarioData.pin !== pin) {
        msgDiv.innerHTML = "❌ PIN incorrecto";
        msgDiv.style.color = "red";
        return;
    }
    
    msgDiv.innerHTML = "✅ ¡Bienvenido!";
    msgDiv.style.color = "green";
    
    usuarioActual = usuarioData;
    localStorage.setItem("quiniela_sesion", usuario);
    
    // Cargar predicciones del usuario
    const prediccionesSnapshot = await database.ref(`predicciones/${usuario}`).once('value');
    usuarioActual.predicciones = prediccionesSnapshot.val() || {};
    
    setTimeout(() => {
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
    
    document.getElementById("userNameDisplay").innerHTML = `👤 ${usuarioActual.nombre} (@${usuarioActual.usuario}) | 🎯 Puntos: ${usuarioActual.puntosTotal || 0}`;
    
    recalcularPuntos();
    renderPartidos();
    renderHorarios();
    renderMisPredicciones();
    renderClasificacion();  // Sin await, es una función async pero no necesitamos esperar
    
    const etapaBtns = document.querySelectorAll(".etapa-btn");
    etapaBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            cambiarEtapa(btn.dataset.etapa);
        });
    });
}
// ==================== MOSTRAR TABS DE AUTH ====================
function mostrarLogin() {
    const btns = document.querySelectorAll(".tabs-auth .tab-btn-auth");
    btns.forEach(btn => btn.classList.remove("active"));
    btns[0].classList.add("active");
    
    document.getElementById("loginPanel").classList.remove("hidden");
    document.getElementById("registerPanel").classList.add("hidden");
}

function mostrarRegistro() {
    const btns = document.querySelectorAll(".tabs-auth .tab-btn-auth");
    btns.forEach(btn => btn.classList.remove("active"));
    btns[1].classList.add("active");
    
    document.getElementById("loginPanel").classList.add("hidden");
    document.getElementById("registerPanel").classList.remove("hidden");
    
    if (usuarioActual) {
        document.getElementById("regNombre").value = usuarioActual.nombre;
        document.getElementById("regUser").value = usuarioActual.usuario;
        document.getElementById("regPin").value = usuarioActual.pin;
    } else {
        document.getElementById("regNombre").value = "";
        document.getElementById("regUser").value = "";
        document.getElementById("regPin").value = "";
    }
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
async function guardarPrediccion(partidoId, resultado) {
    if (!usuarioActual) return;
    
    const partido = partidos.find(p => p.id === partidoId);
    
    // VALIDACIÓN POR JORNADA (FASE DE GRUPOS)
    if (partido.id >= 1 && partido.id <= 72) {
        let jornadaDelPartido = 1;
        if (partido.id >= 25 && partido.id <= 48) {
            jornadaDelPartido = 2;
        } else if (partido.id >= 49 && partido.id <= 72) {
            jornadaDelPartido = 3;
        }
        
        if (jornadaDelPartido > jornadaActiva) {
            alert(`⏳ Esta jornada aún no está disponible. Solo puedes apostar en la Jornada ${jornadaActiva} por ahora.`);
            return;
        }
    }
    
    // VALIDACIÓN POR FASE DE ELIMINATORIAS
    if (partido.id >= 73) {
        let faseDelPartido = "grupos";
        if (partido.id >= 73 && partido.id <= 88) faseDelPartido = "dieciseisavos";
        else if (partido.id >= 89 && partido.id <= 96) faseDelPartido = "octavos";
        else if (partido.id >= 97 && partido.id <= 100) faseDelPartido = "cuartos";
        else if (partido.id === 101 || partido.id === 102) faseDelPartido = "semifinales";
        else if (partido.id === 103) faseDelPartido = "tercerpuesto";
        else if (partido.id === 104) faseDelPartido = "final";
        
        const ordenFases = ["grupos", "dieciseisavos", "octavos", "cuartos", "semifinales", "tercerpuesto", "final"];
        const faseActualIndex = ordenFases.indexOf(faseActiva);
        const fasePartidoIndex = ordenFases.indexOf(faseDelPartido);
        
        if (fasePartidoIndex > faseActualIndex) {
            alert(`⏳ Esta fase aún no está disponible. Actualmente está habilitada: ${faseActiva.toUpperCase()}`);
            return;
        }
    }
    
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
    await guardarPrediccionFirebase(usuarioActual.usuario, partidoId, resultado);
    
    renderPartidos();
    renderMisPredicciones();
    renderClasificacion();
    document.getElementById("userNameDisplay").innerHTML = `👤 ${usuarioActual.nombre} (@${usuarioActual.usuario}) | 🎯 Puntos: ${usuarioActual.puntosTotal || 0}`;
}

// ==================== ADMIN (CONSOLA) ====================
async function adminCargarResultado(id, resultado) {
    if (!adminAutenticado) {
        const email = prompt("🔐 Correo de administrador:");
        const password = prompt("🔐 Contraseña:");
        const ok = await autenticarAdmin(email, password);
        if (!ok) {
            alert("❌ Autenticación fallida. No puedes cambiar resultados.");
            return;
        }
    }
    await database.ref(`resultados/${id}`).set(resultado);
    console.log(`✅ Resultado ${id} -> ${resultado} guardado en Firebase`);
    await cargarResultadosFirebase();
    if (usuarioActual) {
        renderPartidos();
        renderMisPredicciones();
        renderClasificacion();
    }
}

async function adminReiniciarResultados() {
    if (!adminAutenticado) {
        const email = prompt("🔐 Correo de administrador:");
        const password = prompt("🔐 Contraseña:");
        const ok = await autenticarAdmin(email, password);
        if (!ok) {
            alert("❌ Autenticación fallida. No puedes reiniciar resultados.");
            return;
        }
    }
    await database.ref('resultados').set({});
    console.log("🔄 Resultados reiniciados en Firebase");
    await cargarResultadosFirebase();
    if (usuarioActual) {
        renderPartidos();
        renderMisPredicciones();
        renderClasificacion();
    }
}

function adminVerUsuarios() {
    console.table(usuarios.map(u => ({ Nombre: u.nombre, Usuario: u.usuario, PIN: u.pin, Puntos: u.puntosTotal })));
}

// ==================== CONTROL DE JORNADAS (ADMIN) ====================
async function cambiarJornada(jornada) {
    if (!adminAutenticado) {
        const email = prompt("🔐 Correo de administrador:");
        const password = prompt("🔐 Contraseña:");
        const ok = await autenticarAdmin(email, password);
        if (!ok) {
            alert("❌ Autenticación fallida. No puedes cambiar la jornada.");
            return;
        }
    }
    await database.ref('jornadaActiva').set(jornada);
    console.log(`📅 Jornada ${jornada} activada en Firebase`);
    await cargarJornadaFirebase();
    if (usuarioActual) renderPartidos();
}

// ==================== CONTROL DE FASES DE ELIMINATORIAS (ADMIN) ====================
async function cambiarFase(fase) {
    const fasesValidas = ["grupos", "dieciseisavos", "octavos", "cuartos", "semifinales", "tercerpuesto", "final"];
    
    if (!fasesValidas.includes(fase)) {
        console.log("❌ Fase inválida. Usa: grupos, dieciseisavos, octavos, cuartos, semifinales, tercerpuesto, final");
        return;
    }
    
    if (!adminAutenticado) {
        const email = prompt("🔐 Correo de administrador:");
        const password = prompt("🔐 Contraseña:");
        const ok = await autenticarAdmin(email, password);
        if (!ok) {
            alert("❌ Autenticación fallida. No puedes cambiar la fase.");
            return;
        }
    }
    await database.ref('faseActiva').set(fase);
    console.log(`🏆 Fase ${fase} activada en Firebase`);
    await cargarFaseFirebase();
    if (usuarioActual) renderPartidos();
}

// ==================== CONTROL DE HORARIOS (ADMIN) ====================
function mostrarFaseEnHorarios(fase) {
    const fasesValidas = ["grupos", "dieciseisavos", "octavos", "cuartos", "semifinales", "tercerpuesto", "final"];
    
    if (!fasesValidas.includes(fase)) {
        console.log("❌ Fase inválida. Usa: grupos, dieciseisavos, octavos, cuartos, semifinales, tercerpuesto, final");
        return;
    }
    
    if (!fasesHorariosVisibles.includes(fase)) {
        fasesHorariosVisibles.push(fase);
        console.log(`📅 Fase "${fase}" agregada a horarios.`);
    } else {
        console.log(`⚠️ La fase "${fase}" ya está visible en horarios.`);
    }
    renderHorarios();
}

function ocultarFaseEnHorarios(fase) {
    const index = fasesHorariosVisibles.indexOf(fase);
    if (index !== -1) {
        fasesHorariosVisibles.splice(index, 1);
        console.log(`📅 Fase "${fase}" ocultada de horarios.`);
    } else {
        console.log(`⚠️ La fase "${fase}" no está visible en horarios.`);
    }
    renderHorarios();
}

function actualizarEquipoEnHorarios(idPartido, nuevoEquipoA, nuevoEquipoB) {
    const partido = partidos.find(p => p.id === idPartido);
    if (!partido) {
        console.log("❌ Partido no existe");
        return;
    }
    partido.equipoA = nuevoEquipoA;
    partido.equipoB = nuevoEquipoB;
    guardarPartidos();
    renderHorarios();
    renderPartidos();
    console.log(`✅ Partido ${idPartido} actualizado: ${nuevoEquipoA} vs ${nuevoEquipoB}`);
}

// ==================== BLOQUEAR/DESBLOQUEAR PARTIDO INDIVIDUAL ====================
function bloquearPartido(id) {
    const partido = partidos.find(p => p.id === id);
    if (!partido) {
        console.log("❌ Partido no existe");
        return;
    }
    partido.resultadoReal = "bloqueado";
    guardarPartidos();
    renderPartidos();
    console.log(`🔒 Partido ${id}: ${partido.equipoA} vs ${partido.equipoB} ha sido bloqueado.`);
}

function desbloquearPartido(id) {
    const partido = partidos.find(p => p.id === id);
    if (!partido) {
        console.log("❌ Partido no existe");
        return;
    }
    partido.resultadoReal = null;
    guardarPartidos();
    renderPartidos();
    console.log(`🔓 Partido ${id}: ${partido.equipoA} vs ${partido.equipoB} ha sido desbloqueado.`);
}

// ==================== RENDER PARTIDOS ====================
function renderPartidos() {
    const container = document.getElementById("partidosList");
    if (!container) return;

    let partidosFiltrados = [];
    
    if (etapaActual === "grupos") {
        partidosFiltrados = partidos.filter(p => p.id >= 1 && p.id <= 72);
    } else if (etapaActual === "dieciseisavos") {
        partidosFiltrados = partidos.filter(p => p.id >= 73 && p.id <= 88);
    } else if (etapaActual === "octavos") {
        partidosFiltrados = partidos.filter(p => p.id >= 89 && p.id <= 96);
    } else if (etapaActual === "cuartos") {
        partidosFiltrados = partidos.filter(p => p.id >= 97 && p.id <= 100);
    } else if (etapaActual === "semifinales") {
        partidosFiltrados = partidos.filter(p => p.id === 101 || p.id === 102);
    } else if (etapaActual === "tercerpuesto") {
        partidosFiltrados = partidos.filter(p => p.id === 103);
    } else if (etapaActual === "final") {
        partidosFiltrados = partidos.filter(p => p.id === 104);
    } else {
        partidosFiltrados = partidos;
    }

    partidosFiltrados.sort((a, b) => a.id - b.id);

    if (partidosFiltrados.length === 0) {
        container.innerHTML = "<p style='text-align:center'>📭 No hay partidos en esta etapa.</p>";
        return;
    }

    let html = "";
    for (let partido of partidosFiltrados) {
        const prediccionActual = usuarioActual?.predicciones?.[partido.id];
        
        let mensajeEstado = "";
        let claseMensaje = "";
        
        if (partido.resultadoReal !== null && partido.resultadoReal !== "bloqueado") {
            if (prediccionActual === partido.resultadoReal) {
                mensajeEstado = `✅ +${PUNTOS_POR_ACIERTO} puntos`;
                claseMensaje = "acierto";
            } else if (prediccionActual) {
                mensajeEstado = "❌ Predicción errónea";
                claseMensaje = "error";
            } else {
                mensajeEstado = "❌ No apostaste";
                claseMensaje = "error";
            }
        } else if (partido.resultadoReal === "bloqueado") {
            if (prediccionActual) {
                mensajeEstado = "🔒 No puedes cambiar la apuesta";
                claseMensaje = "bloqueado";
            } else {
                mensajeEstado = "🔒 Apuestas cerradas";
                claseMensaje = "bloqueado";
            }
        } else {
            mensajeEstado = "⏳ Partido pendiente";
            claseMensaje = "pendiente";
        }
        
        let resultadoTexto = "";
        if (partido.resultadoReal !== null && partido.resultadoReal !== "bloqueado") {
            resultadoTexto = `🏁 Resultado: ${partido.resultadoReal === '1' ? partido.equipoA : partido.resultadoReal === '2' ? partido.equipoB : "Empate"}`;
        } else if (partido.resultadoReal === "bloqueado") {
            resultadoTexto = "🔒 Partido bloqueado por el administrador";
        } else {
            resultadoTexto = "⏳ Partido pendiente";
        }
        
        let bloqueadoPorJornada = false;
        if (partido.id >= 1 && partido.id <= 72) {
            let jornadaDelPartido = 1;
            if (partido.id >= 25 && partido.id <= 48) {
                jornadaDelPartido = 2;
            } else if (partido.id >= 49 && partido.id <= 72) {
                jornadaDelPartido = 3;
            }
            bloqueadoPorJornada = jornadaDelPartido > jornadaActiva;
        }
        
        let bloqueadoPorFase = false;
        if (partido.id >= 73) {
            let faseDelPartido = "grupos";
            if (partido.id >= 73 && partido.id <= 88) faseDelPartido = "dieciseisavos";
            else if (partido.id >= 89 && partido.id <= 96) faseDelPartido = "octavos";
            else if (partido.id >= 97 && partido.id <= 100) faseDelPartido = "cuartos";
            else if (partido.id === 101 || partido.id === 102) faseDelPartido = "semifinales";
            else if (partido.id === 103) faseDelPartido = "tercerpuesto";
            else if (partido.id === 104) faseDelPartido = "final";
            
            const ordenFases = ["grupos", "dieciseisavos", "octavos", "cuartos", "semifinales", "tercerpuesto", "final"];
            const faseActualIndex = ordenFases.indexOf(faseActiva);
            const fasePartidoIndex = ordenFases.indexOf(faseDelPartido);
            
            bloqueadoPorFase = fasePartidoIndex > faseActualIndex;
        }
        
        const deshabilitado = (partido.resultadoReal !== null) || bloqueadoPorJornada || bloqueadoPorFase;
        
        html += `
            <div class="match-card">
                <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                <div class="pred-buttons">
                    <button class="pred-btn ${prediccionActual === '1' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, '1')" 
                        ${deshabilitado ? 'disabled' : ''}>🏆 ${partido.equipoA}</button>
                    <button class="pred-btn ${prediccionActual === 'X' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, 'X')"
                        ${deshabilitado ? 'disabled' : ''}>🤝 Empate</button>
                    <button class="pred-btn ${prediccionActual === '2' ? 'selected' : ''}" 
                        onclick="guardarPrediccion(${partido.id}, '2')"
                        ${deshabilitado ? 'disabled' : ''}>🏆 ${partido.equipoB}</button>
                </div>
                <div class="resultado-real">${resultadoTexto}</div>
                <div class="puntos ${claseMensaje}">${mensajeEstado}</div>
            </div>
        `;
    }
    container.innerHTML = html;
    
    const jornadaTexto = document.getElementById("jornadaTexto");
    if (jornadaTexto) {
        jornadaTexto.innerText = jornadaActiva;
    }
    
    const faseTexto = document.getElementById("faseTexto");
    if (faseTexto) {
        const nombresFases = {
            grupos: "Fase de Grupos",
            dieciseisavos: "Dieciseisavos",
            octavos: "Octavos",
            cuartos: "Cuartos de Final",
            semifinales: "Semifinales",
            tercerpuesto: "Tercer Puesto",
            final: "Final"
        };
        faseTexto.innerText = nombresFases[faseActiva] || "Fase de Grupos";
    }
}

// ==================== RENDER HORARIOS ====================
function renderHorarios() {
    const container = document.getElementById("horariosList");
    if (!container) return;

    let partidosAMostrar = [];
    
    if (fasesHorariosVisibles.includes("grupos")) {
        partidosAMostrar.push(...partidos.filter(p => p.id >= 1 && p.id <= 72));
    }
    if (fasesHorariosVisibles.includes("dieciseisavos")) {
        partidosAMostrar.push(...partidos.filter(p => p.id >= 73 && p.id <= 88));
    }
    if (fasesHorariosVisibles.includes("octavos")) {
        partidosAMostrar.push(...partidos.filter(p => p.id >= 89 && p.id <= 96));
    }
    if (fasesHorariosVisibles.includes("cuartos")) {
        partidosAMostrar.push(...partidos.filter(p => p.id >= 97 && p.id <= 100));
    }
    if (fasesHorariosVisibles.includes("semifinales")) {
        partidosAMostrar.push(...partidos.filter(p => p.id === 101 || p.id === 102));
    }
    if (fasesHorariosVisibles.includes("tercerpuesto")) {
        partidosAMostrar.push(...partidos.filter(p => p.id === 103));
    }
    if (fasesHorariosVisibles.includes("final")) {
        partidosAMostrar.push(...partidos.filter(p => p.id === 104));
    }

    if (partidosAMostrar.length === 0) {
        container.innerHTML = "<div class='no-data'>📭 No hay horarios disponibles. Activa fases desde consola con mostrarFaseEnHorarios('fase')</div>";
        return;
    }

    const partidosPorFecha = {};
    
    partidosAMostrar.forEach(partido => {
        let fecha;
        if (partido.id <= 72) {
            fecha = fechasPartidos[partido.id];
        } else {
            fecha = fechasEliminatorias[partido.id];
        }
        if (!fecha) fecha = "Fecha por definir";
        
        if (!partidosPorFecha[fecha]) {
            partidosPorFecha[fecha] = [];
        }
        partidosPorFecha[fecha].push(partido);
    });

    const fechasOrdenadas = Object.keys(partidosPorFecha).sort((a,b) => {
        const [da, ma, aa] = a.split('/');
        const [db, mb, ab] = b.split('/');
        return new Date(aa, ma-1, da) - new Date(ab, mb-1, db);
    });

    let html = '<div class="horarios-container">';
    
    fechasOrdenadas.forEach(fecha => {
        const partidosDelDia = partidosPorFecha[fecha];
        html += `
            <div class="horario-card">
                <div class="horario-header">
                    📅 ${fecha}
                    <span class="horario-fecha">${partidosDelDia.length} partidos</span>
                </div>
                <div class="horario-contenido">
        `;
        
        partidosDelDia.forEach(partido => {
            let hora, estadio;
            if (partido.id <= 72) {
                hora = horarios[partido.id] || "Por definir";
                estadio = estadios[partido.id] || "Estadio por confirmar";
            } else {
                hora = horariosEliminatorias[partido.id] || "Por definir";
                estadio = estadiosEliminatorias[partido.id] || "Estadio por confirmar";
            }
            
            const necesitaActualizacion = partido.equipoA.includes("°") || partido.equipoA.includes("Ganador") || partido.equipoA.includes("Perdedor");
            
            html += `
                <div class="horario-partido" data-id="${partido.id}">
                    <div class="horario-equipos">
                        ${partido.equipoA} vs ${partido.equipoB}
                        ${necesitaActualizacion ? '<span class="badge-pendiente">⏳ Pendiente</span>' : ''}
                    </div>
                    <div class="horario-hora">${hora} hrs</div>
                    <div class="horario-estadio">${estadio}</div>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// ==================== RENDER MIS PREDICCIONES ====================
function renderMisPredicciones() {
    const container = document.getElementById("misPrediccionesList");
    if (!container) return;
    
    if (!usuarioActual.predicciones || Object.keys(usuarioActual.predicciones).length === 0) {
        container.innerHTML = "<div class='no-data'>📝 Aún no has hecho ninguna predicción. Ve a la pestaña Partidos y pronostica.</div>";
        return;
    }
    
    let html = "";
    for (let [id, pred] of Object.entries(usuarioActual.predicciones)) {
        const partido = partidos.find(p => p.id === parseInt(id));
        if (!partido) continue;
        
        const predTexto = pred === '1' ? partido.equipoA : pred === '2' ? partido.equipoB : "Empate";
        
        if (partido.resultadoReal !== null && partido.resultadoReal !== "bloqueado") {
            const realTexto = partido.resultadoReal === '1' ? partido.equipoA : 
                             partido.resultadoReal === '2' ? partido.equipoB : "Empate";
            
            if (pred === partido.resultadoReal) {
                html += `
                    <div class="match-card" style="border-left: 5px solid #00A8A8">
                        <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                        <div>📌 Tu pronóstico: <strong>${predTexto}</strong></div>
                        <div>🏁 Resultado final: <strong>${realTexto}</strong></div>
                        <div class="puntos-acierto">🏆 +${PUNTOS_POR_ACIERTO} puntos</div>
                        <div style="margin-top:8px; font-weight:bold; color:#00A8A8">✅ ¡ACERTASTE!</div>
                    </div>
                `;
            } else {
                html += `
                    <div class="match-card" style="border-left: 5px solid #c62828">
                        <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                        <div>📌 Tu pronóstico: <strong>${predTexto}</strong></div>
                        <div>🏁 Resultado final: <strong>${realTexto}</strong></div>
                        <div class="puntos-error">0 puntos</div>
                        <div style="margin-top:8px; font-weight:bold; color:#c62828">❌ Fallaste</div>
                    </div>
                `;
            }
        } else {
            html += `
                <div class="match-card" style="border-left: 5px solid #2196f3">
                    <div class="match-teams">${partido.equipoA} vs ${partido.equipoB}</div>
                    <div>📌 Tu pronóstico: <strong>${predTexto}</strong></div>
                    <div>🏁 Estado: <strong>Partido pendiente</strong></div>
                    <div class="puntos-espera">⏳ En espera de resultado</div>
                </div>
            `;
        }
    }
    container.innerHTML = html;
}

async function renderClasificacion() {
    const container = document.getElementById("clasificacionList");
    if (!container) return;
    
    const snapshot = await database.ref('usuarios').once('value');
    const usuariosData = snapshot.val() || {};
    const usuariosLista = Object.values(usuariosData).sort((a, b) => (b.puntosTotal || 0) - (a.puntosTotal || 0));
    
    if (usuariosLista.length === 0) {
        container.innerHTML = "<div class='no-data'>👥 No hay usuarios registrados aún. ¡Sé el primero!</div>";
        return;
    }
    
    let html = `
        <div class="clasificacion-container">
            <table class="clasificacion-tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>👤 Usuario</th>
                        <th>🏆 Puntos</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    usuariosLista.forEach((user, i) => {
        let medalla = "";
        let claseMedalla = "";
        
        if (i === 0) {
            medalla = "🥇";
            claseMedalla = "medalla-oro";
        } else if (i === 1) {
            medalla = "🥈";
            claseMedalla = "medalla-plata";
        } else if (i === 2) {
            medalla = "🥉";
            claseMedalla = "medalla-bronce";
        } else {
            medalla = i + 1;
            claseMedalla = "";
        }
        
        html += `
            <tr>
                <td class="posicion-col">
                    ${i < 3 ? `<div class="${claseMedalla}">${medalla}</div>` : `<strong>${medalla}</strong>`}
                </td>
                <td class="nombre-col">
                    ${user.nombre} (@${user.usuario})
                    ${i === 0 ? '<span class="lider-badge">🔥 LÍDER</span>' : ''}
                </td>
                <td class="puntos-col">
                    <strong>${user.puntosTotal || 0}</strong>
                </td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
    `;
    
    container.innerHTML = html;
}

// ==================== TABS PRINCIPALES ====================
function cambiarTab(tab) {
    const btns = document.querySelectorAll(".tab-btn-main");
    btns.forEach(btn => btn.classList.remove("active"));
    
    document.getElementById("tabPartidos").classList.add("hidden");
    document.getElementById("tabHorarios").classList.add("hidden");
    document.getElementById("tabPredicciones").classList.add("hidden");
    document.getElementById("tabClasificacion").classList.add("hidden");
    
    if (tab === 'partidos') {
        btns[0].classList.add("active");
        document.getElementById("tabPartidos").classList.remove("hidden");
        renderPartidos();
    } else if (tab === 'horarios') {
        btns[1].classList.add("active");
        document.getElementById("tabHorarios").classList.remove("hidden");
        renderHorarios();
    } else if (tab === 'predicciones') {
        btns[2].classList.add("active");
        document.getElementById("tabPredicciones").classList.remove("hidden");
        renderMisPredicciones();
    } else if (tab === 'clasificacion') {
        btns[3].classList.add("active");
        document.getElementById("tabClasificacion").classList.remove("hidden");
        renderClasificacion();
    }
}

// ==================== CAMBIAR ETAPA ====================
function cambiarEtapa(etapa) {
    etapaActual = etapa;
    const btns = document.querySelectorAll(".etapa-btn");
    btns.forEach(btn => {
        if (btn.dataset.etapa === etapa) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderPartidos();
}

// Exponer funciones globalmente
window.mostrarFaseEnHorarios = mostrarFaseEnHorarios;
window.ocultarFaseEnHorarios = ocultarFaseEnHorarios;
window.actualizarEquipoEnHorarios = actualizarEquipoEnHorarios;
window.adminCargarResultado = adminCargarResultado;
window.adminReiniciarResultados = adminReiniciarResultados;
window.adminVerUsuarios = adminVerUsuarios;
window.cambiarJornada = cambiarJornada;
window.cambiarFase = cambiarFase;
window.bloquearPartido = bloquearPartido;
window.desbloquearPartido = desbloquearPartido;

// ==================== INICIAR ====================
async function init() {
    await cargarResultadosFirebase();
    await cargarJornadaFirebase();
    await cargarFaseFirebase();
    
    const sesionGuardada = localStorage.getItem("quiniela_sesion");
    if (sesionGuardada) {
        const snapshot = await database.ref(`usuarios/${sesionGuardada}`).once('value');
        const usuarioData = snapshot.val();
        if (usuarioData) {
            usuarioActual = usuarioData;
            const predicciones = await cargarPrediccionesFirebase(sesionGuardada);
            usuarioActual.predicciones = predicciones;
            mostrarPantallaPrincipal();
        } else {
            mostrarPantallaLogin();
        }
    } else {
        mostrarPantallaLogin();
    }
    
    const toggleLoginBtn = document.getElementById("toggleLoginPin");
    const loginPinInput = document.getElementById("loginPin");
    if (toggleLoginBtn && loginPinInput) {
        toggleLoginBtn.addEventListener("click", function() {
            if (loginPinInput.type === "password") {
                loginPinInput.type = "text";
                toggleLoginBtn.textContent = "🙈";
            } else {
                loginPinInput.type = "password";
                toggleLoginBtn.textContent = "👁️";
            }
        });
    }
    
    console.log("🏆 Quiniela Mundial 2026 - Con Firebase");
    console.log("💡 Comandos admin (solo para ti):");
    console.log("   adminCargarResultado(id, '1/2/X') - Cargar resultado (todos lo ven)");
    console.log("   adminReiniciarResultados() - Reiniciar resultados");
    console.log("   adminVerUsuarios() - Ver usuarios");
    console.log("   cambiarJornada(1/2/3) - Cambiar jornada activa");
    console.log("   cambiarFase('fase') - Cambiar fase activa");
    console.log("   bloquearPartido(id) - Bloquear partido individual");
    console.log("   desbloquearPartido(id) - Desbloquear partido individual");
    console.log("   mostrarFaseEnHorarios('fase') - Mostrar fase en horarios");
}

init();
