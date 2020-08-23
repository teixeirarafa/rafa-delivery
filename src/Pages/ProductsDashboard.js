import React from 'react';
import Products from '../Components/Products';
import { challengeAPI, allCategoriesSearch } from '../service/ChallengesAPI';

const ProductsDashboard = ({ location }) => {
  const [categories, setCategories] = React.useState([]);

  const poc = location.state.poc.pocSearch;

  React.useEffect(() => {
    if (poc.length === 0) return;

    challengeAPI(allCategoriesSearch).then((resp) => {
      setCategories(resp.data.allCategory);
    });
  }, [poc.length]);

  if (poc.length === 0)
    return (
      <div className="container mainContainer">
        não há produtos para serem exibidos
      </div>
    );
  if (poc.length > 0) return <Products poc={poc} categories={categories} />;
};

export default ProductsDashboard;
