const ItemDetail = ({ producto, handleBuy }) => {
    return (
      <div>
        <h2>{producto.title}</h2>
        <img
          src={producto.image}
          alt={`Imagen de ${producto.title}`}
          style={{ width: "200px", height: "200px" }}
        />
        <p>{producto.description}</p>
        <p>Precio: ${producto.price}</p>
        <button onClick={handleBuy}>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ItemDetail;
  