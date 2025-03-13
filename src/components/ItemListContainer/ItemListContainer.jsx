import { Link, useParams } from 'react-router-dom';

const productos = [
  { id: 'rtx-4060', titulo: 'RTX-4060', categoria: 'pc' },
  { id: 'rtx-4070', titulo: 'RTX-4070', categoria: 'pc' },
  { id: 'rtx-4080', titulo: 'RTX-4080', categoria: 'pc' },
  { id: 'rtx-4090', titulo: 'RTX-4090', categoria: 'pc' },
  { id: 'adatavme1tb', titulo: 'SSD Adata NVME 1TB PCI 4.0', categoria: 'pc' },
  { id: 'hinyxnvme2tb', titulo: 'SSD Hinyx NVME 2TB PCI 4.0', categoria: 'pc' },
  { id: 'asusrogz790intel', titulo: 'Mother Asus Rog z790 Intel', categoria: 'pc' },
  { id: 'asustufa620am5', titulo: 'Mother Asus Tuf a620 AM5 AMD', categoria: 'pc' },
  { id: 'deepcool600wbronze', titulo: 'Fuente Deepcool 600w PLUS Bronze', categoria: 'pc' },
  { id: 'corsairsfx850wgold', titulo: 'Fuente Corsair 850w PLUS Gold', categoria: 'pc' },
  { id: 'i714700k', titulo: 'Procesador Intel i714700k', categoria: 'pc' },
  { id: 'i914900k', titulo: 'Procesador Intel i914900k', categoria: 'pc' },
  { id: 'ryzen59600x', titulo: 'Procesador AMD Ryzen 5 9600x', categoria: 'pc' },
  { id: 'ryzen78700g', titulo: 'Procesador AMD Ryzen 7 8700g', categoria: 'pc' },
  { id: 'patriot32gbddr4', titulo: '32 gb de RAM DDR4 Patriot Viper 3600mhz', categoria: 'pc' },
  { id: 'team32gbddr5', titulo: '32 gb de RAM DDR5 Team 6000mhz', categoria: 'pc' },
  { id: 'samsungips24', titulo: 'Monitor Gamer IPS 24 Pulgadas Samsung', categoria: 'pc' },
  { id: 'samsung34', titulo: 'Monitor Gamer OLED 34 Pulgadas Samsung', categoria: 'pc' },
  { id: 'corsairatx', titulo: 'Gabinete Corsair ATX', categoria: 'pc' },
  { id: 'lianlisfx-sfx-li-tx', titulo: 'Gabinete Lian Li sfx-li-tx', categoria: 'pc' },
  { id: 'iphone12', titulo: 'iPhone 14', categoria: 'celulares' },
  { id: 'iphone13', titulo: 'iPhone 15', categoria: 'celulares' },
  { id: 'galaxys21', titulo: 'Samsung Galaxy S21', categoria: 'celulares' },
  { id: 'galaxys22', titulo: 'Xiaomi Poco X6 Pro', categoria: 'celulares' },
  { id: 'macbookair', titulo: 'MacBook Air', categoria: 'portatiles' },
  { id: 'macbookpro', titulo: 'MacBook Pro', categoria: 'portatiles' },
  { id: 'dellxps', titulo: 'Dell Inspiron 15', categoria: 'portatiles' },
  { id: 'hpenvy', titulo: 'HP 3000', categoria: 'portatiles' },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    if (categoryId) {
      const productosFiltrados = productos.filter(producto => producto.categoria === categoryId);
      setProductosFiltrados(productosFiltrados);
    } else {
      setProductosFiltrados(productos);
    }
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
      <ul style={listStyle}>
        {productosFiltrados.map((producto) => (
          <li key={producto.id} style={itemStyle}>
            <Link to={`/category/${producto.categoria}/item/${producto.id}`}>{producto.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
