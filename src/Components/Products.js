import React from 'react';
import { challengeAPI, products } from '../service/ChallengesAPI';
import Product from './Product';
import styles from './Products.module.css';

const Products = ({ poc, categories }) => {
  const [productList, setProductList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    const pocId = poc[0].id;
    categories.map((category) => {
      return challengeAPI(products, {
        id: pocId,
        search: '',
        categoryId: category.id,
      }).then((prd) => {
        setProductList((prevState) => [
          ...prevState,
          Object.assign(prd.data.poc, { title: category.title }),
        ]);
      });
    });
    setLoading(false);
  }, [categories, poc]);

  if (loading)
    return (
      <div className="container mainContainer">
        <p>Carregando...</p>
      </div>
    );
  else
    return (
      <div className="container mainContainer">
        {productList &&
          productList.map((item, index) => (
            <div className={styles.productContent} key={index}>
              {item.products.length > 0 && (
                <h2 className={styles.shelfTitle}>{item.title}</h2>
              )}
              <div className={styles.productsContainer}>
                {item.products.map((item) => (
                  <Product item={item} key={item.id} />
                ))}
              </div>
            </div>
          ))}
      </div>
    );
};

export default Products;
