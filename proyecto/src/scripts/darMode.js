// Archivo main.js o script.js
function toggleDarkMode() {
    // Verificar si el modo oscuro está activado
    const isDarkMode = document.documentElement.classList.contains('dark');

    // Toggle de la clase 'dark' en el elemento html
    document.documentElement.classList.toggle('dark');

    // Guardar la preferencia en localStorage
    localStorage.setItem('darkMode', !isDarkMode);
}

// Función para inicializar el tema al cargar la página
function initializeTheme() {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('darkMode');

    // Si hay una preferencia guardada, aplicarla
    if (savedTheme !== null) {
        document.documentElement.classList.toggle('dark', JSON.parse(savedTheme));
        return;
    }

    // Si no hay preferencia guardada, usar la preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', initializeTheme);

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('darkMode');
    // Solo cambiar automáticamente si no hay preferencia guardada
    if (savedTheme === null) {
        document.documentElement.classList.toggle('dark', e.matches);
    }
});