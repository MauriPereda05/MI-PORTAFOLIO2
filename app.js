// Activar el menú hamburguesa en pantallas pequeñas
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Verifica si los elementos existen antes de añadir el evento
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle('active');
            navbarCollapse.classList.toggle('active');
        });
    }
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Remueve la clase 'active' de todos los enlaces
        links.forEach(l => l.classList.remove('active'));

        // Agrega la clase 'active' al enlace clickeado
        link.classList.add('active');
    });
});


