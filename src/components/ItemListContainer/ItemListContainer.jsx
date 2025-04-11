import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const collectionRef = collection(db, 'productos');
        let q;

        if (categoryId) {
          q = query(collectionRef, where('categoryId', '==', categoryId));
        } else {
          q = query(collectionRef);
        }

        const querySnapshot = await getDocs(q);
        const productos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductosFiltrados(productos);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    margin: '10px 0',
    fontSize: '18px',
  };

  return (
    <div style={containerStyle}>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul style={listStyle}>
          {productosFiltrados.map((producto) => (
            <li key={producto.id} style={itemStyle}>
              <Link to={`/category/${producto.categoryId}/item/${producto.id}`}>{producto.titulo}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemListContainer;


