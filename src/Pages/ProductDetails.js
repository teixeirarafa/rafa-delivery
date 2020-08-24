import React from 'react';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ location }) => {
  const product = location.state.item;

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          src={product.images[0].url}
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.className = 'imageNotFound';
          }}
          className={styles.image}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productTitle}>{product.title}</div>
        <div className={styles.priceText}>
          {product.productVariants[0].price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <div className={styles.containerAddCustomButton}>
          <div id="minus-button" className="css-4g6ai3">
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              style={{ width: '24px', height: '24px' }}
            >
              <path
                d="M19,13H5V11H19V13Z"
                style={{ fill: 'rgb(153, 153, 153' }}
              ></path>
            </svg>
          </div>
          <div id="amount-1">01</div>
          <div id="plus-button" className="css-4g6ai3">
            <svg
              viewBox="0 0 24 24"
              role="presentation"
              style={{ width: '24px', height: '24px' }}
            >
              <path
                d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                style={{ fill: 'rgb(255, 197, 0' }}
              ></path>
            </svg>
          </div>
        </div>
        <button
          type="button"
          id="add-product"
          className={styles.buttonContainer}
        >
          <div className="css-1yml8pt">
            <div id="product-amount">ADICIONAR (1)</div>
            <div id="product-total-price">R$&nbsp;2,79</div>
          </div>
        </button>
        <div className="css-yl3byp-Spacer"></div>
      </div>
    </div>
  );
};

export default ProductDetails;
