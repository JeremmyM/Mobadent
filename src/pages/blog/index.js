import React from 'react';
import { navigate } from 'gatsby';

import BlogPreviewGrid from '../../components/BlogPreviewGrid';
import Container from '../../components/Container';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout/Layout';
import ThemeLink from '../../components/ThemeLink';

import { generateMockBlogData } from '../../helpers/mock';
import * as styles from './index.module.css';
import { toOptimizedImage } from '../../helpers/general';

const BlogPage = (props) => {
  const blogData = generateMockBlogData(6);

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        <Hero
          maxWidth={'400px'}
          image={toOptimizedImage('/blogCover.png')}
          title={`Historias que inspiran\ny consejos útiles para tu práctica`}
          ctaLink={'leer historia'}
          ctaTo={'/blog/sample'}
          header={'blog Mobadent'}
        />

        <div className={styles.navContainer}>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Todos los artículos
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Casos reales
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Productos destacados
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Consejos clínicos
          </ThemeLink>
          <ThemeLink
            onClick={() => navigate('/blog/sample')}
            to={'/blog/sample'}
          >
            Novedades Mobadent
          </ThemeLink>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogsContainer}>
          <Container size={'large'}>
            <BlogPreviewGrid data={blogData} hideReadMoreOnWeb showExcerpt />
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
