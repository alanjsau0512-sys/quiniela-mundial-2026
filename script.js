* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: linear-gradient(135deg, #1a472a, #0e2a1a);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 30px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

/* ==================== LOGO LOGISFASHION ==================== */
.logo-empresa {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

.logo-simbolo {
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
}

.logo-texto {
    display: flex;
    align-items: baseline;
    font-family: 'Arial Black', 'Helvetica', sans-serif;
    letter-spacing: -1.5px;
    line-height: 1;
}

.logo-logis {
    font-size: 42px;
    font-weight: 900;
    color: #2C3E50;           /* Gris oscuro del logo */
}

.logo-fashion {
    font-size: 42px;
    font-weight: 900;
    color: #00A8A8;           /* Verde agua oficial */
}

.logo-reg {
    font-size: 18px;
    color: #555;
    margin-left: 3px;
    align-self: flex-end;
}

/* Efectos bonitos (manteniendo el espíritu de tu animación) */
.logo-empresa:hover .logo-simbolo {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.logo-simbolo svg {
    transition: transform 0.4s ease;
}

.logo-empresa:hover .logo-simbolo svg {
    transform: rotate(8deg) scale(1.08);
}

/* Responsive */
@media (max-width: 768px) {
    .logo-logis, .logo-fashion {
        font-size: 32px;
    }
    .logo-simbolo svg {
        width: 85px;
        height: 78px;
    }
    .logo-reg {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .logo-logis, .logo-fashion {
        font-size: 28px;
    }
}

/* Subtítulo */
.subtitulo {
    text-align: center;
    color: #1e5631;
    font-size: 1.4rem;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e0e0e0;
}

/* Pantalla de autenticación */
.auth-screen {
    background: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
}

.tabs-auth {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn-auth {
    flex: 1;
    padding: 12px;
    background: #ddd;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
}

.tab-btn-auth.active {
    background: #2e7d32;
    color: white;
}

.auth-panel {
    background: white;
    padding: 25px;
    border-radius: 15px;
}

.auth-panel h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #1e5631;
}

.auth-panel input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid #ddd;
    border-radius: 25px;
    font-size: 1rem;
}

.auth-panel input:focus {
    outline: none;
    border-color: #2e7d32;
}

.pin-row {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 15px;
}

.pin-row input {
    flex: 1;
    margin-bottom: 0;
    background: #f0f0f0;
}

.pin-row small {
    font-size: 0.7rem;
    color: #666;
}

.auth-panel button:not(.pin-row button) {
    width: 100%;
    background: #2e7d32;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

.auth-panel button:hover {
    opacity: 0.9;
}

.msg-error {
    text-align: center;
    margin-top: 10px;
    font-size: 0.9rem;
}

.hidden {
    display: none;
}

/* Pantalla principal */
.main-screen {
    background: #f5f5f5;
    border-radius: 20px;
    padding: 20px;
}

.header-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1e5631;
    color: white;
    padding: 12px 20px;
    border-radius: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 10px;
}

.user-info {
    font-size: 0.9rem;
}

.btn-salir {
    background: #ff5722;
    color: white;
    border: none;
    padding: 6px 15px;
    border-radius: 20px;
    cursor: pointer;
}

/* Pestañas principales */
.tabs-main {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 20px;
}

.tab-btn-main {
    flex: 1;
    min-width: 80px;
    padding: 10px 8px;
    background: #ddd;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.85rem;
    text-align: center;
}

.tab-btn-main.active {
    background: #2e7d32;
    color: white;
}

.tab-panel {
    background: white;
    padding: 20px;
    border-radius: 15px;
    min-height: 400px;
}

.tab-panel h3 {
    margin-bottom: 15px;
    color: #1e5631;
    font-size: 1.2rem;
}

/* Tarjetas de partidos */
.match-card {
    background: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 15px;
}

.match-teams {
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    padding: 10px;
    background: #e8f5e9;
    border-radius: 10px;
    margin-bottom: 10px;
}

.pred-buttons {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

.pred-btn {
    padding: 8px 12px;
    background: #e0e0e0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.85rem;
}

.pred-btn.selected {
    background: #2e7d32;
    color: white;
}

.pred-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.resultado-real {
    text-align: center;
    font-size: 0.8rem;
    color: #666;
    margin-top: 10px;
    padding: 5px;
    background: #e8eaf6;
    border-radius: 10px;
}

.puntos {
    text-align: center;
    font-weight: bold;
    margin-top: 8px;
    padding: 5px;
    border-radius: 10px;
}

.puntos.acierto {
    background: #c8e6c9;
    color: #2e7d32;
}

.puntos.error {
    background: #ffcdd2;
    color: #c62828;
}

.puntos.bloqueado {
    background: #fff3e0;
    color: #e65100;
}

.puntos.pendiente {
    background: #e8eaf6;
    color: #283593;
}

/* Pestañas de etapas (scroll horizontal en móvil) */
.etapa-tabs {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 8px;
    margin-bottom: 20px;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch;
}

.etapa-btn {
    flex: 0 0 auto;
    background: #e0e0e0;
    border: none;
    padding: 8px 12px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.8rem;
    white-space: nowrap;
    transition: all 0.2s ease;
}

.etapa-btn:hover {
    background: #c8e6c9;
    transform: scale(1.02);
}

.etapa-btn.active {
    background: #2e7d32;
    color: white;
}

/* Tabla de clasificación */
.clasificacion-container {
    background: linear-gradient(135deg, #1a472a 0%, #0e2a1a 100%);
    border-radius: 20px;
    padding: 3px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.clasificacion-tabla {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background: white;
    border-radius: 18px;
    overflow: hidden;
}

.clasificacion-tabla thead tr {
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
}

.clasificacion-tabla th {
    color: white;
    font-weight: bold;
    padding: 12px 8px;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.clasificacion-tabla th:first-child {
    border-top-left-radius: 18px;
}

.clasificacion-tabla th:last-child {
    border-top-right-radius: 18px;
}

.clasificacion-tabla td {
    padding: 10px 8px;
    text-align: center;
    border-bottom: 1px solid #e8f5e9;
    font-size: 0.85rem;
}

.clasificacion-tabla tbody tr:nth-child(even) {
    background-color: #f1f8e9;
}

.clasificacion-tabla tbody tr:nth-child(odd) {
    background-color: #ffffff;
}

.clasificacion-tabla tbody tr:hover {
    background-color: #c8e6c9;
}

.nombre-col {
    text-align: left;
    font-weight: 500;
}

.puntos-col {
    font-weight: bold;
    font-size: 1rem;
    color: #2e7d32;
}

/* Medallas */
.medalla-oro {
    background: linear-gradient(135deg, #ffd700, #ffb300);
    color: #1a1a1a;
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.9rem;
}

.medalla-plata {
    background: linear-gradient(135deg, #c0c0c0, #a0a0a0);
    color: #1a1a1a;
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.9rem;
}

.medalla-bronce {
    background: linear-gradient(135deg, #cd7f32, #b8692a);
    color: white;
    width: 28px;
    height: 28px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 0.9rem;
}

.lider-badge {
    background: linear-gradient(135deg, #ffd700, #ffb300);
    color: #1a1a1a;
    border-radius: 20px;
    padding: 2px 8px;
    font-size: 0.6rem;
    font-weight: bold;
    margin-left: 8px;
    display: inline-block;
}

.no-data {
    text-align: center;
    padding: 40px 20px;
    color: #666;
    background: white;
    border-radius: 20px;
}

/* Estilos para la pestaña HORARIOS */
.horarios-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.horario-card {
    background: #f9f9f9;
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.horario-header {
    background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
    color: white;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.horario-fecha {
    background: rgba(255,255,255,0.2);
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
}

.horario-contenido {
    padding: 12px;
}

.horario-partido {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    flex-wrap: wrap;
    gap: 8px;
}

.horario-partido:last-child {
    border-bottom: none;
}

.horario-equipos {
    font-weight: bold;
    font-size: 0.9rem;
    flex: 2;
    min-width: 150px;
}

.horario-hora {
    background: #e8f5e9;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    color: #2e7d32;
    font-weight: bold;
    min-width: 70px;
    text-align: center;
}

.horario-estadio {
    color: #666;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 120px;
}

.horario-estadio:before {
    content: "🏟️";
    font-size: 0.8rem;
}

/* Responsive para celulares */
@media (max-width: 600px) {
    .container {
        padding: 12px;
    }
    
    .logo-circulo {
        width: 45px;
        height: 45px;
    }
    
    .logo-letra {
        font-size: 1.1rem;
    }
    
    .logo-nombre {
        font-size: 0.9rem;
    }
    
    .logo-slogan {
        font-size: 0.6rem;
    }
    
    .subtitulo {
        font-size: 1.1rem;
    }
    
    .tabs-main {
        flex-wrap: wrap;
    }
    
    .tab-btn-main {
        flex: 1 0 calc(50% - 5px);
        font-size: 0.7rem;
        padding: 8px 4px;
    }
    
    .auth-panel {
        padding: 15px;
    }
    
    .match-teams {
        font-size: 0.9rem;
        padding: 8px;
    }
    
    .pred-btn {
        padding: 6px 10px;
        font-size: 0.7rem;
    }
    
    .clasificacion-tabla th,
    .clasificacion-tabla td {
        padding: 8px 4px;
        font-size: 0.7rem;
    }
    
    .medalla-oro, .medalla-plata, .medalla-bronce {
        width: 24px;
        height: 24px;
        font-size: 0.7rem;
    }
    
    .lider-badge {
        font-size: 0.5rem;
        padding: 2px 5px;
        margin-left: 4px;
    }
    
    .horario-partido {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .horario-equipos {
        width: 100%;
        font-size: 0.85rem;
    }
    
    .horario-hora, .horario-estadio {
        font-size: 0.7rem;
    }
    
    .etapa-btn {
        padding: 6px 10px;
        font-size: 0.7rem;
    }
    
    .tab-panel {
        padding: 12px;
    }
}
