// ============================================================
// PROYECTOS PERSONALIZADOS (EDITÁS TODO ACÁ)
// ============================================================
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
    images: []
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

    card.addEventListener("click", () => openModal(project));

    container.appendChild(card);
  });

  document.getElementById("repo-count").textContent = PROJECTS.length;
}


// ============================================================
// MODAL
// ============================================================
function setupModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
}

function openModal(project) {
  const modal = document.getElementById("project-modal");

  document.getElementById("modal-tag").textContent = project.estado
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-description").textContent = project.fullDesc;
  const techContainer = document.getElementById("modal-tech");

  techContainer.innerHTML = "";

  project.tech.forEach(tech => {
    const pill = document.createElement("span");

    pill.className = "modal-tech-pill";
    pill.textContent = tech;

    techContainer.appendChild(pill);
  });

  const imagesContainer = document.getElementById("modal-images");
  imagesContainer.innerHTML = "";

  project.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    imagesContainer.appendChild(img);
  });

  document.getElementById("modal-github").href = project.github;

  const demoBtn = document.getElementById("modal-demo");
  if (project.demo) {
    demoBtn.href = project.demo;
    demoBtn.style.display = "inline-flex";
  } else {
    demoBtn.style.display = "none";
  }

  modal.classList.remove("hidden");
}