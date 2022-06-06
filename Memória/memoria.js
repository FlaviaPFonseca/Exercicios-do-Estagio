//cartas
let imagens =[];
for (let i = 1; i <=8; i++) imagens.push(`http://picsum.photos/id/${i}/80`);
let fundo ='https://picsum.photos/90?grayscale';
 
// Elementos do estado do jogo
let cartas =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let cliquesTravados = false;
let temCartaVirada = false;
let posicaoCartaVirada = -1;
let valorCartaVirada = 0;
const timerDoJogo = new Timer('#timer');

onload = () => {
// carrega as imagens de fundo
let elemImagens= document.querySelectorAll('#memoria img');
elemImagens.forEach ( (img,i) =>{
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
        let p = Math.trunc(Math.random() * cartas.length);
       let aux = cartas[p];
       cartas[p] = cartas[i];
       cartas[i]=aux;
    }

    // Associar evento a imagem
    let elemImagens =document.querySelectorAll('#memoria img');
    elemImagens.forEach((img,i)=> {
        img.onclick = trataCliqueImagem;
        img.style.opacity = 1;
        img.src= fundo;
    });

    //reinicia o jogo
    cliquesTravados = false;
    temCartaVirada= false;
    posicaoCartaVirada =-1;
    valorCartaVirada = 0;
    pontos = 0;

    // bloqueia botao inciar apos o jogo comecar.
    document.querySelector('#btInicio').disable = true;
    document.querySelector('#timer').style.backgroundColor ='orange';
    timerDoJogo.start();
};


//-------------------------
// clique na imagem pra virar a carta
//-------------------------
const trataCliqueImagem =(e)=>{
    if(cliquesTravados)return;
    const p = +e.target.getAttribute('data-valor');
    const valor = cartas[p];
    e.target.src = imagens[valor - 1];
    e.target.onclick = null;

    if(!temCartaVirada) {
        temCartaVirada= true
        posicaoCartaVirada =p;
        valorCartaVirada = valor;
    } else{
        if (valor ==valorCartaVirada){
            pontos ++;
            const p0 = posicaoCartaVirada;
        } else{
            cliquesTravados = true;
            setTimeout( ()=>{
            e.target.src = fundo;
            e.target.onclick = trataCliqueImagem;
            let img = document.querySelector('#memoria #i'+p0);
            img.src = fundo;
            img.onclick = trataCliqueImagem;
            cliquesTravados = false;
            },1500);  
        }
        temCartaVirada = false;
        posicaoCartaVirada = -1;
        valorCartaVirada = 0;
    }
            if(pontos == 8){
               document.querySelector('#btInicio').disable = false; 
               document.querySelector('#timer').style.backgroundColor='ligthgreem';
               timerDoJogo.stop();
            }
        };
//-------------------------
// Timer- Contador de tempo
//-------------------------
function Timer(e){
    this.element = e;
    this.time = 0;
    this.control = null;
    this.start =() => {
        thid.time=0;
     this.control = setInterval( ()=>{
         this.time ++;
         const minutes = math.trunc(this.time/60);
         const seconds =this.time % 60;
         document.querySelector(this.element).innerHTML =
         (minuts <10 ? '0':'')+  minutes+
         ':' + (seconds <10 ? '0':'')+ 
         seconds;
     }, 1000 );
    };
    this.stop =() => {
    clearInterval(this.control);
    };

    
}