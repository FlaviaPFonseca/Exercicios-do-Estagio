let etapas = [
  {
    titulo: 'VEREADOR',
    numeros: 5,
    // get numeros() {
    //   return this.numeros
    // },
    // get(value) {
    //   this.numeros = value
    // },
    candidatos: [
      {
        numero: '38111',
        nome: 'Professor Bertano de Tal',
        partido: 'ABC',
        fotos: [{ url: '38111.JPG', legenda: 'Vereador', small: false }]
      },
      {
        numero: '77222',
        nome: 'Jose Bombeiro',
        partido: 'DVD',
        fotos: [{ url: '77222.JPG', legenda: 'Vereador', small: false }]
      }
    ]
  },
  {
    titulo: 'PREFEITO',
    numeros: 2,
    candidatos: [
      {
        numero: '99',
        nome: 'Ciclano',
        partido: 'DVD',
        vice: 'Ciclano de Souza',
        fotos: [
          { url: 'candidato2.JPG', legenda: 'Prefeito' },
          { url: 'vice2.JPG', legenda: 'Vice-Prefeito', small: true }
        ]
      },
      {
        numero: '48',
        nome: 'Jose Ciclano',
        partido: 'DVD',
        vice: 'Maria Ciclana de Souza',
        fotos: [
          { url: 'candidato1.JPG', legenda: 'Prefeito' },
          { url: 'vice1.JPG', legenda: 'Vice-Prefeito', small: true }
        ]
      }
    ]
  }
]
