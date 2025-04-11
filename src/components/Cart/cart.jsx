import { createContext, useState, useContext } from 'react';

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };
  const clear = () => {
    setCart([]);
  };
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  const getCartItems = () => {
    return cart;
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart, getCartCount, getCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  return useContext(CartContext);
};
