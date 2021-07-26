const botao__mobile = document.getElementById('botao__mobile');

function toggleMenu() {
    const nav = document.getElementById('cabecalho__navegacao');
    nav.classList.toggle('active');
}

botao__mobile.addEventListener('click', toggleMenu);