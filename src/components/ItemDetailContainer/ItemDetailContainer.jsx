import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useCart } from "../Cart/cart.jsx";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      setError(null);
      try {
        const docRef = doc(db, "productos", itemId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          setError("El producto no fue encontrado.");
        }
      } catch (error) {
        console.error("Error al obtener el detalle del producto:", error);
        setError("Hubo un problema al cargar el detalle del producto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [itemId]);

  const handleBuy = () => {
    if (producto) {
      addItem(producto, 1);
    }
  };

  return (
    <div>
      {loading ? (
        <p>Cargando detalle del producto...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : producto ? (
        <ItemDetail producto={producto} handleBuy={handleBuy} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


