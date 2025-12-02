/**
 * DATA DE LA MALLA
 * Basada en la información proporcionada y la imagen.
 * Los nombres deben ser exactos para que funcionen los ID internos.
 */
const curriculumData = [
    // --- SEMESTRE 1 ---
    { id: 's1-1', name: 'Formación Ciudadana', semester: 1, req: [] },
    { id: 's1-2', name: 'Mantenimiento Base Mecánico', semester: 1, req: [] },
    { id: 's1-3', name: 'Medición y Verificación', semester: 1, req: [] },
    { id: 's1-4', name: 'Lectura de Manuales e Int. de Planos', semester: 1, req: [] },
    { id: 's1-5', name: 'Resolución de Problemas en Álgebra', semester: 1, req: [] },

    // --- SEMESTRE 2 ---
    { id: 's2-1', name: 'Administración', semester: 2, req: [] },
    { id: 's2-2', name: 'Taller Mecánico Minero', semester: 2, req: [] },
    { id: 's2-3', name: 'Seguridad Industrial y Maniobras', semester: 2, req: [] },
    { id: 's2-4', name: 'Mantenimiento en Sistemas de Lubricación', semester: 2, req: [] },
    { id: 's2-5', name: 'Fundamentos de Electricidad en Eq. Min.', semester: 2, req: [] },
    { id: 's2-6', name: 'Procesos Productivos de Plantas Mineras', semester: 2, req: [] },
    { id: 's2-7', name: 'Funciones y Geometría', semester: 2, req: [] },

    // --- SEMESTRE 3 ---
    { id: 's3-1', name: 'Electivo Tendencias I', semester: 3, req: [] },
    { id: 's3-2', name: 'Física Mecánica', semester: 3, req: [] },
    { id: 's3-3', name: 'Inglés I', semester: 3, req: [] },
    { id: 's3-4', name: 'Mantenimiento de Equipos Hidráulicos I', semester: 3, req: [] },
    { id: 's3-5', name: 'Mant. en Componentes Mecánicos de Desgaste', semester: 3, req: [] },
    { id: 's3-6', name: 'Ensayos no Destructivos en Eq. Minería', semester: 3, req: [] },

    // --- SEMESTRE 4 ---
    { id: 's4-1', name: 'Electivo Tendencias II', semester: 4, req: [] },
    { id: 's4-2', name: 'Innovación y Emprendimiento I', semester: 4, req: [] },
    { id: 's4-3', name: 'Mant. en Sistemas de Transmisión', semester: 4, req: [] },
    // REQUISITO: Hidraulicos I + Sist Lubricación
    { id: 's4-4', name: 'Mantenimiento de Equipos Hidráulicos II', semester: 4, req: ['s3-4', 's2-4'] }, 
    { id: 's4-5', name: 'Análisis de Vibraciones en Equipos', semester: 4, req: [] },
    // REQUISITO: Ensayos no Destructivos + Componentes Mecanicos
    { id: 's4-6', name: 'Proyecto Integrado', semester: 4, req: ['s3-6', 's3-5'] },

    // --- SEMESTRE 5 ---
    { id: 's5-1', name: 'Cálculo Diferencial', semester: 5, req: [] },
    // REQUISITO: Algebra
    { id: 's5-2', name: 'Estadística', semester: 5, req: ['s1-5'] },
    // REQUISITO: Innovacion I
    { id: 's5-3', name: 'Innovación y Emprendimiento II', semester: 5, req: ['s4-2'] },
    { id: 's5-4', name: 'Coordinación del Mantenimiento', semester: 5, req: [] },
    { id: 's5-5', name: 'Gestión de Recursos para el Mantenimiento', semester: 5, req: [] },
    { id: 's5-6', name: 'Gestión de Resultados Operacionales', semester: 5, req: [] },

    // --- SEMESTRE 6 ---
    { id: 's6-1', name: 'Finanzas', semester: 6, req: [] },
    // REQUISITO: Ingles I
    { id: 's6-2', name: 'Inglés II', semester: 6, req: ['s3-3'] },
    { id: 's6-3', name: 'Gestión de Repuestos de Mantenimiento', semester: 6, req: [] },
    { id: 's6-4', name: 'Servicios de Mantenimiento de Equipos Fijos', semester: 6, req: [] },
    { id: 's6-5', name: 'Gestión de Riesgos del Área de Trabajo', semester: 6, req: [] },
    { id: 's6-6', name: 'Programación del Mantenimiento', semester: 6, req: [] },

    // --- SEMESTRE 7 ---
    { id: 's7-1', name: 'Electivo Tendencias III', semester: 7, req: [] },
    { id: 's7-2', name: 'Formulación y Gestión de Proyectos', semester: 7, req: [] },
    { id: 's7-3', name: 'Gestión de Personas', semester: 7, req: [] },
    // REQUISITO: Ingles II (y I, implicito por cadena)
    { id: 's7-4', name: 'Inglés III', semester: 7, req: ['s6-2'] },
    { id: 's7-5', name: 'Confiabilidad Operacional', semester: 7, req: [] },
    { id: 's7-6', name: 'Análisis de Fallas en Equipos Mineros', semester: 7, req: [] },

    // --- SEMESTRE 8 ---
    { id: 's8-1', name: 'Electivo Tendencias IV', semester: 8, req: [] },
    { id: 's8-2', name: 'Electivo Tendencias V', semester: 8, req: [] },
    // REQUISITO: Innovacion II (y I, implicito por cadena)
    { id: 's8-3', name: 'Innovación y Emprendimiento III', semester: 8, req: ['s5-3'] },
    // REQUISITO: Programacion del Mantenimiento
    { id: 's8-4', name: 'Gestión de Presupuestos y Plan de Mant.', semester: 8, req: ['s6-6'] },
    // REQUISITO: Confiabilidad Operacional
    { id: 's8-5', name: 'Estrategias de Mantenimiento y Negocio', semester: 8, req: ['s7-5'] },
    // REQUISITO: Analisis de Fallas + Servicios de Mant. Fijos
    { id: 's8-6', name: 'Proyecto de Título Profesional', semester: 8, req: ['s7-6', 's6-4'] }
];

// Estado global para guardar ID de ramos aprobados
let approvedSubjects = new Set();

/**
 * Inicialización al cargar la página
 */
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderGrid();
    updateProgress();
});

/**
 * Renderiza la malla en columnas por semestre
 */
function renderGrid() {
    const gridContainer = document.getElementById('malla-grid');
    gridContainer.innerHTML = ''; // Limpiar

    // Crear 8 columnas
    for (let i = 1; i <= 8; i++) {
        const semesterCol = document.createElement('div');
        semesterCol.className = 'semester-column';

        // Título del semestre
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `${i}° Semestre`;
        semesterCol.appendChild(title);

        // Filtrar ramos de este semestre
        const subjectsInSemester = curriculumData.filter(sub => sub.semester === i);

        subjectsInSemester.forEach(sub => {
            const card = createSubjectCard(sub);
            semesterCol.appendChild(card);
        });

        gridContainer.appendChild(semesterCol);
    }
}

/**
 * Crea el elemento HTML de una tarjeta de ramo
 */
function createSubjectCard(subject) {
    const card = document.createElement('div');
    card.className = 'subject-card';
    card.id = `card-${subject.id}`;
    
    // Verificar estado
    const isApproved = approvedSubjects.has(subject.id);
    const { isLocked, missingNames } = checkPrerequisites(subject);

    if (isApproved) {
        card.classList.add('approved');
    } else if (isLocked) {
        card.classList.add('locked');
    }

    // Contenido HTML de la tarjeta
    card.innerHTML = `<div class="subject-name">${subject.name}</div>`;
    
    // Evento Click
    card.onclick = () => toggleSubject(subject.id, isLocked, missingNames);

    return card;
}

/**
 * Verifica si un ramo está bloqueado por requisitos
 */
function checkPrerequisites(subject) {
    if (subject.req.length === 0) return { isLocked: false, missingNames: [] };

    const missingIds = subject.req.filter(reqId => !approvedSubjects.has(reqId));
    
    if (missingIds.length > 0) {
        // Buscar nombres de los faltantes para el mensaje
        const missingNames = missingIds.map(id => {
            const reqSub = curriculumData.find(s => s.id === id);
            return reqSub ? reqSub.name : id;
        });
        return { isLocked: true, missingNames };
    }
    
    return { isLocked: false, missingNames: [] };
}

/**
 * Maneja el clic en un ramo
 */
function toggleSubject(id, isLocked, missingNames) {
    // Si está bloqueado y NO está aprobado (no se puede marcar)
    if (isLocked && !approvedSubjects.has(id)) {
        showModal(missingNames);
        return;
    }

    // Alternar estado
    if (approvedSubjects.has(id)) {
        approvedSubjects.delete(id);
    } else {
        approvedSubjects.add(id);
    }

    saveState();
    renderGrid(); // Re-renderizar para actualizar estados de bloqueos en cadena
    updateProgress();
}

/**
 * Muestra el modal de error/bloqueo
 */
function showModal(missingNames) {
    const modal = document.getElementById('modal');
    const msg = document.getElementById('modal-message');
    
    const lista = missingNames.map(n => `<li>• ${n}</li>`).join('');
    msg.innerHTML = `No puedes tomar este ramo porque faltan los siguientes requisitos:<br><ul style="text-align:left; margin-top:10px; margin-left:20px;">${lista}</ul>`;
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

/**
 * Persistencia en LocalStorage
 */
function saveState() {
    localStorage.setItem('mineriaProgress', JSON.stringify([...approvedSubjects]));
}

function loadState() {
    const saved = localStorage.getItem('mineriaProgress');
    if (saved) {
        approvedSubjects = new Set(JSON.parse(saved));
    }
}

function resetProgress() {
    if(confirm("¿Estás seguro de borrar todo el progreso?")) {
        approvedSubjects.clear();
        saveState();
        renderGrid();
        updateProgress();
    }
}

/**
 * Calcula y actualiza la barra de progreso
 */
function updateProgress() {
    const total = curriculumData.length;
    const approved = approvedSubjects.size;
    const percentage = Math.round((approved / total) * 100);

    document.getElementById('progress-text').innerText = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}
