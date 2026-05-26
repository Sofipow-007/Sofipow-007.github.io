// =======================================
// PROYECTOS PERSONALIZADOS
// =======================================
const PROJECTS = [
  {
    title: { es: "PIXIE", en: "PIXIE" },
    shortDesc: { es: "Asistente de escritorio en ESP32", en: "ESP32 desktop assistant" },
    fullDesc: {
      es: "Reloj de escritorio inteligente realizado en ESP32 con pantalla OLED que centraliza información y controles que están disponibles en el celular u otras apps. Tiene una cara animada en 'Stand By', muestra reloj, fecha y clima en tiempo real y cronómetro configurable.",
      en: "Smart desktop clock built on ESP32 with an OLED screen that centralizes information and controls available on mobile apps. Shows an animated face in standby, time, date, real-time weather and a configurable stopwatch."
    },
    tech: ["Arduino", "C++"],
    github: "https://github.com/Sofipow-007/PIXIE.git",
    demo: "",
    estado: "En Proceso",
    images: [],
    participants: [
      {
        name: "Sofía Power",
        github: ""
      },
      {
        name: "Lautaro Palombo",
        github: ""
      },
      {
        name: "Mauro Beltrán",
        github: ""
      },
      {
        name: "Thomas Barrera Fuentes",
        github: ""
      }
    ]
  },
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
        name: "Sofía Power",
        github: ""
      },
      {
        name: "Lautaro Palombo",
        github: ""
      },
      {
        name: "Mauro Beltrán",
        github: ""
      },
      {
        name: "Thomas Barrera Fuentes",
        github: ""
      }
    ]
  },
  {
    title: { es: "NextRead", en: "NextRead" },
    shortDesc: { es: "Sistema de recomendaciones y calificaciones de libros", en: "Book recommendation and rating system" },
    fullDesc: {
      es: "Aplicación Full-Stack en React que consume API, maneja estados y muestra libros por género, década y preferencias.",
      en: "Full-Stack React application that consumes an API, manages state and displays books by genre, decade and user preferences."
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
    ]
  },
  {
    title: { es: "Escaner de Red", en: "Network Scanner" },
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
      "assets/images/escanerRed/escanerRed-image1.png"
    ]
  },
];

// Traducciones para la UI
const TRANSLATIONS = {
  es: {
    "nav.about": "Sobre Mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "hero.available": "Disponible para trabajar",
    "hero.sub": "Estudiante de escuela Técnica, desarrolladora especializada en BackEnd y Bases de Datos.",
    "hero.github": "Ver GitHub ↗",
    "about.title": "Sobre Mí",
    "about.bio": "Soy una estudiante de la Escuela Técnica N°36 \"Almirante Guillermo Brown\". Me dedico a programar mayormente en Full-Stack, implementando conocimientos en JavaScript, Python, Java, base de datos (relacionales o no relacionales), sistemas embebidos, y comenzando a programar en C++. Tengo conocimientos en Frontend aunque no me especializo normalmente a su uso completo.",
    "about.bio2": "Logré participar en proyectos grupales e individuales, utilizando herramientas como GitHub para el control de versiones y Postman para probar APIs. Me gusta aprender nuevas tecnologías y enfrentar desafíos de programación, siempre buscando mejorar mis habilidades y contribuir a proyectos interesantes.",
    "about.avatarAlt": "Foto de perfil",
    "skills.title": "Habilidades",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Herramientas",
    "skills.dbs": "Base de Datos",
    "projects.title": "Proyectos",
    "modal.techTitle": "Tecnologías",
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
    "contact.send": "Enviar mensaje"
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.available": "Available for work",
    "hero.sub": "Technical school student, developer specialized in Backend and Databases.",
    "hero.github": "View GitHub ↗",
    "about.title": "About Me",
    "about.bio": "I'm a student at the Technical School N°36 'Almirante Guillermo Brown'. I mostly work Full-Stack implementing knowledge in JavaScript, Python, Java, databases (relational and non-relational), systems embedded, and I'm starting with C++. I have Frontend knowledge though it's not my main specialty.",
    "about.bio2": "I've participated in group and individual projects, using tools like GitHub for version control and Postman for API testing. I enjoy learning new technologies and facing programming challenges, always aiming to improve my skills and contribute to interesting projects.",
    "about.avatarAlt": "Profile photo",
    "skills.title": "Skills",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.tools": "Tools",
    "skills.dbs": "Databases",
    "projects.title": "Projects",
    "modal.techTitle": "Technologies",
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
    "contact.send": "Send message"
  }
};

let currentLang = localStorage.getItem('lang') || 'es';


// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar selector y traducciones
  const langSelect = document.querySelector('.language-select');
  if (langSelect) langSelect.value = currentLang;
  applyTranslations(currentLang);
  initLanguageSwitcher();

  renderProjects();
  setupModal();
});


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
  
  // const participantsContainer = document.getElementById("modal-participants");
  // if (participantsContainer) {
  //   participantsContainer.innerHTML = "";
  //   project.participants.forEach(participant => {
  //     const participantEl = document.createElement("div");
  //     participantEl.className = "modal-participant";
  //     participantEl.innerHTML = `
      
  //     <button><a href="${participant.github}" target="_blank" rel="noopener noreferrer"> ${participant.name} </a></button>

  //     `;
  //     participantsContainer.appendChild(participantEl);
  //   });
  // }

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

  // re-render projects so project texts reflect language
  // (keeps modal and cards in sync)
  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer && projectsContainer.children.length > 0) {
    renderProjects();
  }
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

// — Carrusel —
function renderGallery(container, images) {
  let current = 0;

  container.innerHTML = `
    <p class="modal-gallery-title">Imágenes del proyecto</p>
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
    count:        120,    // cantidad de estrellas
    speedMin:     0.08,   // velocidad mínima de caída
    speedMax:     0.35,   // velocidad máxima de caída
    sizeMin:      0.4,    // tamaño mínimo (px)
    sizeMax:      1.8,    // tamaño máximo (px)
    twinkleSpeed: 0.012,  // qué tan rápido parpadean
    color:        "155, 123, 255",  // RGB del --primary de tu CSS
  };

  let stars = [];
  let animId;

  // Redimensiona el canvas al tamaño del viewport
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // Crea una estrella con valores aleatorios
  function createStar(randomY = false) {
    return {
      x:       Math.random() * canvas.width,
      y:       randomY ? Math.random() * canvas.height : -5,
      size:    CONFIG.sizeMin + Math.random() * (CONFIG.sizeMax - CONFIG.sizeMin),
      speed:   CONFIG.speedMin + Math.random() * (CONFIG.speedMax - CONFIG.speedMin),
      opacity: Math.random(),
      delta:   (Math.random() > 0.5 ? 1 : -1) * CONFIG.twinkleSpeed,
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
      if (star.opacity >= 1)   { star.opacity = 1;   star.delta *= -1; }
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

  // Sobreescribimos para agregar reveal automático a las cards
  window.onCardsRendered = function() {
    document.querySelectorAll(".project-card:not(.observed)").forEach((card, i) => {
      card.classList.add("reveal");
      card.style.transitionDelay = `${i * 0.08}s`;  // escalonado automático
      card.classList.add("observed");
      observer.observe(card);
    });
  };

})();