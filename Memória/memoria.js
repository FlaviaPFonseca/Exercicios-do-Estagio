//cartas
let imagens =[];

for (let i=1;i<=8; i++) imagens.push(`http://picsum.photos/id/${i}/80`);
let fundo ='https://picsum.photos/80?grayscale';

onload = () => {
let elemImagens= document.querySelectorAll('#memoria img');
elemImagens.forEach ((img,i) =>{
       img.src = fundo; 
       img.setAttribute('data-valor',i);
       img.style.opacity = 0.4;
    });
}