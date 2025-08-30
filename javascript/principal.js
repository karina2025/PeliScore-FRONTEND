document.addEventListener('DOMContentLoaded', () => {
    // Obtener el botón de categorías y el menú desplegable
    const categoryBtn = document.getElementById('category-btn');
    const categoryMenu = document.getElementById('category-menu');

    // Escuchar el clic en el botón de categorías
    categoryBtn.addEventListener('click', (event) => {
        // Evita que el enlace de navegación funcione y se recargue la página
        event.preventDefault(); 
        // Alterna la clase 'show' para mostrar u ocultar el menú
        categoryMenu.classList.toggle('show');
    });

    // Ocultar el menú si el usuario hace clic fuera de él
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#category-btn')) {
            if (categoryMenu.classList.contains('show')) {
                categoryMenu.classList.remove('show');
            }
        }
    });

    // Aquí iría la lógica para filtrar películas cuando se haga clic en una categoría
    // const categoryLinks = document.querySelectorAll('#category-menu a');
    // categoryLinks.forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         const category = event.target.dataset.category;
    //         // Llama a la API con la categoría seleccionada
    //         console.log(`Pidiendo películas de la categoría: ${category}`);
    //         // Por ejemplo: fetch(`/api/peliculas?categoria=${category}`)...
    //     });
    // });

});