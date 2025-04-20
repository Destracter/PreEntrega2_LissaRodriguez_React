import React, { useState } from 'react';
import { useShop } from '../contexts/ShopContext';

const Cart = () => {
  const { getCartItems, removeItem, clear } = useShop();
  const cartItems = getCartItems();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [isValidated, setIsValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.email) {
      console.log('Datos de la compra:', { ...formData, cartItems });
      setIsValidated(true);
      alert('Compra validada con éxito. ¡Gracias por tu compra!');
      clear(); 
    } else {
      alert('Por favor, completa todos los campos del formulario.');
    }
  };

  return (
    <div>
      <h1>Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <>
          <button onClick={clear}>Vaciar Carrito</button>
          <h2>Datos necesarios para la  compra</h2>
          {!isValidated ? (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Teléfono:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Validar Compra</button>
            </form>
          ) : (
            <p>Compra validada. Gracias por tu compra, {formData.name}!</p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;

