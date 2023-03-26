// Set scroll threshold
const scrollThreshold = 400;

// Get a reference to #logo
const logoElement = document.getElementById('logo');
// Get the root element
var r = document.querySelector(':root');

// Used to modify elements to fit nicely on the page.
calcleft = (window.innerWidth - 1268) / 2 + 20;
r.style.setProperty('--left', calcleft + 'px');


console.log(logoElement.classList.contains('big'));
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

if (window.innerWidth < 1268) {
    logoElement.classList.remove('big');
}

