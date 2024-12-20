// Activar el menú hamburguesa en pantallas pequeñas
document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

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

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.welcome-text');
    const container = document.querySelector('.welcome-container');
    
    // Detectar el fin de la animación
    textElement.addEventListener('animationend', () => {
      container.classList.add('written');
    });
  });

  function descargarCV() {
    const enlace = document.createElement('a');
    enlace.href = '/CV/Mauricio-Pereda-Ruiz-CV-actualizado.pdf'; // Ruta del archivo
    enlace.download = 'Mauricio-Pereda-Ruiz-CV-actualizado'; // Nombre con el que se descargará
    enlace.click(); // Simula un clic para iniciar la descarga
}


