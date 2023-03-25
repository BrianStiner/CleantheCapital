// Set scroll threshold
const scrollThreshold = 400;

// Get a reference to #logo
const logoElement = document.getElementById('logo');

// Listen for scroll events on window
window.addEventListener('scroll', () => {
    // Check if #logo has .big class
    if (logoElement.classList.contains('big')) {
        // If window.scrollY > scrollThreshold, remove .big class from #logo
        if (window.scrollY > scrollThreshold) {
            logoElement.classList.remove('big');
        }
    } else {
        // If window.scrollY < scrollThreshold, add .big class to #logo
        if (window.scrollY < scrollThreshold) {
            logoElement.classList.add('big');
        }
    }
});

// If #Logo width > 650px, add .set class to #logo
if (logoElement.clientWidth > 650) {
    logoElement.classList.add('set');
}
// If #Logo width < 650px, remove .set class from #logo
else if (logoElement.clientWidth < 650) {
    logoElement.classList.remove('set');
}
