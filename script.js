const titulos = document.querySelectorAll('h3');

titulos.forEach(titulo => {

    titulo.addEventListener('click', () => {
        const p = titulo.nextElementSibling;

        if (p) {
            p.classList.toggle('mostrar');
        }
    });
});