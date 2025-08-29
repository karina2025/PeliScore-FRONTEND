// Obtener el botón por su ID
const mainButton = document.getElementById('main-button');

// Agregar un "event listener" para el clic
mainButton.addEventListener('click', () => {
    // Redirigir a otra página (cambia 'otra-pagina.html' por la URL que necesites)
    // La ruta ahora es relativa al archivo inicio.js
window.location.href = '../paginas/login.html';// La ruta ahora es relativa al archivo inicio.js
});