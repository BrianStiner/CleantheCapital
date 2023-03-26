// Set scroll threshold
const scrollThreshold = 400;

// Get a reference to #logo
const logoElement = document.getElementById('logo');
const videoBoxElement = document.getElementById('video-box');

if (window.innerWidth < 1268) {
    logoElement.classList.remove('big');
    calcleft = (window.innerWidth - 1268) / 2;
    videoBoxElement.style.marginLeft = calcleft + 'px';
} else if (window.innerWidth > 1268) {
    calcleft = (window.innerWidth - 1268) / 2;
    videoBoxElement.style.marginLeft = calcleft + 'px';
}

// Listen for scroll events on window, if far enough down shrink logo, and reverse.
window.addEventListener('scroll', () => {
    if (logoElement.classList.contains('big')) {
        if (window.scrollY > scrollThreshold) {
            logoElement.classList.remove('big');
        }
    } else {
        if (window.scrollY < scrollThreshold) {
            logoElement.classList.add('big');
        }
    }
});

