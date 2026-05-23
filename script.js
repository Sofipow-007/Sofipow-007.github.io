// =======================================
// PROYECTOS PERSONALIZADOS
// =======================================
const PROJECTS = [
  {
    title: "PIXIE",
    shortDesc: "Asistente de escritorio en ESP32",
    fullDesc: "Reloj de escritorio inteligente realizado en ESP32 con pantalla OLED que centraliza información y controles que están disponibles en el celular u otras apps. Tiene una cara animada en 'Stand By', muestra reloj, fecha y clima en tiempo real y cronómetro configurable.",
    tech: ["Arduino", "C++"],
    github: "https://github.com/Sofipow-007/PIXIE.git",
    demo: "",
    estado: "En Proceso",
    images: []
  },
  {
    title: "FitPocket",
    shortDesc: "Aplicación Personal de Fitness",
    fullDesc: "Sistema Full-Stack completo de planes de entrenamiento y dietas creados por la IA, que se organiza con checkins diarios automatizados. Incluye un cálculo de ICM promedio, onboarding para que cada usuario ingrese sus datos personales, y más funcionalidades.",
    tech: ["Node.js", "N8N", "MongoDB", "React"],
    github: "https://github.com/Sofipow-007/FitPocket",
    demo: "",
    estado: "En Proceso",
    images: []
  },
  {
    title: "NextRead",
    shortDesc: "Sistema de recomendaciones y calificaciones de libros",
    fullDesc: "Aplicación Full-Stack en React que consume API, maneja estados y muestra libros por género, década y preferencias.",
    tech: ["Node.js", "MySQL", "JavaScript", "React", "Vite", "CSS"],
    github: "https://github.com/AlejoGuerraa/nextRead",
    demo: "",
    estado: "Finalizado",
    images: []
  },
  {
    title: "Escaner de Red",
    shortDesc: "Herramienta interactiva de red",
    fullDesc: "Aplicación que se encarga de mandar paquetes en un rango de IPs válidos o a una dirección DNS existente, y que contiene algunas estadísticas realizadas con el comando netstat (protocolos de red, conexiones y routers activos). Contiene una interfaz amigable para el usuario.",
    tech: ["Java", "Git"],
    github: "https://github.com/Sofipow-007/Escaner-de-Red",
    demo: "",
    estado: "Finalizado",
    images: [
      "assets/images/escanerRed/escanerRed-image1.png"
    ]
  },
];


// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
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
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.shortDesc}</p>
      `;
        // <img src="${project.images && project.images[0] ? project.images[0] : "assets/images/placeholder.png"}" alt="${project.title}" class="project-image" loading="lazy">
      

    card.addEventListener("click", () => openModal(project));

    container.appendChild(card);
  });

  const repoCount = document.getElementById("repo-count");
if (repoCount) repoCount.textContent = PROJECTS.length;
}


// ============================================================
// MODAL
// ============================================================

function openModal(project) {
  const modal = document.getElementById("project-modal");

  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.fullDesc;

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
  // const gallery = document.getElementById("modal-gallery");
  // gallery.innerHTML = "";

  // if (project.images && project.images.length > 0) {
  //   gallery.style.display = "block";
  //   renderGallery(gallery, project.images);
  // } else {
  //   gallery.style.display = "none";
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
    <p class="modal-gallery-title">Capturas</p>
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