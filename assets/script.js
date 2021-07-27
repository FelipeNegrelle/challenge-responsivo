const botao__mobile = document.getElementById('botao__mobile');

function toggleMenu() {
    const nav = document.querySelector('nav');
    const header = document.querySelector('.cabecalho');
    const headerTitulo = document.querySelector('.cabecalho__titulo');
    nav.classList.toggle('active');
    header.classList.toggle('color');
    headerTitulo.classList.toggle('color');
}

botao__mobile.addEventListener('click', toggleMenu);