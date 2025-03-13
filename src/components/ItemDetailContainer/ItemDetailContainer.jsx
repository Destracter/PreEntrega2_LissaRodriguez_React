import { useParams } from 'react-router-dom';

const productos = [
  { id: 'rtx-4060', titulo: 'RTX-4060', precio: 300, categoria: 'pc', productId: 'P001' },
  { id: 'rtx-4070', titulo: 'RTX-4070', precio: 550, categoria: 'pc', productId: 'P002' },
  { id: 'rtx-4080', titulo: 'RTX-4080', precio: 1000, categoria: 'pc', productId: 'P003' },
  { id: 'rtx-4090', titulo: 'RTX-4090', precio: 2000, categoria: 'pc', productId: 'P004' },
  { id: 'adatavme1tb', titulo: 'SSD Adata NVME 1TB PCI 4.0', precio: 100, categoria: 'pc', productId: 'P005' },
  { id: 'hinyxnvme2tb', titulo: 'SSD Hinyx NVME 2TB PCI 4.0', precio: 200, categoria: 'pc', productId: 'P006' },
  { id: 'asusrogz790intel', titulo: 'Mother Asus Rog z790 Intel', precio: 750, categoria: 'pc', productId: 'P007' },
  { id: 'asustufa620am5', titulo: 'Mother Asus Tuf a620 AM5 AMD', precio: 450, categoria: 'pc', productId: 'P008' },
  { id: 'deepcool600wbronze', titulo: 'Fuente Deepcool 600w PLUS Bronze', precio: 90, categoria: 'pc', productId: 'P009' },
  { id: 'corsairsfx850wgold', titulo: 'Fuente Corsair 850w PLUS Gold', precio: 150, categoria: 'pc', productId: 'P010' },
  { id: 'i714700k', titulo: 'Procesador Intel i714700k', precio: 500, categoria: 'pc', productId: 'P011' },
  { id: 'i914900k', titulo: 'Procesador Intel i914900k', precio: 780, categoria: 'pc', productId: 'P012' },
  { id: 'ryzen59600x', titulo: 'Procesador AMD Ryzen 5 9600x', precio: 300, categoria: 'pc', productId: 'P013' },
  { id: 'ryzen78700g', titulo: 'Procesador AMD Ryzen 7 8700g', precio: 450, categoria: 'pc', productId: 'P014' },
  { id: 'patriot32gbddr4', titulo: '32 gb de RAM DDR4 Patriot Viper 3600mhz', precio: 100, categoria: 'pc', productId: 'P015' },
  { id: 'team32gbddr5', titulo: '32 gb de RAM DDR5 Team 6000mhz', precio: 150, categoria: 'pc', productId: 'P016' },
  { id: 'samsungips24', titulo: 'Monitor Gamer IPS 24 Pulgadas Samsung', precio: 140, categoria: 'pc', productId: 'P017' },
  { id: 'samsung34', titulo: 'Monitor Gamer OLED 34 Pulgadas Samsung', precio: 2500, categoria: 'pc', productId: 'P018' },
  { id: 'corsairatx', titulo: 'Gabinete Corsair ATX', precio: 110, categoria: 'pc', productId: 'P019' },
  { id: 'lianlisfx-sfx-li-tx', titulo: 'Gabinete Lian Li sfx-li-tx', precio: 130, categoria: 'pc', productId: 'P020' },
  { id: 'iphone12', titulo: 'iPhone 14', precio: 800, categoria: 'celulares', productId: 'P021' },
  { id: 'iphone13', titulo: 'iPhone 15', precio: 1000, categoria: 'celulares', productId: 'P022' },
  { id: 'galaxys21', titulo: 'Samsung Galaxy S21', precio: 850, categoria: 'celulares', productId: 'P023' },
  { id: 'galaxys22', titulo: 'Xiaomi Poco X6 Pro', precio: 900, categoria: 'celulares', productId: 'P024' },
  { id: 'macbookair', titulo: 'MacBook Air', precio: 1200, categoria: 'portatiles', productId: 'P025' },
  { id: 'macbookpro', titulo: 'MacBook Pro', precio: 1500, categoria: 'portatiles', productId: 'P026' },
  { id: 'dellxps', titulo: 'Dell Inspiron 15', precio: 1300, categoria: 'portatiles', productId: 'P027' },
  { id: 'hpenvy', titulo: 'HP 3000', precio: 1100, categoria: 'portatiles', productId: 'P028' },
];

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productoEncontrado = productos.find((prod) => prod.id === itemId);
    setProducto(productoEncontrado);
  }, [itemId]);

  return (
    <div>
      {producto ? (
        <div>
          <h2>{producto.titulo}</h2>
          <p>ID del producto: {producto.id}</p>
          <p>Precio: ${producto.precio}</p>
          <p>Product ID: {producto.productId}</p>
        </div>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
