import React from 'react';
import { useShop } from '../../contexts/ShopContext.jsx';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {
  const { cart } = useShop();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Badge badgeContent={cartCount} color="success">
      <AddShoppingCartIcon color="action" />
    </Badge>
  );
};

export default CartWidget;


