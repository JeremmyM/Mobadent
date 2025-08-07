import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/prueba.png'}
        title={'Cementos'}
        text={'VER PRODUCTOS'}
        link={'/shop/cementos'}
      />
      <ProductCollection
        image={'/collections/prueba.png'}
        title={'Composites'}
        text={'VER PRODUCTOS'}
        link={'/shop/composites'}
      />
      <ProductCollection
        image={'/collections/prueba.png'}
        title={'Blanqueamiento'}
        text={'VER PRODUCTOS'}
        link={'/shop/blanqueamiento'}
      />
      <ProductCollection
        image={'/collections/prueba.png'}
        title={'Endodoncia'}
        text={'VER PRODUCTOS'}
        link={'/shop/endodoncia'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
