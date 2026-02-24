function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>R$ {preco.toFixed(2)}</p>
      <p>{descricao}</p>
    </div>
  );
}

export default ProdutoCard;