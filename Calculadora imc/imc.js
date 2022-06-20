const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    let classificacao = ''

    if (valorIMC < 18.5) {
      classificacao = 'baixo peso'
    } else if (valorIMC < 25) {
      classificacao = 'Peso Ideal! Parabéns!!'
    } else if (valorIMC < 30) {
      classificacao = 'Alerta de Sobrepeso!!'
    } else if (valorIMC < 35) {
      classificacao = 'Obesidade Grau I!!'
    } else if (valorIMC < 40) {
      classificacao = 'Obesidade Grau II!!'
    } else {
      classificacao =
        'Obesidade Grau III. Cuidado procure ajuda médica e psicológica!!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
   } else {
  }
}

calcular.addEventListener('click', imc);
