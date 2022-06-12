let etapas= [
    {
    titulo:'VEREADOR'
        numeros: 5,
get numeros() {
        return this.numeros;
    },
set numeros(value) {
        this.numeros = value;
    },
candidatos: [
    {
        numero: 38111,
        name:'Bertano de Tal',
        partido:'ABC',
        fotos:[
            { url:38111.jpg, legenda:'Vereador',small:false }
        ]
    },
    {
        numero: 77222,
        name:'Jose de Oliveira',
        partido:'DVD',
        fotos:[
            { url:77222.jpg, legenda:'Vereador',small:false }
        ]   
    },
]
    },
    {
        titulo:'PREFEITO',
        numeros: 2,
    candidatos: [
        {
            numero: 99,
            name:'Ciclano',
            partido:'DVD',
            vice:'Ciclano de Souza',
            fotos:[
                { url:'xxxx.jpg', legenda:'Prefeito'},
                { url:'1xxxx.jpg', legenda:'Vice-Prefeito',small:false }
            ]   
        },
{
    numero: 48,
    name:'Jose Ciclano',
    partido:'DVD',
    vice:'Maria Ciclana de Souza',
    fotos:[
        { url:'4xxxx.jpg', legenda:'Prefeito'},
        { url:'3xxxx.jpg', legenda:'Vice-Prefeito',small:false }
    ]   
},  
]
    }
