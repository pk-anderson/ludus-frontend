import React from 'react';
import styles from './SignUp.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const SignUp = () => {
  return (
    <div className={styles.signUpContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ludus</h1>
      </header>
      <div className={styles.rectangle}>
        <h2 className={styles.signUpText}>Create Your Account</h2>
        <div className={styles.form}>
        <p className={styles.labelRight}>Username</p>
          <Input
            backgroundColor="#2c2c2c"
            text="Input Username"
            textColor="white"
            height={40}
            width={300}
            borderRadius={25}
            type="text"
          />
          <p className={styles.labelRight}>Email</p>
          <Input
            backgroundColor="#2c2c2c"
            text="Input Email"
            textColor="white"
            height={40}
            width={300}
            borderRadius={25}
            type="text"
          />
          <p className={styles.labelRight}>Password</p>
          <Input
            backgroundColor="#2c2c2c"
            text="Input Password"
            textColor="white"
            height={40}
            width={300}
            borderRadius={25}
            type="password"
          />
        </div>
        <div className={styles.signUpButton}>
          <Button
            text="Sign Up"
            height={40}
            width={120}
            backgroundColor="#ca8324"
            textSize={16}
            textColor="white"
            borderRadius={25}
          />
        </div>
     </div>
    </div>
  );
};

export default SignUp;
