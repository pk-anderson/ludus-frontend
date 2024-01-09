import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  userPhoto: string;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userPhoto, userName }) => {
  const menuItems = ['Home', 'Games', 'Communities', 'Users'];
  const searchIcon = 'searchicon.png';

  return (
    <nav className={styles.navbar}>
      <div className={styles.userInfo}>
        <img src={userPhoto} alt="User" className={styles.userPhoto}/>
        <span className={styles.userName}>{userName}</span>
      </div>
      <ul className={styles.navbarItems}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className={styles.searchBox}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </div>
    </nav>
  );
};

export default Navbar;
