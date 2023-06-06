
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink);




const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto);



const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const reposta = document.getElementById(controls);


    reposta.classList.toggle("ativa");
    const ativa = reposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
    console.log(controls)
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);



const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

trocarImagem = (event) => {
    const img = event.currentTarget;
    galeriaContainer.prepend(img);
}

galeria.forEach((img) => {
    img.addEventListener('click', trocarImagem)
});


if(window.SimpleAnime) {
    new SimpleAnime();
}
