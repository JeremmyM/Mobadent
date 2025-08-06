import React from 'react';

import Attribute from '../Attribute';

import * as styles from './AttributeGrid.module.css';

const AttributeGrid = (props) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'Envios gratuitos por toda la ciudad'}
        subtitle={'Contactanos'}
      />
      <Attribute
        icon={'cycle'}
        title={'devoluciones'}
        subtitle={'devoluciones hasta 30 dias'}
      />
      <Attribute
        icon={'creditcard'}
        title={'Pagos seguros'}
        subtitle={'Tus compras segurasy sencillas'}
      />
    </div>
  );
};

export default AttributeGrid;
