const botao__mobile = document.getElementById('botao__mobile');
const nav = document.querySelector('nav');
const header = document.querySelector('.cabecalho');
const headerTitulo = document.querySelector('.cabecalho__titulo');


function toggleMenu() {
    nav.classList.toggle('active');
    header.classList.toggle('color');
    headerTitulo.classList.toggle('color');
}

botao__mobile.addEventListener('click', toggleMenu);