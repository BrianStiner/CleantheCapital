// Set scroll threshold
const scrollThreshold = 500;

// Get a reference to #logo
const logoElement = document.getElementById('logo');
const videoBoxElement = document.getElementById('video-box');

// Listen for scroll events on window
window.addEventListener('scroll', () => {
    // Check if #logo has .big class
    if (logoElement.classList.contains('big')) {
        // If window.scrollY > scrollThreshold, remove .big class from #logo
        if (window.scrollY > scrollThreshold) {
            logoElement.classList.remove('big');
            logoElement.classList.remove('set');
        }
    } else {
        // If window.scrollY < scrollThreshold, add .big class to #logo
        if (window.scrollY < scrollThreshold) {
            logoElement.classList.add('big');
            if (window.innerWidth > 1200) {
                logoElement.classList.add('set');
            } else if (window.innerWidth <= 1200) {
                logoElement.classList.remove('set');
                calcleft = (window.innerWidth - 1200) / 2;
                videoBoxElement.style.margin_left = '-' + calcleft + 'px';
            }
        }
    }
});


