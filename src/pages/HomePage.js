import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'T-Shirt', price: 20, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Jeans', price: 50, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Shoes', price: 80, image: 'https://via.placeholder.com/200' },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <h2 style={styles.title}>Featured Products</h2>
      <div style={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    margin: '20px 0',
  },
  productList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
};

export default HomePage;