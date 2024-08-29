document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.getElementById('titulo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titulo.classList.add('visible');
            }
        });
    });

    observer.observe(titulo);
});

/* -------------------------------------------- FIM */


/* ANIMAÇÃO HABILIDADES */


document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-progress');
            bar.style.width = value;
        });
    };

    const handleScroll = () => {
        const section = document.querySelector('.habilidades');
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            animateProgressBars();
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});





let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', () => {
  menu.classList.add('abrir-menu1')
});

menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu1')
});

overlay.addEventListener('click', () => {
  menu.classList.remove('abrir-menu1')
});

