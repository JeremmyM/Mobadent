import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = () => {
  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => navigate('/')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 40"
        height="32"
        fill="currentColor"
      >
        <path d="M2 30V10h6l6 10 6-10h6v20h-4V17l-4 7h-4l-4-7v13H2z" />
        <path d="M38 30V10h11c2.6 0 4.7.7 6.1 2.1 1.4 1.3 2.1 3.3 2.1 5.9s-.7 4.6-2.1 5.9C53.7 26.3 51.6 27 49 27h-7v3h-4zm4-6h7c1.3 0 2.3-.3 3-.9.6-.6 1-1.5 1-2.8s-.3-2.2-1-2.8-1.7-.9-3-.9h-7v7.4z" />
        <path d="M62 30l7-20h5l7 20h-5l-1.5-5h-6.9l-1.5 5h-5zm7.1-9h4.7l-2.3-7h-.1l-2.3 7z" />
        <path d="M85 30V10h4v8h7v-8h4v20h-4v-8h-7v8h-4z" />
        <path d="M104 30V10h4v20h-4z" />
        <path d="M112 30V10h4l9 14.7h.1V10h4v20h-4l-9-14.7h-.1V30h-4z" />
        <path d="M138 30V10h11c2.6 0 4.7.7 6.1 2.1 1.4 1.3 2.1 3.3 2.1 5.9s-.7 4.6-2.1 5.9C153.7 26.3 151.6 27 149 27h-7v3h-4zm4-6h7c1.3 0 2.3-.3 3-.9.6-.6 1-1.5 1-2.8s-.3-2.2-1-2.8-1.7-.9-3-.9h-7v7.4z" />
      </svg>
    </div>
  );
};

export default Brand;
