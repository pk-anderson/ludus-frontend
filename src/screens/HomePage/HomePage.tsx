import React, { useEffect } from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

function HomePage() {
  useEffect(() => {
    document.body.classList.add(styles.bodyHomePage);
    return () => {
      document.body.classList.remove(styles.bodyHomePage);
    };
  }, []);

  const image = 'image.jpg'; 

  return (
    <div className={styles.homeContainer}>
      <div className={styles.headerText}>
        <h1>Welcome to Ludus</h1>
        <div className={styles.loginButton}>
          <Link to="/login">
            <Button
              text="Login"
              height={35}
              width={120}
              backgroundColor="#white"
              textSize={16}
              textColor="black"
              borderRadius={25}
            />
          </Link>
        </div>
      </div>
      <div className={styles.subHeaderText}>
        <div className={styles.textWithButton}>
          <p className={styles.smallText}>Create and</p>
          <p className={styles.smallText}>manage your</p>
          <p className={styles.largeText}>gaming profile</p>
          <div className={styles.signupButton}>
            <Link to="/signup">
              <Button
                text="Create your account"
                height={40}
                width={300} 
                backgroundColor="#ca8324" 
                textSize={16}
                textColor="#ffffff"
                borderRadius={25}
              />
            </Link>
          </div>
        </div>
        <img src={image} alt="Image" className={styles.image} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
