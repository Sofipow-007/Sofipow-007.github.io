// ============================================================
// PROYECTOS PERSONALIZADOS (EDITÁS TODO ACÁ)
// ============================================================
const PROJECTS = [
    {
      title: "FitPocket",
      shortDesc: "Aplicación Personal de Fitness",
      fullDesc: "Sistema completo de usuarios con login, tokens manuales, middleware de autorización y endpoints protegidos.",
      github: "https://github.com/Sofipow-007/FitPocket",
      demo: "",
      estado: "En Proceso",
      images: []
    },
    {
      title: "NextRead",
      shortDesc: "Sistema de recomendaciones y calificaciones de libros",
      fullDesc: "Aplicación en React que consume API, maneja estados y muestra libros por género, década y preferencias.",
      github: "https://github.com/AlejoGuerraa/nextRead",
      demo: "",
      estado: "Finalizado",
      images: []
    },
    {
      title: "Escaner de Red",
      shortDesc: "Herramienta interactiva de red",
      fullDesc: "Diseño completo en MySQL Workbench con relaciones complejas, tablas intermedias y datos de prueba.",
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