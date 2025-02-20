import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartWidget = () => {
  return (
    <Badge badgeContent={4} color="success">
        <AddShoppingCartIcon color="action" />
    </Badge>
  )
}

export default CartWidget