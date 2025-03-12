function adjustZoom() {
  let screenWidth = window.innerWidth; // Récupère la largeur de l'écran
  let zoomLevel = screenWidth / 1920; // Ajuste selon une base 1920px (modifiable)

  // Appliquer le zoom sur le body
  document.body.style.transform = `scale(${zoomLevel})`;
  document.body.style.transformOrigin = "top left"; // Garde le coin supérieur gauche fixe
  document.body.style.width = `${100 / zoomLevel}%`; // Évite le dépassement horizontal
}

// Ajuster au chargement et au redimensionnement
window.addEventListener("load", adjustZoom);
window.addEventListener("resize", adjustZoom);
