import React from 'react';
import styles from './Product.module.css';

const Product = ({ item }) => {
  return (
    <a href="sa">
      <div className={styles.css14siswc}>
        <div className={styles.css1tkwx94}>
          <img
            src={item.images[0].url}
            alt={item.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.className = 'imageNotFound';
            }}
            className={styles.productImage}
          />
        </div>

        <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{item.title}</h3>
          <div className={styles.priceContainer}>
            <p className={styles.priceText}>
              {item.productVariants[0].price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Product;
