const imgs= document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){ /* para quando chegar a ultima imagem ,o carrocel voltar a primeira imagem */
  idx++;

  if(idx > img.length -1){
    idx =0;
  }

  imgs.style.transform =`translateX(${-idx *500}px)`;
}

setInterval(carrossel,1800);