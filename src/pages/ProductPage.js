import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product details from an API
    const fetchProduct = async () => {
      const products = [
        { id: 1, name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/200', description: 'Comfortable cotton T-shirt' },
        { id: 2, name: 'Jeans', price: 50, image: 'https://via.placeholder.com/200', description: 'Slim-fit denim jeans' },
        { id: 3, name: 'Shoes', price: 80, image: 'https://via.placeholder.com/200', description: 'Casual sneakers' },
      ];
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <div style={styles.details}>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <p>{product.description}</p>
          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
  },
  image: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  details: {
    flex: 1,
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductPage;