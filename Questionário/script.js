let titulo = document.querySelector('h1')
let instruçoes = document.querySelector('#instruçoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 //pontos do placar
let placar = 0 // placar

//perguntas
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//alternativas
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

//article com class das questoes
let articleQuestoes = document.querySelector('.questoes')
//ol li com as alteranitvas de respostas
let alteranitvas = document.querySelector('#alternativas')

const q0 = {
  numQuestao: 0,
  pergunta: 'pergunta',
  alterantivaA: 'Alternativa A',
  alterantivaB: 'Alternativa B',
  alterantivaC: 'Alternativa C',
  alterantivaD: 'Alternativa D',
  correta: '0'
}
const q1 = {
  numQuestao: 1,
  pergunta: 'pergunta',
  alterantivaA: 'Alternativa A',
  alterantivaB: 'Alternativa B',
  alterantivaC: 'Alternativa C',
  alterantivaD: 'Alternativa D',
  correta: '0'
}
const q2 = {
  numQuestao: 2,
  pergunta: 'pergunta',
  alterantivaA: 'Alternativa A',
  alterantivaB: 'Alternativa B',
  alterantivaC: 'Alternativa C',
  alterantivaD: 'Alternativa D',
  correta: '0'
}
const q3 = {
  numQuestao: 3,
  pergunta: 'pergunta',
  alterantivaA: 'Alternativa A',
  alterantivaB: 'Alternativa B',
  alterantivaC: 'Alternativa C',
  alterantivaD: 'Alternativa D',
  correta: '0'
}
const q4 = {
  numQuestao: 4,
  pergunta: 'pergunta',
  alterantivaA: 'Alternativa A',
  alterantivaB: 'Alternativa B',
  alterantivaC: 'Alternativa C',
  alterantivaD: 'Alternativa D',
  correta: '0'
}
//contante com array
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao
let totalDeQuestoes = questoes.length - 1
console.log('Total De Questões' + totalDeQuestoes)
total.textContent = totalDeQuestoes

//montar a primeira questao completa para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.numQuestao
a.textContent = q1.alterantivaA
b.textContent = q1.alterantivaB
c.textContent = q1.alterantivaC
d.textContent = q1.alterantivaD

//configurar o Value inicial da questao 1
a.setAttribute('value,1A')
b.setAttribute('value,1B')
c.setAttribute('value,1C')
d.setAttribute('value,1D')

//PARA MONTAR AS NOVAS QUESTOES aCHO QUE VAI DAR ERRO AQUI NQUESTAO OU NUMQ
function proximaQuestao(nQuestao) {
  numero.textContent = nQuestao
  numQuestao.textContent = questoes[nQuestao].numQuestao
  pergunta.textContent = questoes[nQuestao].pergunta
  a.textContent = questoes[nQuestao].alterantivaA
  b.textContent = questoes[nQuestao].alterantivaB
  c.textContent = questoes[nQuestao].alterantivaC
  d.textContent = questoes[nQuestao].alterantivaD
  a.setAttribute('value', nQuestao + 'A')
  b.setAttribute('value', nQuestao + 'B')
  c.setAttribute('value', nQuestao + 'C')
  d.setAttribute('value', nQuestao + 'D')
}
function bloquearAlternativas() {
  a.classList.add('bloqueado')
  b.classList.add('bloqueado')
  c.classList.add('bloqueado')
  d.classList.add('bloqueado')
}
function desbloquearAlternativas() {
  a.classList.remove('bloqueado')
  b.classList.remove('bloqueado')
  c.classList.remove('bloqueado')
  d.classList.remove('bloqueado')
}
function verificarSeAcertou(nQuestao, resposta) {

  let respostaEscolhida = nQuestao.value
  console.log('Questão' + numeroDaQuestao)

  let numeroDaQuestao = resposta.textContent
  console.log('RespU' + respostaEscolhida)

  let certa = questoes[numeroDaQestao].correta
  console.log('RespC' + certa) 

  if( respostaEscolhida ==certa){
    pontos += 10 
    // console.log("Acertou!")
   }else {
   // console.log("errou!")
   }
   // Atualizar placar
   placar = pontos
   instruçoes.textContent ="Pontos" + placar

   // bloquear novas escolhas de opçoes
   bloquearAlternativas()

   setInterval(function(){
    proxima = numeroDaQuestao+1

    if(proxima> totalDeQuestoes){
      console.log('Fim de Jogo!')
      fimDoJogo()
        }else{
          proximaQuestao(proxima)
        }
   },250)
desbloquearAlternativas()
   }
   function fimDoJogo(){
    instruçoes.textContent = "Fim de Jogo!"
    numQuestao.textContent= ""

    let pont =''
    pontos ==0 ? pont ='ponto' : pont='pontos'

    pergunta.textContent = "Voce Conseguiu" + pontos +""+'pont'

    a.textContent =""
    b.textContent =""
    c.textContent =""
    d.textContent =""

    a.setAttribute('value','0')
    b.setAttribute('value','0')
    c.setAttribute('value','0')
    d.setAttribute('value','0')

    articleQuestoes.getElementsByClassName.display = 'none'

    setTimeout(function(){
      pontos = 0  // zerar placar nao esquecer
      location.reload
    },2000)
   }

