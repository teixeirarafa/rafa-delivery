import React from 'react';
import {
  challengeAPI,
  allCategoriesSearch,
  products,
} from '../service/ChallengesAPI';

const ProductsDashboard = ({ location }) => {
  const [productList, setProductList] = React.useState([]);
  const poc = location.state.poc.pocSearch;
  console.log(productList);
  React.useEffect(() => {
    let categories;

    if (poc.length === 0) return;

    challengeAPI(allCategoriesSearch).then((resp) => {
      categories = resp.data;

      categories.allCategory.map((category) => {
        return challengeAPI(products, {
          id: poc[0].id,
          search: '',
          categoryId: category.id,
        }).then((prd) => {
          setProductList((prevState) => [
            ...prevState,
            Object.assign(prd.data.poc, { title: category.title }),
          ]);
        });
      });
    });
  }, [poc]);

  return (
    <div>
      {poc.length === 0 && <div>não há produtos para serem exibidos</div>}

      {productList !== 0 &&
        productList.map((item, index) => (
          <div className="container mainContainer" key={index}>
            <h2>{item.title}</h2>
            <div>
              {item.products.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.images[0].url}
                    alt={item.title}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '../Assets/broken-1.png';
                    }}
                  />
                  <div>{item.title}</div>
                  <div>{item.productVariants[0].price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsDashboard;
