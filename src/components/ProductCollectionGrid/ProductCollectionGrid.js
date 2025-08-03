import React from 'react';
import * as styles from './ProductCollectionGrid.module.css';

import ProductCollection from '../ProductCollection';

const ProductCollectionGrid = (props) => {
  return (
    <div className={styles.root}>
      <ProductCollection
        image={'/collections/collection1.png'}
        title={'Cementos'}
        text={'VER PRODUCTOS'}
        link={'/shop/cementos'}
      />
      <ProductCollection
        image={'/collections/collection2.png'}
        title={'Composites'}
        text={'VER PRODUCTOS'}
        link={'/shop/composites'}
      />
      <ProductCollection
        image={'/collections/collection3.png'}
        title={'Blanqueamiento'}
        text={'VER PRODUCTOS'}
        link={'/shop/blanqueamiento'}
        style={{ display: 'flex', justifyContent: 'center' }}
      />
      <ProductCollection
        image={'/collections/collection4.png'}
        title={'Endodoncia'}
        text={'VER PRODUCTOS'}
        link={'/shop/endodoncia'}
      />
    </div>
  );
};

export default ProductCollectionGrid;
