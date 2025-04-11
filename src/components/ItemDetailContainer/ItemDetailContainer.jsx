import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client'; 
import { useCart } from '../Cart/cart.jsx'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, 'productos', itemId);
        const docSnapshot = await getDoc(docRef);

        if (docSnapshot.exists()) {
          setProducto({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.error('Producto no encontrado en Firestore');
        }
      } catch (error) {
        console.error('Error al obtener el detalle del producto:', error);
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
      ) : producto ? (
        <div>
          <h2>{producto.title}</h2>
          <p>ID del producto: {producto.id}</p>
          <p>Precio: ${producto.price}</p>
          <p>Category ID: {producto.categoryId}</p>
          <button onClick={handleBuy}>Agregar al carrito</button>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;


