import React from 'react';
import { challengeAPI, pocSearch } from '../service/ChallengesAPI';
import SearchLocationInput from '../Components/SearchLocationInput';
import styles from './Home.module.css';

const Home = ({ history }) => {
  let poc;

  const addressSelected = (address) => {
    const algorithm = 'NEAREST';
    const lat = address.geometry.location.lat();
    const long = address.geometry.location.lng();
    const now = new Date().toISOString();

    challengeAPI(pocSearch, {
      algorithm,
      lat,
      long,
      now,
    }).then((resp) => {
      poc = resp.data;
      history.push({ pathname: `/products`, state: { poc } });
    });
  };

  return (
    <div className={styles.image}>
      <div className="container mainContainer">
        <div className={styles.inputAddress}>
          <h1 className={`${styles.colorTitle} title`}>
            Receba agora na sua casa bebidas geladas a preço de mercado
          </h1>
          <SearchLocationInput addressSelected={addressSelected} />
        </div>
      </div>
    </div>
  );
};

export default Home;
