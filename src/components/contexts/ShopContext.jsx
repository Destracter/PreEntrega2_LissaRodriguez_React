import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/client';
import { getDocs, collection } from 'firebase/firestore';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const productos = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(productos);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevCart, { ...item, quantity }];
    });
  };

  const getCartItems = () => cart;
  const removeItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clear = () => setCart([]);

  return (
    <ShopContext.Provider
      value={{ items, cart, addItem, getCartItems, removeItem, clear }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);



