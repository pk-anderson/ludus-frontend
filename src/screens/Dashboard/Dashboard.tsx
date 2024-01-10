import React from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../../components/Navbar/Navbar';
import GameLibrary from '../../components/GameLibrary/GameLibrary';

function Dashboard() {
  const userPhoto = 'killua.png';
  const userName = 'Username';

  // Exemplo de dados de jogos
  const gameCovers = [
    'persona5.jpg',
    'seaofstars.jpg',
    'nier.jpg',
    'spiritfarer.jpeg',
    'hifirush.jpeg',
  ];

  const totalGames = 10; 

  return (
    <div className={styles.dashboardContainer}>
      <Navbar userPhoto={userPhoto} userName={userName} />
      <GameLibrary games={gameCovers} totalGames={totalGames} />
    </div>
  );
}

export default Dashboard;
