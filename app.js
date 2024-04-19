window.addEventListener("scroll", function() {
    var header = document.querySelector("header"); // Cambiado de getElementById("header") a querySelector("header")
    if (window.scrollY > 0) {
        header.classList.add("navbar-scrolled");
    } else {
        header.classList.remove("navbar-scrolled");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los elementos de clase 'experiencia-item'
    var experienciaItems = document.querySelectorAll(".experiencia-item");

    // Iterar sobre cada elemento
    experienciaItems.forEach(function(item) {
        // Hacer que el elemento sea inicialmente transparente
        item.style.opacity = 0;

        // Animar la opacidad para hacer que aparezca suavemente
        fadeIn(item);
    });
});

// Función para animar la opacidad (aparecer suavemente)
function fadeIn(element) {
    var opacity = 0;
    var timer = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = opacity;
        opacity += 0.05; // Ajusta la velocidad de desvanecimiento según sea necesario
    }, 50); // Cambia el valor del intervalo para ajustar la velocidad del desvanecimiento
}
