# PeliScore-FRONTEND
Nombre: Peliscore Frontend 

## Descripción
Aplicación web para reseñas de películas. Permite a los usuarios ver películas, filtrar por categorías, dejar comentarios y dar 'me gusta' o 'no me gusta'.
#  Tecnologías Utilizadas
Lenguajes: HTML5, CSS3, JavaScript (ES6+).

Bibliotecas/Frameworks: Ninguna por ahora (es un proyecto de JavaScript puro).

## Componentes Principales

Página de Inicio (index.html): Es la página de aterrizaje con el logo y el botón de redirección.

Página de Login (login.html): Contiene un formulario para que los usuarios ingresen sus credenciales.

Página Principal (/): La vista principal de la aplicación.

Sección Destacada: Muestra los detalles de una película.

Botones de Interacción: Me Gusta y No Me Gusta (id="likeButton", id="dislikeButton").

Sección de Comentarios: Área para ver y agregar comentarios.

Carruseles de Películas: Muestra listas de películas populares.

## Flujo de la Aplicación

Carga de la Página: El usuario abre index.html.

Redirección: El script inicio.js redirige al usuario a paginas/login.html.

Inicio de Sesión: El usuario ingresa sus credenciales.

Carga de Películas: Después del login, main.js hace una llamada a la API (GET /api/peliculas) para obtener la lista de películas y las muestra en la página principal.

Interacción: Al hacer clic en una película del carrusel, main.js pide los detalles de esa película a la API (GET /api/peliculas/{id}) y actualiza la sección destacada de la página.

##  Conexión con el Backend

Este frontend está diseñado para funcionar en conjunto con el siguiente backend, que es el que provee la API para todas las operaciones de tareas y autenticación.


## integrantes 
karina sanabria casas

