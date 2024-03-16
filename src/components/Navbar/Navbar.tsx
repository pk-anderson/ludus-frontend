import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  userPhoto?: string;
  userName: string;
}

const Navbar: React.FC<NavbarProps> = ({ userPhoto, userName }) => {
  const menuItems = ['Home', 'Games', 'Communities', 'Users'];
  const searchIcon = 'searchicon.png';

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = async () => {
    try {
      navigate('/search', { state: { text: searchText } });
    } catch (error) {
      console.error('Erro na busca:', error);
      alert('Error on finding games. Try again.');
    }
  };

  const handleHomeClick = () => {
    setSearchText('')
    navigate('/dashboard');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.userInfo}>
        <img src={userPhoto} alt="User" className={styles.userPhoto} />
        <span className={styles.userName}>{userName}</span>
      </div>
      <ul className={styles.navbarItems}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`} onClick={item === 'Home' ? handleHomeClick : undefined}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
          value={searchText}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()}
        />
        <img src={searchIcon} alt="Search" className={styles.searchIcon} />
      </div>
    </nav>
  );
};

export default Navbar;
