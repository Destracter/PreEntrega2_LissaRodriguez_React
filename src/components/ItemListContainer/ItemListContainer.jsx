const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    color: '#333',
    fontSize: '24px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      {greeting}
    </div>
  );
};

export default ItemListContainer;

