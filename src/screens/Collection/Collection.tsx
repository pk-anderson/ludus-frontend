import React from 'react';
import styles from './Collection.module.css';
import { useLocation } from 'react-router-dom';

const Collection: React.FC = () => {
    const location = useLocation();
    const games = location.state?.games || [];
    console.log(games)
  return (
    <div className={styles.myCollectionContainer}>
      
    </div>
  );
};

export default Collection;
