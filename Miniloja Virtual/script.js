const itens = [
  { id:0,
  nome:'dados',
  img:'image.png',
  quantidade: 0
  },
  { id:1,
    nome:'camiseta',
    img:'xxx2.jpg',
    quantidade: 0
    },
    { id:2,
      nome:'camiseta',
      img:'xxx3.jpg',
      quantidade: 0
      },
    ]
      inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        itens.map((val)=>{
          containerProdutos.innerHTML+=

          //acho que tem um erro aqui linha 24- retestar
          <div class ="produto-single">; 
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`"href="#">Adicionar ao carrinho!</a>
          </div>
    
        })
      }

      inicializarLoja();

      atualizarCarrinho = () => {
        console.log(itens);
      }

var link =document.getElementsByTagName('a');

for( var i = 0; i <links.length;i++){
  link[i].addEventListener("click",function(){
  let key = this.getAttributer('key');
  itens[key].quantidade ++;
  atualizarCarrinho();
  return false;
})


}