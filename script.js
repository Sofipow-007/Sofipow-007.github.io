// =======================================
// PROYECTOS PERSONALIZADOS
// =======================================
const PROJECTS = [

  // =============== PIXIE ===============

  {
    title: { es: "PIXIE", en: "PIXIE" },
    shortDesc: { es: "Asistente de escritorio en ESP32", en: "ESP32 desktop assistant" },
    fullDesc: {
      es: "Reloj de escritorio inteligente realizado en ESP32 con pantalla OLED que centraliza información y controles que están disponibles en el celular u otras apps. Tiene una cara animada en 'Stand By', y estamos implementando una aplicación web que se comunique con el dispositivo para configurar alarmas, mostrar notificaciones, controlar el cronómetro y más funcionalidades. El proyecto se encuentra en desarrollo.",
      en: "Smart desktop clock built on ESP32 with an OLED screen that centralizes information and controls available on mobile apps. Shows an animated face in standby, and we're developing a web app to communicate with the device for setting alarms, showing notifications, controlling the stopwatch and more features. The project is currently in development."
    },
    tech: ["Arduino", "C++", "React", "JavaScript", "Figma"],
    github: "https://github.com/Sofipow-007/PIXIE.git",
    demo: "",
    estado: "En Proceso",
    images: [
      "assets/images/pixie/pixie-logoeyes.png"
    ],
    participants: [
      {
        name: "Thomas Barrera Fuentes",
        github: "https://github.com/partengo"
      },
      {
        name: "Mauro Beltran",
        github: "https://github.com/MBJoel07"
      },
      {
        name: "Lautaro Palombo",
        github: "https://github.com/Lautaro-06"
      },
      {
        name: "Sofia Power",
        github: "https://github.com/Sofipow-007"
      }
    ]
  },

  // =============== FitPocket ===============

  {
    title: { es: "FitPocket", en: "FitPocket" },
    shortDesc: { es: "Aplicación Personal de Fitness", en: "Personal Fitness App" },
    fullDesc: {
      es: "Sistema Full-Stack completo de planes de entrenamiento y dietas creados por la IA, que se organiza con checkins diarios automatizados. Incluye un cálculo de ICM promedio, onboarding para que cada usuario ingrese sus datos personales, y más funcionalidades. Por ahora el proyecto se encuentra en desarrollo.",
      en: "Full-Stack system for training plans and AI-generated diet plans, organized with automated daily check-ins. Includes caloric calculations, user onboarding, and more features. The project is currently in development."
    },
    tech: ["Node.js", "N8N", "MongoDB", "React", "bcrypt", "JWT", "Git", "Figma"],
    github: "https://github.com/Sofipow-007/FitPocket",
    demo: "",
    estado: "En Proceso",
    images: [
      "assets/images/fitpocket/fitpocket-logo(with text&inverted)-blackbg.png",
    ],
    participants: [
      {
        name: "Thomas Barrera Fuentes",
        github: "https://github.com/partengo"
      },
      {
        name: "Mauro Beltran",
        github: "https://github.com/MBJoel07"
      },
      {
        name: "Lautaro Palombo",
        github: "https://github.com/Lautaro-06"
      },
      {
        name: "Sofia Power",
        github: "https://github.com/Sofipow-007"
      }
    ]
  },

  // =============== NextRead ===============

  {
    title: { es: "NextRead", en: "NextRead" },
    shortDesc: { es: "Sistema de recomendaciones y calificaciones de libros", en: "Book recommendation and rating system" },
    fullDesc: {
      es: "Aplicación Full-Stack en React que consume API, maneja estados y muestra libros por género, década y preferencias. Con NextRead nos encargamos de simplificar la búsqueda de libros y la calificación de los mismos, para que los usuarios puedan descubrir nuevas lecturas basadas en sus gustos y tendencias literarias. El proyecto se encuentra finalizado y disponible en GitHub.",
      en: "Full-Stack React application that consumes an API, manages state and displays books by genre, decade and user preferences. NextRead simplifies book discovery and rating, allowing users to find new reads based on their tastes and literary trends. The project is completed and available on GitHub."
    },
    tech: ["Node.js", "MySQL", "JavaScript", "React", "Vite", "CSS", "bcrypt", "JWT", "Git", "Figma", "Express.js", "Sequelize"],
    github: "https://github.com/AlejoGuerraa/nextRead",
    demo: "",
    estado: "Finalizado",
    images: [
      "assets/images/nextread/icon-nextread.png",
      "assets/images/nextread/nextread-nosotros.png",
      "assets/images/nextread/nextread-invitado.png",
      "assets/images/nextread/nextread-register1.png",
      "assets/images/nextread/nextread-register2.png",
      "assets/images/nextread/nextread-login.png",
    ],
    participants: [
      {
        name: "Renata Gallucci",
        github: "https://github.com/Renaaa189"
      },
      {
        name: "Alejo Guerra",
        github: "https://github.com/AlejoGuerraa"
      },
      {
        name: "Carolina Mendez",
        github: "https://github.com/caroMendezz"
      },
      {
        name: "Sofia Power",
        github: "https://github.com/Sofipow-007"
      },
      {
        name: "Agustin Rivera",
        github: "https://github.com/AgustinR55"
      }
    ]
  },

  // =============== NetView ===============

  {
    title: { es: "NetView", en: "NetView" },
    shortDesc: { es: "Herramienta interactiva de red", en: "Interactive network tool" },
    fullDesc: {
      es: "Aplicación que se encarga de mandar paquetes en un rango de IPs válidos o a una dirección DNS existente, y que contiene algunas estadísticas realizadas con el comando netstat (protocolos de red, conexiones y routers activos). Contiene una interfaz amigable para el usuario.",
      en: "An application that sends packets across valid IP ranges or to a DNS address and gathers statistics with netstat (protocols, connections, active routers). Includes a user-friendly interface."
    },
    tech: ["Java", "Git"],
    github: "https://github.com/Sofipow-007/Escaner-de-Red",
    demo: "",
    estado: "Finalizado",
    images: [
      "assets/images/netview/NetView-logo.png",
      "assets/images/netview/escanerRed-image1.png",
      "assets/images/netview/netview-ips.png",
      "assets/images/netview/netview-conexiones.png"
    ],
    participants: [
      {
        name: "Sofia Power",
        github: "https://github.com/Sofipow-007"
      }
    ]
  }
];

// =======================================
// HABILIDADES BLANDAS
// =======================================

const SOFT_SKILLS = [
  {
    title: { es: "Comunicación Efectiva", en: "Effective Communication" },
    description: {
      es: "Comunico ideas con claridad y escucho de forma activa.",
      en: "I communicate ideas clearly and listen actively."
    }
  },
  {
    title: { es: "Trabajo en Equipo", en: "Teamwork" },
    description: {
      es: "Colaboro en grupo, reparto tareas y apoyo al logro común.",
      en: "I collaborate in groups, share tasks, and support shared goals."
    }
  },
  {
    title: { es: "Responsabilidad", en: "Responsibility" },
    description: {
      es: "Cumplo con lo pactado y mantengo el compromiso en el trabajo.",
      en: "I follow through on commitments and stay accountable."
    }
  },
  {
    "title": { es: "Capacidad para Resolver Problemas", en: "Problem-Solving Skills" },
    "description": {
      es: "Analizo situaciones, encuentro soluciones y adapto el enfoque.",
      en: "I analyze situations, find solutions, and adapt my approach."
    }
  },
  {
    "title": { es: "Puntualidad y Escucha Activa", en: "Punctuality and Active Listening" },
    "description": {
      es: "Llego a tiempo y me concentro en lo que cada persona necesita.",
      en: "I arrive on time and stay attentive to what others need."
    }
  },
  {
    "title": { es: "Respeto y Empatía", en: "Respect and Empathy" },
    "description": {
      es: "Valoro distintas perspectivas y creo un ambiente de respeto.",
      en: "I value different perspectives and foster respectful collaboration."
    }
  }
]
// Traducciones para la UI
const TRANSLATIONS = {
  es: {
    "nav.about": "Sobre Mí",
    "nav.skills": "Tecnologías",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.available": "Disponible para trabajar",
    "hero.sub": "Estudiante de escuela Técnica, desarrolladora especializada en BackEnd y Bases de Datos.",
    "hero.github": "Ver GitHub",
    "hero.cv": "Descargar CV",
    "about.title": "Sobre Mí",
    "about.bio": "Soy una estudiante de la Escuela Técnica N°36 \"Almirante Guillermo Brown\". Me dedico a programar mayormente en Full-Stack, implementando conocimientos en JavaScript, Python, Java, base de datos (relacionales o no relacionales), sistemas embebidos, y comenzando a programar en C++.",
    "about.bio2": "Logré participar en proyectos grupales e individuales, utilizando herramientas como GitHub para el control de versiones y Postman para probar APIs. Me gusta aprender nuevas tecnologías y enfrentar desafíos de programación, siempre buscando mejorar mis habilidades y contribuir a proyectos interesantes.",
    "about.bio3": "Actualmente, estoy desarrollando un curso de \"Desarrollo de Diseño Web Adaptativo\" en FreeCodeCamp, lo que me ha permitido profundizar mis conocimientos en diseño web y mejorar mis habilidades en la creación de interfaces atractivas y funcionales. A su vez, estoy haciendo un curso con enfoque AI-First, para poder fortalecer una mentalidad activa orientada a la inteligencia artificial en la programación.",
    "about.softTitle": "Habilidades Blandas",
    "about.softClosing": "Cada proyecto que encaré me enseñó algo nuevo — no solo de tecnología, sino de cómo trabajar con otros, adaptarme a lo inesperado y seguir adelante cuando algo no funciona a la primera.",
    "about.avatarAlt": "Foto de perfil",
    "skills.title": "Tecnologías",
    "skills.lenguajes": "Lenguajes",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.dbs": "Base de Datos",
    "projects.title": "Proyectos",
    "modal.techTitle": "Tecnologías",
    "modal.participants": "Participantes",
    "modal.github": "Ver código",
    "modal.demo": "Ver demo",
    "contact.title": "Contacto",
    "contact.sub": "¿Tenés un proyecto en mente o querés charlar? Escribime.",
    "contact.nameLabel": "Nombre:",
    "contact.namePlaceholder": "Nombre",
    "contact.emailLabel": "Email:",
    "contact.emailPlaceholder": "tu@email.com",
    "contact.messageLabel": "Mensaje:",
    "contact.messagePlaceholder": "Escribe tu mensaje aquí",
    "contact.send": "Enviar mensaje",
    "contactModal.title": "Mensaje enviado",
    "contactModal.sub": "Gracias por escribirme. Te respondo en un momento.",
    "contactModal.btn": "Cerrar",
    "footer.rights": "Todos los derechos reservados."
  },
  en: {
    "nav.about": "About Me",
    "nav.skills": "Technologies",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.available": "Available for work",
    "hero.sub": "Technical school student, developer specialized in Backend and Databases.",
    "hero.github": "View GitHub",
    "hero.cv": "Download CV",
    "about.title": "About Me",
    "about.bio": "I'm a student at the Technical School N°36 'Almirante Guillermo Brown'. I mostly work Full-Stack implementing knowledge in JavaScript, Python, Java, databases (relational and non-relational), systems embedded, and I'm starting with C++.",
    "about.bio2": "I've participated in group and individual projects, using tools like GitHub for version control and Postman for API testing. I enjoy learning new technologies and facing programming challenges, always aiming to improve my skills and contribute to interesting projects.",
    "about.bio3": "I'm currently developing a course on \"Adaptive Web Design\" at FreeCodeCamp, which has allowed me to deepen my knowledge in web design and improve my skills in creating attractive and functional interfaces. I'm also taking a course on \"AI-First\" development to enhance my understanding of artificial intelligence in programming.",
    "about.softTitle": "Soft Skills",
    "about.softClosing": "Every project I tackled taught me something new — not just about technology, but about working with others, adapting to the unexpected, and pushing forward when things don't work the first time.",
    "about.avatarAlt": "Profile photo",
    "skills.title": "Technologies",
    "skills.lenguajes": "Languages",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.dbs": "Databases",
    "projects.title": "Projects",
    "modal.techTitle": "Technologies",
    "modal.participants": "Participants",
    "modal.github": "View code",
    "modal.demo": "View demo",
    "contact.title": "Contact",
    "contact.sub": "Have a project in mind or want to chat? Write me.",
    "contact.nameLabel": "Name:",
    "contact.namePlaceholder": "Name",
    "contact.emailLabel": "Email:",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messageLabel": "Message:",
    "contact.messagePlaceholder": "Write your message here",
    "contact.send": "Send message",
    "contactModal.title": "Message sent!",
    "contactModal.sub": "Thanks for reaching out. I'll get back to you shortly.",
    "contactModal.btn": "Close",
    "footer.rights": "All rights reserved."
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

// Actualiza el enlace del CV según el idioma seleccionado.
function updateCvLink(lang) {
  const cvEl = document.getElementById('download-cv');
  if (!cvEl) return;
  // Rutas relativas dentro del proyecto. Coloca tus PDFs en assets/docs/
  const paths = {
    es: 'assets/docs/Curriculum_Vitae_Sofia_Power_ES.pdf',
    en: 'assets/docs/Curriculum_Vitae_Sofia_Power_EN.pdf'
  };
  const href = paths[lang] || paths.es;
  cvEl.href = href;
  // sugerir nombre de archivo al descargar
  const fileName = href.split('/').pop();
  cvEl.setAttribute('download', fileName);
}


// ============================================================
// NAV MOBILE
// ============================================================
function setupMobileNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('active');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  const langSelect = document.querySelector('.language-select');
  if (langSelect) {
    langSelect.addEventListener('change', closeMenu);
  }

  document.addEventListener('click', (event) => {
    const nav = document.querySelector('.nav');
    if (window.innerWidth > 720) return;
    if (nav && !nav.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 720) {
      closeMenu();
    }
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  setupMobileNavigation();

  const langSelect = document.querySelector('.language-select');
  if (langSelect) langSelect.value = currentLang;
  applyTranslations(currentLang);
  initLanguageSwitcher();

  renderProjects();
  renderSoftSkills();
  setupModal();
  setupContactForm();
});

// ============================================================
// RENDER SOFT SKILLS
// ============================================================
function renderSoftSkills() {
  const container = document.getElementById("soft-skills-container");
  if (!container) return;

  container.innerHTML = "";

  SOFT_SKILLS.forEach((skill, i) => {
    const card = document.createElement("div");
    card.className = "soft-skill-card";  // ← sin "reveal" acá

    card.innerHTML = `
      <h4 class="soft-skill-title">${skill.title[currentLang] || skill.title.es}</h4>
      <p class="soft-skill-desc">${skill.description[currentLang] || skill.description.es}</p>
    `;

    container.appendChild(card);
  });

  // registrar en el observer después de insertar en el DOM
  if (window.onCardsRendered) window.onCardsRendered();
}

// ============================================================
// RENDER
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  PROJECTS.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <h4 class="modal-tag">${project.estado}</h4>
        <h3 class="project-title">${(project.title && project.title[currentLang]) || project.title}</h3>
        <p class="project-desc">${(project.shortDesc && project.shortDesc[currentLang]) || project.shortDesc}</p>
        
      `;

    // Añadimos la miniatura sólo si existe una imagen
    if (project.images && project.images[0]) {
      const img = document.createElement('img');
      img.src = project.images[0];
      img.alt = (project.title && project.title[currentLang]) || project.title;
      img.className = 'project-image';
      img.loading = 'lazy';
      card.appendChild(img);
      card.classList.add('with-thumb');
    }

    card.addEventListener("click", () => openModal(project));

    container.appendChild(card);
  });

  const repoCount = document.getElementById("repo-count");
  if (repoCount) repoCount.textContent = PROJECTS.length;

  // aplicar reveal a las cards renderizadas
  if (window.onCardsRendered) window.onCardsRendered();
}


// ============================================================
// MODAL
// ============================================================

function openModal(project) {
  const modal = document.getElementById("project-modal");

  document.getElementById("modal-title").textContent = (project.title && project.title[currentLang]) || project.title;
  document.getElementById("modal-description").textContent = (project.fullDesc && project.fullDesc[currentLang]) || project.fullDesc;

  // — Tecnologías —
  const techContainer = document.getElementById("modal-tech");
  techContainer.innerHTML = "";
  project.tech.forEach(tech => {
    const pill = document.createElement("span");
    pill.className = "modal-tech-pill";
    pill.textContent = tech;
    techContainer.appendChild(pill);
  });

  // — Galería con carrusel —
  const gallery = document.getElementById("modal-gallery");
  if (gallery) {
    gallery.innerHTML = "";

    // Separamos la portada (imagen 0) del resto de las imágenes que irán a la galería
    const cover = (project.images && project.images.length) ? project.images[0] : null;
    const galleryImages = (project.images && project.images.length > 1) ? project.images.slice(1) : [];

    if (galleryImages.length > 0) {
      gallery.style.display = "block";
      renderGallery(gallery, galleryImages);
    } else {
      // no hay imágenes para la galería (quizá sólo exista la portada o ninguna)
      gallery.style.display = "none";
    }
  }

  const participantsContainer = document.getElementById("modal-participants");
  if (participantsContainer) {
    participantsContainer.innerHTML = "";
    project.participants.forEach(participant => {
      const participantEl = document.createElement("div");
      participantEl.className = "modal-participant";
      participantEl.innerHTML = `
      
      <a href="${participant.github}" class="btn-ghost" target="_blank" rel="noopener noreferrer"> ${participant.name}</button>

      `;
      participantsContainer.appendChild(participantEl);
    });
  }

  // — Links —
  document.getElementById("modal-github").href = project.github;
  const demoBtn = document.getElementById("modal-demo");
  if (project.demo) {
    demoBtn.href = project.demo;
    demoBtn.style.display = "inline-flex";
  } else {
    demoBtn.style.display = "none";
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}


// ============================================================
//  FUNCIONES DE I18N
// ============================================================
function applyTranslations(lang) {
  const map = TRANSLATIONS[lang] || {};

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key) return;
    const text = map[key] || TRANSLATIONS['es'][key] || key;
    // preserva iconos/arrows si estaban en el HTML original para algunos botones
    if (el.classList.contains('btn-primary') || el.classList.contains('btn-ghost')) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  // placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (!key) return;
    const text = map[key] || TRANSLATIONS['es'][key] || key;
    el.placeholder = text;
  });

  // alt attributes
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    if (!key) return;
    const text = map[key] || TRANSLATIONS['es'][key] || key;
    el.alt = text;
  });

  // aria labels
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (!key) return;
    const text = map[key] || TRANSLATIONS['es'][key] || key;
    el.setAttribute('aria-label', text);
  });

  // Actualiza link del CV (si existe)
  if (typeof updateCvLink === 'function') updateCvLink(lang);

  // re-render projects so project texts reflect language
  // (keeps modal and cards in sync)
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && projectsContainer.children.length > 0) {
    renderProjects();
  }

  const softContainer = document.getElementById('soft-skills-container');
  if (softContainer) renderSoftSkills();
}

function initLanguageSwitcher() {
  const select = document.querySelector('.language-select');
  if (!select) return;
  select.addEventListener('change', (e) => {
    currentLang = e.target.value || 'es';
    localStorage.setItem('lang', currentLang);
    applyTranslations(currentLang);
  });
}

// — Cerrá el modal también restaurando el scroll —
function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// ============================================================
// FORMULARIO DE CONTACTO
// ============================================================
function setupContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("contact-submit");
  const modal = document.getElementById("contact-modal");
  const modalClose = document.getElementById("contact-modal-close");

  if (!form) return;

  const contactEmail = document.getElementById("contact-email");
  const contactEmailError = document.getElementById("contact-email-error");

  const KNOWN_EMAIL_PROVIDERS = [
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "yahoo.com",
    "icloud.com",
    "live.com",
    "proton.me",
    "protonmail.com",
    "aol.com"
  ];

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function isKnownEmailProvider(email) {
    const domain = email.split("@")[1]?.toLowerCase();
    return domain ? KNOWN_EMAIL_PROVIDERS.includes(domain) : false;
  }

  function showEmailError(message) {
    if (!contactEmailError) return;
    contactEmailError.textContent = message;
    contactEmailError.classList.remove("hidden");
  }

  function hideEmailError() {
    if (!contactEmailError) return;
    contactEmailError.textContent = "";
    contactEmailError.classList.add("hidden");
  }

  // — Envío del formulario con Formspree —
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const emailValue = contactEmail ? contactEmail.value.trim() : "";
    if (!isValidEmail(emailValue)) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === "es" ? "Enviar mensaje" : "Send message";
      showEmailError(
        currentLang === "es"
          ? "Por favor ingresa un email válido."
          : "Please enter a valid email."
      );
      if (contactEmail) contactEmail.focus();
      return;
    }

    if (!isKnownEmailProvider(emailValue)) {
      submitBtn.disabled = false;
      submitBtn.textContent = currentLang === "es" ? "Enviar mensaje" : "Send message";
      showEmailError(
        currentLang === "es"
          ? "Usa un email de un proveedor conocido como gmail.com o hotmail.com."
          : "Use an email from a known provider like gmail.com or hotmail.com."
      );
      if (contactEmail) contactEmail.focus();
      return;
    }

    hideEmailError();

    // Estado de carga
    submitBtn.disabled = true;
    submitBtn.textContent = currentLang === "es" ? "Enviando..." : "Sending...";

    try {
      const response = await fetch("https://formspree.io/f/maqkvbrv", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        form.reset();
        openContactModal();
      } else {
        throw new Error("Error en el envío");
      }

    } catch (err) {
      submitBtn.textContent =
        currentLang === "es" ? "Error, intentá de nuevo" : "Error, try again";
      submitBtn.disabled = false;
      setTimeout(() => {
        submitBtn.textContent =
          currentLang === "es" ? "Enviar mensaje" : "Send message";
      }, 3000);
    }
  });

  // — Abrir modal de confirmación —
  function openContactModal() {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    // Restaurar el botón mientras el modal está abierto
    submitBtn.disabled = false;
    submitBtn.textContent =
      currentLang === "es" ? "Enviar mensaje" : "Send message";
  }

  // — Cerrar modal —
  function closeContactModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeContactModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeContactModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeContactModal();
    }
  });
}

// — Carrusel —
function renderGallery(container, images) {
  let current = 0;

  container.innerHTML = `
    <div class="gallery">
      <button class="gallery-btn gallery-prev" aria-label="Anterior">&#8249;</button>
      <div class="gallery-track-wrapper">
        <div class="gallery-track">
          ${images.map((src, i) => `
            <img
              src="${src}"
              alt="Captura ${i + 1}"
              class="gallery-img ${i === 0 ? "active" : ""}"
              loading="lazy"
            />
          `).join("")}
        </div>
      </div>
      <button class="gallery-btn gallery-next" aria-label="Siguiente">&#8250;</button>
    </div>
    ${images.length > 1 ? `
    <div class="gallery-dots">
      ${images.map((_, i) => `
        <button class="gallery-dot ${i === 0 ? "active" : ""}" data-index="${i}" aria-label="Ir a imagen ${i + 1}"></button>
      `).join("")}
    </div>` : ""}
  `;

  if (images.length === 1) {
    container.querySelector(".gallery-prev").style.display = "none";
    container.querySelector(".gallery-next").style.display = "none";
  }

  const imgs = container.querySelectorAll(".gallery-img");
  const dots = container.querySelectorAll(".gallery-dot");

  function goTo(index) {
    imgs[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = (index + images.length) % images.length;
    imgs[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
  }

  container.querySelector(".gallery-prev").addEventListener("click", () => goTo(current - 1));
  container.querySelector(".gallery-next").addEventListener("click", () => goTo(current + 1));
  dots.forEach(dot => dot.addEventListener("click", () => goTo(+dot.dataset.index)));
}

// ============================================================
//  ANIMACIÓN DE ESTRELLAS — Fondo general de la página
// ============================================================
(function initStars() {
  const canvas = document.getElementById("stars-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // — Configuración — ajustá estos valores a tu gusto
  const CONFIG = {
    count: 120,    // cantidad de estrellas
    speedMin: 0.08,   // velocidad mínima de caída
    speedMax: 0.35,   // velocidad máxima de caída
    sizeMin: 0.4,    // tamaño mínimo (px)
    sizeMax: 1.8,    // tamaño máximo (px)
    twinkleSpeed: 0.012,  // qué tan rápido parpadean
    color: "155, 123, 255",  // RGB del --primary de tu CSS
  };

  let stars = [];
  let animId;

  // Redimensiona el canvas al tamaño del viewport
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Crea una estrella con valores aleatorios
  function createStar(randomY = false) {
    return {
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : -5,
      size: CONFIG.sizeMin + Math.random() * (CONFIG.sizeMax - CONFIG.sizeMin),
      speed: CONFIG.speedMin + Math.random() * (CONFIG.speedMax - CONFIG.speedMin),
      opacity: Math.random(),
      delta: (Math.random() > 0.5 ? 1 : -1) * CONFIG.twinkleSpeed,
    };
  }

  function initStarField() {
    // Al inicio llenamos el canvas con estrellas en posiciones aleatorias
    stars = Array.from({ length: CONFIG.count }, () => createStar(true));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      // Parpadeo
      star.opacity += star.delta;
      if (star.opacity >= 1) { star.opacity = 1; star.delta *= -1; }
      if (star.opacity <= 0.1) { star.opacity = 0.1; star.delta *= -1; }

      // Caída lenta
      star.y += star.speed;

      // Si sale por abajo, renace por arriba
      if (star.y > canvas.height + 5) {
        Object.assign(star, createStar(false));
      }

      // Dibuja la estrella como círculo suave
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CONFIG.color}, ${star.opacity})`;
      ctx.fill();
    });

    animId = requestAnimationFrame(draw);
  }

  // Pausa la animación cuando el hero no está visible (ahorra recursos)
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      if (!animId) draw();
    } else {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });
  observer.observe(canvas);

  // Arranca
  resize();
  initStarField();
  draw();

  // Responsive
  window.addEventListener("resize", () => {
    resize();
    initStarField();
  });
})();

// ===========================
//  SCROLL REVEAL 
// ===========================
(function initReveal() {

  // Observador que detecta cuando un elemento entra en pantalla
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,   // aparece cuando el 12% del elemento es visible
      rootMargin: "0px 0px -40px 0px"  // un poco antes del borde inferior
    }
  );

  // Observamos todos los elementos con clase reveal
  document.querySelectorAll(".reveal, .reveal-left, .reveal-right")
    .forEach(el => observer.observe(el));

  const originalCreate = window.createRepoCard;  // por si ya la tenés

  // Sobreescribimos para agregar reveal automático a las cards dinámicas
  window.onCardsRendered = function () {
    document.querySelectorAll(
      ".project-card:not(.observed), .soft-skill-card:not(.observed)"
    ).forEach((card, i) => {
      card.classList.add("reveal");
      card.style.transitionDelay = `${i * 0.08}s`;
      card.classList.add("observed");
      observer.observe(card);
    });
  };

})();