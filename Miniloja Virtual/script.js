const itens = [
  { id:0,
  nome:'camiseta',
  img:'image.jpg',
  quantidade: 0
  },
  { id:1,
    nome:'camiseta',
    img:'image.jpg',
    quantidade: 0
    },
    { id:2,
      nome:'camiseta',
      img:'image.jpg',
      quantidade: 0
      },
    ]
      inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        itens.map((val)=>{
          containerProdutos.innerHTML +=
          <div class ="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`"href="">Adicionar ao carrinho!</a>
          </div>
        })
      }

      inicializarLoja();

      atualizarCarrinho = () => {
var link =document.getElementsByTagName('a')
}