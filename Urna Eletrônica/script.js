/* CONTROLE DE INTERFACE */
let SeuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

/* VARIAVEIS DE CONTROLE DE AMBIENTE */
let etapaAtual = 0;

function comecarEtapa(){
    let etapa =etapas[etapaAtual];

    let numeroHtml ='';

SeuVotoPara.style.disply='none';
cargo.innerHTML = etapa.titulo;
descricao.innerHTML='';
aviso.style.disply ='none';
lateral.innerHTML='';
numeros.innerHTML= numeroHtml;
}

/* CONTROLE DE FUNCOES CLIQUES */
function clicou (n) {
   alert("clicou em "+n);
}
function branco () {
    alert("clicou em BRANCO");
 }
 function corrige () {
    alert("clicou em CORRIGE");
 }
 function confirma () {
    alert("clicou em CONFIRMA");
 }
 comecarEtapa();