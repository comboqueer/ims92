document.addEventListener('DOMContentLoaded', () => {
    // Éléments du DOM
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    const dropdownToggle = document.querySelector('.dropdown > a');

    // Gestion du Menu Mobile
    menuToggle.addEventListener('click', () => {
        // Active/Désactive l'animation du bouton burger
        menuToggle.classList.toggle('is-active');

        // Affiche/Masque le menu mobile
        navLinks.classList.toggle('mobile-nav-active');
    });

    // Gestion de la fermeture du menu mobile lors du clic sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('mobile-nav-active')) {
                menuToggle.classList.remove('is-active');
                navLinks.classList.remove('mobile-nav-active');
            }
        });
    });

    // Gestion du Dropdown sur mobile (au clic au lieu du hover)
    if (window.innerWidth <= 992) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownToggle.parentElement.classList.toggle('active');
        });
    }

    // Effet de scroll sur la Navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Gestion de la classe active au scroll (très basique pour la trame)
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});
