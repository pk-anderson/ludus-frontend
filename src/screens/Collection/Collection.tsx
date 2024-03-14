import React from 'react';
import styles from './Collection.module.css';
import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Collection: React.FC = () => {
    const location = useLocation();
    const games = location.state?.games || [];
  return (
    <div className={styles.myCollectionContainer}>
      <div className={styles.dividerContainer}>
        <div className={styles.dividerButton}>
          <Button
              text="Sort By"
              height={40}
              width={80} 
              backgroundColor="#ca8324" 
              textSize={16}
              textColor="#ffffff"
              borderRadius={25}
          />
        </div>
        <hr className={styles.collectionDivider} />
      </div>

    </div>
  );
};

export default Collection;
