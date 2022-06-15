/* CONTROLE DE INTERFACE */
let SeuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let descricao = document.querySelector('.d-1-4')
let aviso = document.querySelector('.d-2')
let lateral = document.querySelector('.d-1-right')
let numeros = document.querySelector('.d-1-3')

/* VARIAVEIS DE CONTROLE DE AMBIENTE */
let etapaAtual = 0
let numero = ''
let votobranco = false
let corrigir = true

function comecarEtapa() {
  let etapa = etapas[etapaAtual]

  let numeroHtml = ''
  numero = ''
  votobranco = false
  corrigir = true

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>'
    } else {
      numeroHtml += '<div class="numero"></div>'
    }
  }

  SeuVotoPara.style.display = 'none'
  cargo.innerHTML = etapa.titulo
  descricao.innerHTML = ''
  aviso.style.display = 'none'
  lateral.innerHTML = ''
  numeros.innerHTML = numeroHtml
}

/* CONTROLE DE FUNCOES CLIQUES */
function atualizaInterface() {
  let etapa = etapas[etapaAtual]
  let candidato = etapa.candidatos.filter(item => {
    if (item.numero === numero) {
      return true
    } else {
      return false
    }
  })
  SeuVotoPara.style.display = 'block'
  aviso.style.display = 'block'

  if (candidato.length > 0) {
    candidato = candidato[0]
    descricao.innerHTML = `Nome: ${candidato.nome} <br/> Partido: ${candidato.partido}`
    let fotosHtml = ''
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="./${candidato.fotos[i].url}".JPG" alt=""/>
${candidato.fotos[i].legenda} </div>`
      } else {
        fotosHtml += `<div class="d-1-image"><img src="./${candidato.fotos[i].url}".JPG" alt=""/>
${candidato.fotos[i].legenda} </div>`
      }
    }
    lateral.innerHTML = fotosHtml
  } else {
    // SeuVotoPara.style.display = 'block'
    // aviso.style.display = 'block'
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
  }
}
function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca')
  if (elNumero !== null) {
    elNumero.innerHTML = n
    // numero += n;
    numero = `${numero}${n}`

    elNumero.classList.remove('pisca')
    if (elNumero.nextElementSibling !== null) {
      elNumero.nextElementSibling.classList.add('pisca')
    } else {
      atualizaInterface()
    }
  }
}
function branco() {
  if (numero === '') {
    branco = true
    SeuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    numeros.innerHTML = ''
    descricao.innerHTML =
      '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'
    lateral.innerHTML = ''
  }
  /*else {
  alert('Para votar em BRANCO \no campo de voto deve estar vazio.\n'+ 
      'Aperte CORRIGE para apagar o campo de voto.');*/
}

function corrige() {
  if (corrigir) {
    comecarEtapa()
  }
}
function confirma() {
  let etapa = etapas[etapaAtual]
  let votoConfirmado = false

  if (votobranco /*=== true*/) {
    votoConfirmado = true
    console.log('Confirmando como voto BRANCO')
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true
    console.log('Confirmando como ' + numero)
  }
  if (votoConfirmado) {
    etapaAtual++
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa()
    } else {
      corrigir = false
     document.querySelector('.tela').innerHTML =
        '<div style="margin: 0 auto;" class="aviso--gigante pisca">FIM</div>'
      console.log('FIM!')
    }
  }
}
comecarEtapa()
