import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import Rodape from "./componentes/Rodape";
import CarrinhoDeCompras from "./componentes/CarrinhoDeCompras";
import axios from "axios";


function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);
    axios.get('http://localhost:5000/produtos').then(res => {
      let prods = res.data.map(p => {
        return {
          id: p._id,
          nome: p.nome,
          valor: p.valor,
          foto: p.foto
        };
      });
      setProdutos(prods);
      setCarregando(false);
    });
  }, []);

  const comprar = (p) => {
    setCarrinho([...carrinho, p]);
  };

  return (
    <>
      <Cabecalho titulo='Minha Loja'/>
      {carregando && <h1>Carregando ...</h1>}
      <ListaDeProdutos titulo='Produtos' onComprar={comprar} produtos={produtos}/>
      <hr/>
      <CarrinhoDeCompras itens={carrinho}/>
      <Rodape/>
    </>
  );
}

export default App;
