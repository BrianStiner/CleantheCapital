window.addEventListener('load', function() {

    // Set scroll threshold
    const scrollThreshold = 400;

    // Get a reference to #logo
    const logoElement = document.getElementById('logo');
    // Get the root element
    var r = document.querySelector(':root');

    // Used to modify elements to fit nicely on the page.
    calcleft = (window.innerWidth - 1268) / 2 + 20;
    r.style.setProperty('--left', calcleft + 'px');

    // Listen for scroll events on window, if far enough down shrink logo, and reverse.
    window.addEventListener('scroll', () => {
        if (window.innerWidth < 1268) { return; } // Don't do anything if the window is too small.
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



    // Get all the fade-in elements
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Use GSAP to recursively initialize the elements to be invisible
    fadeInElements.forEach(function(element) {
        gsap.set(element.querySelectorAll('*'), { opacity: 0, y: -50 });
    });

    // Create an intersection observer
    const observer = new IntersectionObserver(function(entries) {
    // Loop through the entries
    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
        // Use GSAP to animate the element
        gsap.from(entry.target.querySelectorAll('*'), {
            opacity: 0, y: -50,
            duration: 1.6,
            ease: "power1.out",
            stagger: 0.2, delay: 0.2
        });

        // Stop observing the element
        observer.unobserve(entry.target);
        }
    });
    });

    // Observe all the fade-in elements
    fadeInElements.forEach(function(element) {
    observer.observe(element);
    });



});



// 1pvkrpIkDjUfBiQTf8rq5psSG58aQ2fhTqrG2ojIrLY_FXQ9w2BQcC2hSTEFmJvz_0Dz73s9qZkKfQgDYzPw9TwYqRXPJcNyhstqN7D6wD3f7zmrP1wZaEgvj8Quwji5lvCA7M1oCsC1wE_Q_nJW-GTq8_Xpnwd0Ixrbiqa2BEDa2p63-FUARPoNaNvYboBFaPeBxNVeivzAAfIMpvsOirXyHQ9j2oYxXgHxQF9-_ghk