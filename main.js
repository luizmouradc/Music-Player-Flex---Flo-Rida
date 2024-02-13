const botao_play_pause = document.getElementById('play-pause');
const botao_avacar = document.getElementById('proximo');
const botao_voltar = document.getElementById('anterior');

const musica = document.getElementById('musica');
const nome_musica = document.getElementById('nome_musica');
const total_musicas = 4;

let ta_tocando = 0;

const lista_musica = ["Musicas do Flo Rida/Club Can't Handle Me ft. David Guetta.mp3", "Musicas do Flo Rida/Low (feat. T-Pain).mp3" , "Musicas do Flo Rida/Right Round (feat. Ke$ha).mp3" , "Musicas do Flo Rida/Whistle.mp3" , "Musicas do Flo Rida/Wild Ones ft. Sia.mp3"]
let musica_atual = 0;

function tocar_musica() {
    musica.play();

    botao_play_pause.classList.remove('bi-play-circle');
    botao_play_pause.classList.add('bi-pause-circle');
    

    ta_tocando = 1;
    console.log('Função tocar_ou_pausar() foi chamada.');
}

function pausar_musica() {
    musica.pause();

    botao_play_pause.classList.add('bi-play-circle');
    botao_play_pause.classList.remove('bi-pause-circle-fill');

    ta_tocando = 0;
    console.log('Função tocar_ou_pausar() foi chamada.');
}

function tocar_ou_pausar() {
    if (ta_tocando === 0) {
        tocar_musica();
    } else {
        pausar_musica();
    }
}

function trocar_nome_musica() {
    // Obtém o nome da música atual da lista
    const nomeArquivo = lista_musica[musica_atual];
    // Extrai apenas o nome da música do caminho do arquivo
    const nome = nomeArquivo.substring(nomeArquivo.lastIndexOf('/') + 1);
    // Remove a extensão do arquivo
    const nomeSemExtensao = nome.substring(0, nome.lastIndexOf('.'));
    // Define o nome da música na interface
    nome_musica.innerText = nomeSemExtensao;
}

function proxima_musica(){
    if (musica_atual === total_musicas - 1) {
        musica_atual = 0;
    } else {
        musica_atual = musica_atual + 1;
    }

    musica.src = lista_musica[musica_atual];
    tocar_musica();
    trocar_nome_musica();
}

function voltar_musica(){
    if (musica_atual === 0) {
        musica_atual = total_musicas - 1;
    } else {
        musica_atual = musica_atual - 1;
    }

    musica.src = lista_musica[musica_atual];
    tocar_musica();
    trocar_nome_musica();
}

botao_play_pause.addEventListener('click', tocar_ou_pausar);

botao_avacar.addEventListener('click',proxima_musica);
botao_voltar.addEventListener('click',voltar_musica);

musica.addEventListener('ended', proxima_musica);
