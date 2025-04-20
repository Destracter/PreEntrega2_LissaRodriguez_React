import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useCart } from "../Cart/cart.jsx";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const collectionRef = collection(db, "productos");
        const q = categoryId
          ? query(collectionRef, where("categoryId", "==", categoryId))
          : query(collectionRef);
        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductosFiltrados(productos);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Hubo un problema al cargar los productos.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : loading ? (
        <p>Cargando productos...</p>
      ) : productosFiltrados.length === 0 ? (
        <p>No hay productos disponibles para esta categoría.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {productosFiltrados.map((producto) => (
            <li key={producto.id} style={{ marginBottom: "20px", textAlign: "center" }}>
              <Link to={`/category/${producto.categoryId}/item/${producto.id}`}>
                <img
                  src={producto.image}
                  alt={`Imagen de ${producto.title}`}
                  style={{ width: "100px", height: "100px", objectFit: "cover", marginBottom: "10px" }}
                />
                <p>{producto.title}</p>
              </Link>
              <p>Precio: ${producto.price}</p>
              <button onClick={() => addItem(producto, 1)}>Agregar al carrito</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;

