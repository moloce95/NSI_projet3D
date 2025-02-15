document.addEventListener("DOMContentLoaded", function () {
  // Création du laser
  let laser = document.createElement("div");
  laser.classList.add("laser-transition");
  document.body.appendChild(laser);

  document.querySelectorAll(".nav-buttons button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le chargement instantané
      let newPage = this.getAttribute("data-link"); // Récupère le lien

      // Active l'effet laser
      laser.classList.add("active");

      // Charge la nouvelle page après l'animation (500ms)
      setTimeout(() => {
        window.location.href = newPage;
      }, 500);
    });
  });
});
