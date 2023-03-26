// Set scroll threshold
const scrollThreshold = 400;

// Get a reference to #logo
const logoElement = document.getElementById('logo');

calcleft = (window.innerWidth - 1268) / 2 + 20;
document.getElementById('video-box').style.marginLeft = calcleft + 'px';

if (window.innerWidth < 1268) {
    logoElement.classList.remove('big');
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

