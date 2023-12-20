import React, { useState } from 'react';
import styles from './Login.module.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { login } from '../../api/Login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      console.log(email);
      console.log(password);
      const { result, authorization } = await login(email, password);
      console.log(result);
      console.log(authorization);
      // Aqui você pode adicionar a lógica para redirecionar ou fazer algo com o resultado do login
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ludus</h1>
      </header>
      <div className={styles.rectangle}>
        <h2 className={styles.loginText}>Enter Your Account</h2>
        <div className={styles.form}>
          <p className={styles.labelRight}>Email</p>
          <Input
            backgroundColor="#2c2c2c"
            text="Input Email"
            textColor="white"
            height={40}
            width={300}
            borderRadius={25}
            type="text"
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.loginButton}>
          <Button
            text="Sign In"
            height={40}
            width={120}
            backgroundColor="#ca8324"
            textSize={16}
            textColor="white"
            borderRadius={25}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
