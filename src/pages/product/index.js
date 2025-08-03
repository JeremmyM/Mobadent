import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Container from '../../components/Container';
import CurrencyFormatter from '../../components/CurrencyFormatter';
import * as styles from './product.module.css';
import { toOptimizedImage } from '../../helpers/general';

const ProductPage = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProduct = localStorage.getItem('selectedProduct');
    if (storedProduct) {
      setProduct(JSON.parse(storedProduct));
    }
  }, []);

  if (!product) {
    return (
      <Layout>
        <Container>
          <h1>Producto no encontrado</h1>
          <p>No se encontró información del producto seleccionado.</p>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <div className={styles.productContainer}>
          <img
            src={toOptimizedImage(product.image)}
            alt={product.alt || product.name}
            className={styles.image}
          />
          <div className={styles.details}>
            <h1>{product.name}</h1>
            <p className={styles.price}>
              <CurrencyFormatter amount={product.price} />
            </p>
            {product.originalPrice && (
              <p className={styles.originalPrice}>
                Precio anterior: <CurrencyFormatter amount={product.originalPrice} />
              </p>
            )}
            <p className={styles.meta}>{product.meta}</p>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductPage;

