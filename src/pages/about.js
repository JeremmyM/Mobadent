import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';

const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Mobadent\nTu aliado en insumos odontológicos`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Historia
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Valores
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Compromiso
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              Mobadent nació como un emprendimiento familiar con una idea clara: facilitar el acceso a insumos odontológicos de calidad para profesionales de todo el Ecuador.
            </p>
            <br />
            <br />
            <p>
              Iniciamos atendiendo a consultorios locales, entregando personalmente cada pedido. Hoy seguimos creciendo, sin perder lo más importante: la cercanía con nuestros clientes, la flexibilidad en el pago y la responsabilidad en la entrega.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'odontólogo trabajando'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Nuestros Valores</h3>
            <div ref={valuesRef}>
              <p>
                Creemos que la confianza se construye con servicio. Por eso en Mobadent cuidamos cada detalle: desde la selección de productos hasta la forma en que llegamos a tu consultorio.
              </p>
              <ol>
                <li>Atención personalizada para cada cliente</li>
                <li>Flexibilidad en pagos y entregas</li>
                <li>Transparencia y compromiso</li>
              </ol>
              <img alt={'familia Mobadent'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Compromiso</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Somos una empresa familiar ecuatoriana con visión de futuro. Nos comprometemos a trabajar con ética, fomentando relaciones duraderas con profesionales del sector odontológico.
              </p>
              <p>
                Nuestra meta es seguir creciendo junto a nuestros clientes, apoyando su trabajo diario con productos de confianza, asesoría constante y soluciones reales.
              </p>
              <p>
                Porque entendemos que la odontología cambia vidas, y queremos ser parte de ese impacto positivo.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'entrega de insumos'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
