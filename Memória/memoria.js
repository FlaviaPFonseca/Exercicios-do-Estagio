//cartas
let imagens =[];
for (let i=1;i<=8; i++) imagens.push(`http://picsum.photos/id/${i}/80`);
let fundo ='https://picsum.photos/80?grayscale';
 
// Estado do jogo
let cartas =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
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
};

//-------------------------
// clique na imagem pra virar a carta
//-------------------------
const trataCliqueImagem =(e)=>{
    const p = +e.target.getAttibute('data-valor');
    const valor = cartas[p];
    e.target.src = imagens[valor - 1];
    e.target.onclick = null;

    setTimeout( ()=>{
        e.target.src = fundo ;
        e.target.onclick = trataCliqueImagem;
    },1500);
    
}
