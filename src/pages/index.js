import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'dental');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Insumos Dentales de Confianza'}
        subtitle={'Entrega directa a tu consultorio + Pago en abonos'}
        ctaText={'Ver catálogo'}
        ctaAction={goToShop}
      />

      {/* Mensaje de bienvenida */}
      <div className={styles.messageContainer}>
        <p>
          Bienvenido a <span className={styles.gold}>Mobadent</span>, una empresa familiar que abastece a odontólogos en Quito y alrededores.
        </p>
        <p>
          Productos seleccionados, atención personalizada y facilidades de pago.
        </p>
      </div>

      {/* Colección destacada */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Productos recomendados'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Nuevos productos */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Nuevas llegadas'} link={'/shop'} textLink={'ver todos'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Oferta destacada */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'Destacado'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'Icono destacado'}
            title={'Favoritos de odontólogos'}
            description={`Productos esenciales, seleccionados por profesionales y entregados directamente a tu consulta.`}
            textLink={'Explorar'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Promoción actual */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`Hasta 30% de descuento\nEn artículos seleccionados`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>Restauración</Link>
          <Link to={'/shop'}>Ortodoncia</Link>
        </div>
      </div>

      {/* Testimonio o valor de marca */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Confianza y cercanía'}
        quote={
          '"Gracias a Mobadent recibo mis insumos sin salir del consultorio. ¡Y el crédito en abonos me ayuda un montón!"'
        }
      />

      {/* Blog */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Consejos dentales'} subtitle={'Tips útiles para tu consulta'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Compromiso */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Comprometidos con tu práctica'}
          subtitle={
            'Nuestro objetivo es facilitarte el acceso a productos dentales de calidad con un servicio confiable y personalizado.'
          }
          ctaText={'Conócenos'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Redes sociales */}
      <div className={styles.socialContainer}>
        <Title
          name={'Nuestros clientes'}
          subtitle={'Etiqueta a @mobadent en Instagram para aparecer aquí'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'cliente 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'cliente 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'cliente 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'cliente 4'} />
        </div>
      </div>

      {/* Grid de atributos (envíos, garantía, etc.) */}
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
