function adjustSize() {
  let screenWidth = window.innerWidth;
  let baseSize = 16; // Taille de base en px

  if (screenWidth < 1200) {
    document.body.style.fontSize = baseSize * 0.9 + "px";
  }
  if (screenWidth < 768) {
    document.body.style.fontSize = baseSize * 0.8 + "px";
  }
  if (screenWidth < 480) {
    document.body.style.fontSize = baseSize * 0.7 + "px";
  }
}

// Ajuster au chargement et au redimensionnement
window.addEventListener("load", adjustSize);
window.addEventListener("resize", adjustSize);
