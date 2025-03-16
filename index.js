const nav = document.getElementById("nav");
const icons = document.getElementById("icons");

// Création du voile noir qui recouvre tout sauf la navbar et ul
const fullscreenOverlay = document.createElement("div");
fullscreenOverlay.id = "fullscreen-overlay";
document.body.appendChild(fullscreenOverlay);

icons.addEventListener("click", () => {
  nav.classList.toggle("active");

  // Active/Désactive le voile
  if (nav.classList.contains("active")) {
    fullscreenOverlay.style.display = "block";
  } else {
    fullscreenOverlay.style.display = "none";
  }
});

fullscreenOverlay.addEventListener("click", () => {
  nav.classList.remove("active"); // Ferme le menu en cliquant sur le voile
  fullscreenOverlay.style.display = "none";
});



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le saut brutal

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = document.getElementById("nav").offsetHeight; // Hauteur de la navbar
        const offset = 0; // Décalage personnalisé pour ajuster l'arrêt
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
});
