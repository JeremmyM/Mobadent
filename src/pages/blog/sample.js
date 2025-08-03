import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';
import { toOptimizedImage } from '../../helpers/general';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'odontología'}
              title={'Aliados Mobadent: Dra. Fernanda Castillo'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  La Dra. Fernanda Castillo, especialista en estética dental con más de 10 años de experiencia, confía en Mobadent para abastecer su consultorio con insumos de calidad. En esta edición, nos comparte cómo selecciona sus materiales y qué valora al momento de elegir un proveedor.
                </p>
                <p className={styles.blogParagraph}>
                  "Lo que más valoro de Mobadent es la atención personalizada, la puntualidad en las entregas y la facilidad de pago. Me da tranquilidad saber que siempre hay stock de los productos que más uso, y que si necesito algo urgente, me ayudan a resolverlo".
                </p>
                <p className={styles.blogParagraph}>
                  Fernanda lleva más de 2 años trabajando con nosotros y ha sido una de las primeras en probar nuestro sistema de pedidos por WhatsApp y los nuevos combos para tratamientos estéticos.
                </p>
                <p className={styles.blogParagraph}>
                  "No se trata solo de comprar productos, sino de tener un aliado que entienda cómo trabajamos los odontólogos. Eso marca la diferencia."
                </p>
              </div>
              <div className={styles.imagesContainer}>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/cloth.png')} alt={'consulta dental'} />
                </div>
                <div className={styles.imageContainer}>
                  <img src={toOptimizedImage('/collections/collection1.png')} alt={'insumos Mobadent'} />
                </div>
              </div>
              <div className={styles.content}>
                <h2 className={styles.blogSubHeader}>2. Atención que marca la diferencia</h2>
                <p className={styles.blogParagraph}>
                  En Mobadent entendemos que cada consultorio tiene sus propios ritmos, necesidades y preferencias. Por eso adaptamos nuestras entregas, combos y formas de pago para acompañar realmente el trabajo del profesional.
                </p>
                <p className={styles.blogParagraph}>
                  Nuestro objetivo no es solo vender productos, sino construir relaciones de largo plazo con odontólogos de todo el país, brindándoles confianza, rapidez y calidad en cada entrega.
                </p>
                <p className={styles.blogParagraph}>
                  ¿Quieres aparecer en nuestras historias de clientes destacados? Escríbenos y cuéntanos cómo usas los productos Mobadent en tu consulta.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
