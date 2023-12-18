import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import Button from '../../../components/Button/Button';

function HomePage() {
  return (
    <div className="container">
      <div className="headerText">
        <h1>Welcome to Ludus</h1>
        <div className="loginButton">
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
      <div className="subHeaderText">
        <p className="smallText">Create and</p>
        <p className="smallText">manage your</p>
        <p className="largeText">gaming profile</p>
        <div className="signupButton">
        <Button
          text="Create your account"
          height={40}
          width={300} 
          backgroundColor="#ca8324" 
          textSize={16}
          textColor="#ffffff"
          borderRadius={25}
        />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
