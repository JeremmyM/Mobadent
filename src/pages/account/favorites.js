import React, { useState } from 'react';
import { navigate } from 'gatsby';
import * as styles from './favorites.module.css';

import Button from '../../components/Button';
import Breadcrumbs from '../../components/Breadcrumbs';
import Container from '../../components/Container';
import FavoriteCard from '../../components/FavoriteCard/FavoriteCard';
import Layout from '../../components/Layout/Layout';
import Modal from '../../components/Modal';

import { isAuth } from '../../helpers/general';

const FavoritesPage = (props) => {
  const sampleFavorite1 = {
    color: 'Azul Cobalto',
    size: 'Pequeño',
    img: '/products/shirt1.jpg',
    alt: 'favorito 1',
  };

  const sampleFavorite2 = {
    color: 'Lila Pastel',
    size: 'Pequeño',
    img: '/products/shirt2.jpg',
    alt: 'favorito 2',
  };

  const sampleFavorite3 = {
    color: 'Verde Musgo',
    size: 'Mediano',
    img: '/products/shirt3.jpg',
    alt: 'favorito 3',
  };

  if (isAuth() === false) {
    navigate('/login');
  }

  const [showDelete, setShowDelete] = useState(false);

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Inicio' },
              { link: '/account/favorites', label: 'Favoritos' },
            ]}
          />
          <h1>Favoritos</h1>
          <div className={styles.favoriteListContainer}>
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite1}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite2}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite3}
            />
            <FavoriteCard
              showConfirmDialog={() => setShowDelete(true)}
              {...sampleFavorite2}
            />
          </div>
        </Container>
      </div>
      <Modal visible={showDelete} close={() => setShowDelete(false)}>
        <div className={styles.confirmDeleteContainer}>
          <h4>¿Eliminar de Favoritos?</h4>
          <p>
            ¿Estás seguro de que deseas eliminar este producto de tus favoritos?
            Esta acción no se puede deshacer una vez presiones <strong>'Eliminar'</strong>.
          </p>
          <div className={styles.actionContainer}>
            <Button onClick={() => setShowDelete(false)} level={'primary'}>
              Eliminar
            </Button>
            <Button onClick={() => setShowDelete(false)} level={'secondary'}>
              Cancelar
            </Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default FavoritesPage;
