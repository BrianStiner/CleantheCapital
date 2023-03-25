// Set scroll threshold
const scrollThreshold = 300;

// Get a reference to #logo
const logoElement = document.getElementById('logo');
const videoBoxElement = document.getElementById('video-box');

// if the screen is wider than 1200px, add .set class to #logo
if (window.innerWidth > 1200) {
    logoElement.classList.add('set');
} else if (window.innerWidth <= 1200) {
    logoElement.classList.remove('set');
    calcleft = (window.innerWidth - 1200) / 2;
    videoBoxElement.style.left = calcleft + 'px';
}
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


