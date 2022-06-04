//cartas
let imagens =[];
for (let i=1;i<=8; i++) imagens.push(`http://picsum.photos/id/${i}/80`);
let fundo ='https://picsum.photos/80?grayscale';
 
// Estado do jogo
let cartas =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let cliquesTravados = false;
let temCartaVirada = false;
let posicaoCartaVirada = -1;
let valorCartaVirada = 0;

onload = () => {

    // carrega as imagens de fundo
let elemImagens= document.querySelectorAll('#memoria img');
elemImagens.forEach ((img,i) =>{
       img.src = fundo; 
       img.setAttribute('data-valor',i);
       img.style.opacity = 0.5;
    });

    //cria evento do botao inicio
    document.querySelector('#btInicio').onclick = iniciaJogo;
};

//-------------------------
// Inicia o jogo
//-------------------------
const iniciaJogo = () =>{  
    // embaralhar cartas 
    for (let i=0; i<cartas.length;i++){
        let p = Math.trunc(Math.random() * cartas.length)
       let aux = cartas[p];
       cartas[p]=cartas [i];
       cartas[i]=aux;
    }

    // Associar evento a imagem
    let elemImagens =document.querySelectorAll('#memoria img');
    elemImagens.forEach((img,i)=>{
        img.onclick = trataCliqueImagem;
        img.style.opacity = 1;
    });

    //reinicia o jogo
    cliquesTravados = false;
    temCartaVirada= false;
    posicaoCartaVirada =-1;
    valorCartaVirada = 0;
    pontos = 0;

    // bloqueia botao inciar apos o jogo comecar.
    document.querySelector('#btInicio').disable = true;
};

//-------------------------
// clique na imagem pra virar a carta
//-------------------------
const trataCliqueImagem =(e)=>{
    if(cliquesTravados)return;
    const p = +e.target.getAttibute('data-valor');
    const valor = cartas[p];
    e.target.src = imagens[valor - 1];
    e.target.onclick = null;

    if(!temCartaVirada) {
        temCartaVirada= true;
        posicaoCartaVirada =p;
        valorCartaVirada = valor;
    } else{
        if (valor ==valorCartaVirada){
            pontos ++;
            const p0 = posicaoCartaVirada;
        } else{
            cliquesTravados = true;
            setTimeout( ()=>{
            e.target.src = fundo ;
            e.target.onclick = trataCliqueImagem;
            let img = document.querySelector('#memoria #i+'posicaoCartaVirada);
            img.src = fundo;
            img.onclick = trataCliqueImagem;
            cliquesTravados = false;
            },1500);  
        }
        temCartaVirada = false;
        posicaoCartaVirada = -1;
        valorCartaVirada = 0;
    }
    

    cliquesTravados = true;

   setTimeout( ()=>{
        e.target.src = fundo ;
        e.target.onclick = trataCliqueImagem;
        cliquesTravados = false;
    },1500);
    if(pontos ==8){
        document.querySelector('#btInicio').disable = false;
    }
}
