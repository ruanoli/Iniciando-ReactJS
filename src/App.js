//importar o item que está na pasta components dentro da pasta item.
import Item from './components/item';
import Card from './components/card';

/*
Função normal
function App (){
  return(
    <h1>Hello, world!</h1>
  )
} 

*/
//Arrow function
const App = () =>{
  //O retorno de qualquer elemento no react, não nos permite trabalhar com elementos irmãos.
  //Por exemplo: eu não poderia colocar a tag <p> junto com a tag <h1> pq são elementos irmãos.
  //Uma das soluções, seria colocar os elementos dentro de uma div, ai sim poderia ter componentes irmãos.
  //Ou podemos trabalhar com o react fragment, que é uma div "vazia", somente abrimos a tag <> e fechamos </>.
  
  //No react a class, diferente do HTML, se coloca className.
  //No react o hrf da tag a, não pode ficar vazio.

  /*
  Se tiversimos colocado lá no index.js {props.children}, poderemos ter uma tag de fechamento <Item> </Item>
  com elemento children, utilizamos se tivermos elementos maiores.
  se tivermos uma tag com elementos mais simples, podemos utilizar o exemplo abaixo.
  */
  return( 
    <>
      <h1>Primeira aplicação com React.</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
      <Card/>
    </>
  )
}

export default App;
