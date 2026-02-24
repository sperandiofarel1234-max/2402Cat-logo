import { useState, useEffect } from 'react';
import ProdutoCard from './components/ProdutoCard.jsx';
import './App.css';  // se não tiver App.css ainda, crie ele no passo 4

function App() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    setTimeout(() => {
      const mockProdutos = [
        {
          nome: 'Camiseta Básica',
          preco: 39.90,
          imagem: 'https://via.placeholder.com/200?text=Camiseta',
          descricao: 'Confortável e 100% algodão.',
        },
        {
          nome: 'Tênis Esportivo',
          preco: 149.90,
          imagem: 'https://via.placeholder.com/200?text=Tênis',
          descricao: 'Amortecimento e solado antiderrapante.',
        },
      ];
      setProdutos(mockProdutos);
      setLoading(false);
    }, 1500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !preco || !descricao) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    const novoProduto = {
      nome,
      preco: parseFloat(preco),
      imagem: 'https://via.placeholder.com/200?text=Novo+Produto',
      descricao,
    };
    setProdutos([...produtos, novoProduto]);
    setNome('');
    setPreco('');
    setDescricao('');
  };

  return (
    <div className="app">
      <h1>Catálogo de Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Preço (R$)"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          step="0.01"
          required
        />
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
        <button type="submit">Adicionar Produto</button>
      </form>

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <div className="grid">
          {produtos.map((produto, index) => (
            <ProdutoCard
              key={index}
              nome={produto.nome}
              preco={produto.preco}
              imagem={produto.imagem}
              descricao={produto.descricao}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;