import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role="presentation"
      onClick={() => navigate('/')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 32"
        height="32"
        fill="currentColor"
      >
        <path d="M3 24V8h5.4l3.9 7.8L16.2 8H21v16h-3v-11l-5 9H11l-5-9v11H3Z" />
        <path d="M24 24V8h8c2.1 0 3.7.5 4.9 1.6 1.2 1 1.8 2.6 1.8 4.7s-.6 3.7-1.8 4.7c-1.2 1.1-2.8 1.6-4.9 1.6h-5v3.4H24Zm3-6.4h4.5c1 0 1.8-.2 2.3-.7.5-.4.7-1.1.7-2s-.2-1.6-.7-2c-.5-.5-1.3-.7-2.3-.7H27v5.4Z" />
        <path d="M42.5 24V8h10.7v2.6h-7.7v4.5h6.6v2.6h-6.6v4.6h7.7V24H42.5Z" />
        <path d="M57.8 24V8h3v13.4h7.6V24h-10.6Z" />
        <path d="M71.3 24l5.4-16h3.6l5.4 16h-3.2l-1.2-3.6h-5.6L74.5 24h-3.2Zm5.4-6.5h4.1l-2-6.2h0l-2.1 6.2Z" />
        <path d="M89.8 24V8h3v16h-3Z" />
        <path d="M97.2 24V8h3l6.2 11.4h.1V8h2.8v16h-3l-6.2-11.4h-.1V24h-2.8Z" />
        <path d="M117.2 24V8h10.7v2.6h-7.7v4.5h6.6v2.6h-6.6v4.6h7.7V24h-10.7Z" />
      </svg>
    </div>
  );
};

export default Brand;
