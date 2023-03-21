// Set transition percent
const transitionPercent = 10;

// Get a reference to #logo
const logo = document.getElementById('logo');

// Listen for scroll events on window
window.addEventListener('scroll', () => {
    // Calculate percent scrolled
    const percentScrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;

    // Check if #logo has .big class
    if (logo.classList.contains('big')) {
        // If percent scrolled > transitionPercent, remove .big class from #logo
        if (percentScrolled > transitionPercent) {
            logo.classList.remove('big');
        }
    } else {
        // If percent scrolled < transitionPercent, add .big class to #logo
        if (percentScrolled < transitionPercent) {
            logo.classList.add('big');
        }
    }
});
