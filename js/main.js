// ============================================
// 1. TRADUCCIONES
// ============================================
const translations = {
    es: {
        "doc-title": "Portafolio | Sofia Micol Añazgo",
        "nav-aria-label": "Navegacion principal",
        "nav-inicio": "Inicio",
        "nav-sobre": "Sobre mí",
        "nav-formacion": "Formación",
        "nav-contacto": "Contacto",
        "lang-toggle-aria": "Cambiar de idioma",
        "lang-btn": "EN",
        "theme-toggle-aria": "Cambiar tema",
        "header-portfolio": "PORTFOLIO PERSONAL",
        "header-nombre": "Sofia Micol Añazgo",
        "header-subtitulo": "<em>Estudiante de Licenciatura en Análisis de Sistemas</em>",
        "header-btn-sobre": "Sobre mi",
        "header-btn-contacto": "Contacto",
        "header-foto-alt": "Foto de Sofía Micol Añazgo",
        "sobre-titulo": "Sobre mí",
        "sobre-intro": "Soy estudiante de la <strong>Licenciatura en Análisis de Sistemas</strong> con un enfoque en Inteligencia Artificial.",
        "sobre-quote": "\"Mi enfoque está en comprender cómo los agentes de IA interpretan nuestras instrucciones, cómo razonan detrás de cada respuesta y cómo pueden actuar de manera autónoma sin supervisión absoluta, manteniendo coherencia, seguridad y utilidad en sus decisiones.\"",
        "interes-1-titulo": "Desarrollo Web", "interes-1-desc": "Creación de aplicaciones y sitios web funcionales.",
        "interes-2-titulo": "Bases de datos", "interes-2-desc": "Diseño y optimización de almacenamiento de datos.",
        "interes-3-titulo": "Inteligencia Artificial", "interes-3-desc": "Modelos de ML, LLMs y agentes autónomos.",
        "interes-4-titulo": "Automatización", "interes-4-desc": "Optimización de procesos con soluciones inteligentes.",
        "interes-5-titulo": "Machine Learning", "interes-5-desc": "Algoritmos y predicción basada en datos.",
        "interes-6-titulo": "Análisis de datos", "interes-6-desc": "Extracción de insights para la toma de decisiones.",
        "interes-7-titulo": "UX / Producto", "interes-7-desc": "Experiencia de usuario y desarrollo de productos digitales.",
        "interes-8-titulo": "Comunicación digital", "interes-8-desc": "Contenido, redes y difusión tecnológica.",
        "formacion-titulo": "Estudiante en constante aprendizaje",
        "formacion-subtitulo": "Siempre buscando expandir mis conocimientos en IA, desarrollo y tecnología.",
        "social-linkedin": "LinkedIn", "social-github": "GitHub",
        "edu-1-institucion": "UNSa", "edu-estado-curso": "En curso", "edu-1-titulo": "Licenciatura en Análisis de Sistemas", "edu-1-fecha": "2024 - Presente",
        "edu-2-institucion": "UPATECO", "edu-2-titulo": "Tecnicatura Universitaria en ML e IA", "edu-2-fecha": "2025 - Presente",
        "edu-3-institucion": "Formación Complementaria", "edu-estado-finalizado": "Finalizado", "edu-3-titulo": "Video Marketing: Edición para Emprender", "edu-3-fecha": "Ago 2025 - Oct 2025",
        "edu-4-institucion": "Dept. Informática - UNSa", "edu-estado-certificados": "Certificados", "edu-4-titulo": "Jornadas y Talleres de Especialización", "edu-4-fecha": "2024 - 2025",
        "edu-4-item-1": "Introducción a la Ciencia de Datos (2025)", "edu-4-item-2": "Taller: Preprocesamiento de Datos para ML en Python (2024)", "edu-4-item-3": "Taller: ¿Cómo funciona GPT? (2024)", "edu-4-item-4": "Taller: Aspectos Legales de la IA (2024)",
        "separador-materias": "Materias cursadas hasta hoy",
        "tabla-th-materia": "Materia", "tabla-th-ano": "Año", "tabla-th-estado": "Estado",
        "estado-aprobada": "Aprobada", "estado-cursada": "Cursada",
        "tabla-lic-caption": "Licenciatura en Análisis de Sistemas",
        "lic-1-materia": "Elementos de Programacion", "lic-1-ano": "2024", "lic-2-materia": "Matematica para Informatica", "lic-2-ano": "2024", "lic-3-materia": "Analisis Matematico", "lic-3-ano": "2024", "lic-4-materia": "Programacion", "lic-4-ano": "2024", "lic-5-materia": "Algebra Lineal y Geometria Analitica", "lic-5-ano": "2024", "lic-6-materia": "Algoritmos y Estructura de Datos", "lic-6-ano": "2025", "lic-7-materia": "Paradigmas y Lenguajes", "lic-7-ano": "2025", "lic-8-materia": "Analisis Matematico II", "lic-8-ano": "2026", "lic-9-materia": "Analisis Matematico II", "lic-9-ano": "2026", "lic-total": "<strong>Total de materias:</strong>",
        "tabla-tec-caption": "Tecnicatura Universitaria en ML e IA",
        "tec-1-materia": "Matemática para IA", "tec-1-ano": "2026", "tec-2-materia": "Programación I <br>(Python y estructuras)", "tec-2-ano": "2026", "tec-3-materia": "Alfabetización Académica y <br>Comunicación Técnica", "tec-3-ano": "2026", "tec-4-materia": "Introducción a la Transformación Digital", "tec-4-ano": "2026", "tec-total": "<strong>Total de materias:</strong>",
        "contact-titulo": "Hablemos", "contact-disponible": "Estoy disponible para colaboraciones, proyectos freelance y trabajos remotos.", "contact-medios": "Podés contactarme directamente por estos medios:",
        "contact-telefono-label": "Teléfono:", "contact-email-label": "Email:", "contact-ubicacion-label": "Ubicación:", "contact-ubicacion-valor": "Salta, Argentina",
        "contact-nombre": "Nombre", "contact-nombre-ph": "Tu nombre", "contact-email": "Email", "contact-email-ph": "you@gmail.com", "contact-mensaje": "Mensaje", "contact-mensaje-ph": "Contame brevemente en qué te puedo ayudar", "contact-btn": "Enviar mensaje",
        "footer-texto": "<em>Sofía Micol Añazgo — IA aplicada, automatización y contenido digital</em>", "footer-copy": "© 2026 Sofía Micol Añazgo"
    },
    en: {
        "doc-title": "Portfolio | Sofia Micol Añazgo",
        "nav-aria-label": "Main navigation", "nav-inicio": "Home", "nav-sobre": "About me", "nav-formacion": "Education", "nav-contacto": "Contact", "lang-toggle-aria": "Change language", "lang-btn": "ES", "theme-toggle-aria": "Toggle theme",
        "header-portfolio": "PERSONAL PORTFOLIO", "header-nombre": "Sofia Micol Añazgo", "header-subtitulo": "<em>Computer Systems Analysis undergraduate student</em>", "header-btn-sobre": "About me", "header-btn-contacto": "Contact", "header-foto-alt": "Photo of Sofia Micol Añazgo",
        "sobre-titulo": "About me", "sobre-intro": "I am a <strong>Computer Systems Analysis</strong> undergraduate student with a focus on Artificial Intelligence.", "sobre-quote": "\"My focus is on understanding how AI agents interpret our instructions, how they reason behind each response, and how they can act autonomously without absolute supervision, maintaining coherence, safety, and usefulness in their decisions.\"",
        "interes-1-titulo": "Web Development", "interes-1-desc": "Building functional web applications and sites.", "interes-2-titulo": "Databases", "interes-2-desc": "Design and optimization of data storage.", "interes-3-titulo": "Artificial Intelligence", "interes-3-desc": "ML models, LLMs, and autonomous agents.", "interes-4-titulo": "Automation", "interes-4-desc": "Process optimization with smart solutions.", "interes-5-titulo": "Machine Learning", "interes-5-desc": "Algorithms and data-driven prediction.", "interes-6-titulo": "Data Analysis", "interes-6-desc": "Extracting insights for decision-making.", "interes-7-titulo": "UX / Product", "interes-7-desc": "User experience and digital product development.", "interes-8-titulo": "Digital Communication", "interes-8-desc": "Content, social media, and tech outreach.",
        "formacion-titulo": "Constantly learning student", "formacion-subtitulo": "Always looking to expand my knowledge in AI, development, and technology.", "social-linkedin": "LinkedIn", "social-github": "GitHub",
        "edu-1-institucion": "UNSa", "edu-estado-curso": "In progress", "edu-1-titulo": "Bachelor's Degree in Computer Systems Analysis", "edu-1-fecha": "2024 - Present", "edu-2-institucion": "UPATECO", "edu-2-titulo": "University Technical Degree in ML & AI", "edu-2-fecha": "2025 - Present", "edu-3-institucion": "Complementary Training", "edu-estado-finalizado": "Completed", "edu-3-titulo": "Video Marketing: Editing for Entrepreneurship", "edu-3-fecha": "Aug 2025 - Oct 2025", "edu-4-institucion": "CS Dept. - UNSa", "edu-estado-certificados": "Certificates", "edu-4-titulo": "Conferences and Specialization Workshops", "edu-4-fecha": "2024 - 2025", "edu-4-item-1": "Introduction to Data Science (2025)", "edu-4-item-2": "Workshop: Data Preprocessing for ML in Python (2024)", "edu-4-item-3": "Workshop: How does GPT work? (2024)", "edu-4-item-4": "Workshop: Legal Aspects of AI (2024)",
        "separador-materias": "Courses taken to date", "tabla-th-materia": "Subject", "tabla-th-ano": "Year", "tabla-th-estado": "Status", "estado-aprobada": "Passed", "estado-cursada": "In progress",
        "tabla-lic-caption": "Bachelor's Degree in Computer Systems Analysis", "lic-1-materia": "Programming Elements", "lic-1-ano": "2024", "lic-2-materia": "Mathematics for Computer Science", "lic-2-ano": "2024", "lic-3-materia": "Mathematical Analysis", "lic-3-ano": "2024", "lic-4-materia": "Programming", "lic-4-ano": "2024", "lic-5-materia": "Linear Algebra and Analytic Geometry", "lic-5-ano": "2024", "lic-6-materia": "Algorithms and Data Structures", "lic-6-ano": "2025", "lic-7-materia": "Paradigms and Languages", "lic-7-ano": "2025", "lic-8-materia": "Mathematical Analysis II", "lic-8-ano": "2026", "lic-9-materia": "Mathematical Analysis II", "lic-9-ano": "2026", "lic-total": "<strong>Total subjects:</strong>",
        "tabla-tec-caption": "University Technical Degree in ML & AI", "tec-1-materia": "Mathematics for AI", "tec-1-ano": "2026", "tec-2-materia": "Programming I <br>(Python and data structures)", "tec-2-ano": "2026", "tec-3-materia": "Academic Literacy and <br>Technical Communication", "tec-3-ano": "2026", "tec-4-materia": "Introduction to Digital Transformation", "tec-4-ano": "2026", "tec-total": "<strong>Total subjects:</strong>",
        "contact-titulo": "Let's talk", "contact-disponible": "I'm available for collaborations, freelance projects, and remote work.", "contact-medios": "You can reach me directly through these channels:", "contact-telefono-label": "Phone:", "contact-email-label": "Email:", "contact-ubicacion-label": "Location:", "contact-ubicacion-valor": "Salta, Argentina", "contact-nombre": "Name", "contact-nombre-ph": "Your name", "contact-email": "Email", "contact-email-ph": "you@gmail.com", "contact-mensaje": "Message", "contact-mensaje-ph": "Briefly tell me how I can help you", "contact-btn": "Send message",
        "footer-texto": "<em>Sofía Micol Añazgo — Applied AI, automation, and digital content</em>", "footer-copy": "© 2026 Sofía Micol Añazgo"
    }
};

let currentLang = "es";

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll("[data-i18n]").forEach(el => { const k = el.getAttribute("data-i18n"); if (t[k] !== undefined) el.textContent = t[k]; });
    document.querySelectorAll("[data-i18n-html]").forEach(el => { const k = el.getAttribute("data-i18n-html"); if (t[k] !== undefined) el.innerHTML = t[k]; });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => { const k = el.getAttribute("data-i18n-ph"); if (t[k] !== undefined) el.placeholder = t[k]; });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => { const k = el.getAttribute("data-i18n-alt"); if (t[k] !== undefined) el.alt = t[k]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => { const k = el.getAttribute("data-i18n-aria"); if (t[k] !== undefined) el.setAttribute("aria-label", t[k]); });
    if (t["doc-title"] !== undefined) document.title = t["doc-title"];
    document.documentElement.lang = lang;
    const langBtn = document.querySelector(".lang-toggle");
    if (langBtn) { lang === "es" ? langBtn.classList.add("lang-active-es") : langBtn.classList.add("lang-active-en"); }
}


document.addEventListener("DOMContentLoaded", function () {
    
   
    setLanguage("es");

 
    const langBtn = document.querySelector(".lang-toggle");
    if (langBtn) {
        langBtn.addEventListener("click", function () {
            setLanguage(currentLang === "es" ? "en" : "es");
        });
    }

    /* --- BOTÓN TEMA ---*/
    const themeBtn = document.querySelector(".theme-toggle");
    const iconMoon = document.querySelector(".icon-moon");
    const iconSun = document.querySelector(".icon-sun");
    const raiz = document.documentElement;

    if (themeBtn && iconMoon && iconSun) {
        themeBtn.addEventListener("click", function () {
            let esModoOscuro = raiz.style.getPropertyValue('--color-fondo').trim() === '#121212';
            
            if (!esModoOscuro) {
                raiz.style.setProperty('--color-fondo', '#121212'); 
                raiz.style.setProperty('--color-texto', '#e5e5e5'); 
                raiz.style.setProperty('--color-secundario', '#a0a0a0');
                raiz.style.setProperty('--color-cuadrado', '#333333');
                raiz.style.setProperty('--color-blanco', '#1e1e1e');
                iconMoon.style.display = "none";
                iconSun.style.display = "block";
            } else {
                raiz.style.setProperty('--color-fondo', '#e5e5e5'); 
                raiz.style.setProperty('--color-texto', '#0f0f0f'); 
                raiz.style.setProperty('--color-secundario', '#4a4a4a');
                raiz.style.setProperty('--color-cuadrado', '#cfcfcf');
                raiz.style.setProperty('--color-blanco', '#ffffff');
                iconMoon.style.display = "block";
                iconSun.style.display = "none";
            }
        });
    }

    /* --- SMOOTH SCROLL ---*/
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth", block: "start" }); }
        });
    });

    // ============================================
    // 3. EMAILJS (FORMULARIO DE CONTACTO)
    // ============================================
    

    emailjs.init("07GLDqFsqJdR62Ol3"); 

    const formularioContacto = document.getElementById('contact-form');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault(); 

            const serviceID = "service_zfdlx5s"; 
            const templateID = "template_nqgvt5q"; 

            /*Cambiar texto del botón temporalmente*/
            const btnSubmit = formularioContacto.querySelector('button[type="submit"]');
            const textoOriginal = btnSubmit.textContent;
            btnSubmit.textContent = "Enviando...";
            btnSubmit.disabled = true;

            emailjs.sendForm(serviceID, templateID, formularioContacto)
                .then(function() {
                    alert("¡Mensaje enviado con éxito!");
                    formularioContacto.reset(); 
                    btnSubmit.textContent = textoOriginal;
                    btnSubmit.disabled = false;
                }, function(error) {
                    alert("Error al enviar: " + error.text);
                    btnSubmit.textContent = textoOriginal;
                    btnSubmit.disabled = false;
                });
        });
    }
});
/* Scroll Reveal: anima elementos al entrar en el viewport con efecto cascada */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .interest-item');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                const target = entry.target;
                
                /*Lógica para crear el efecto "uno debajo de otro" (cascada)*/
                /* Si el elemento está dentro de un contenedor con varios hermanos*/
                const parent = target.parentElement;
                if (parent) {
                    const siblings = Array.from(parent.children).filter(el => 
                        el.classList.contains('reveal') || el.classList.contains('interest-item')
                    );
                    const index = siblings.indexOf(target);
                    
                    /* Asigna un retraso de 0.15s por cada elemento anterior*/
                    if (index > 0) {
                        target.style.transitionDelay = (index * 0.15) + 's';
                    }
                }

                target.classList.add('visible');
                
                observer.unobserve(target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });
}