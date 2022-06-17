const calcular = document.getElementById('calcular') //VAI ATRIBUIR VALOR//

function imc() {
  const nome = document.getElementById('nome').value //.VALUE = nome altura e peso =>PRECISA DO VALOR DIGITADO PARA O CODIGO FUNCIONAR
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado') //VAI ATRIBUIR VALOR//

  if (nome !== '') {
    alert('valor preenchido!')
  }
}
calcular.addEventListener('click', imc)
