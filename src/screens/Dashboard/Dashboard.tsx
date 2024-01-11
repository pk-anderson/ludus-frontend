import React from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../../components/Navbar/Navbar';
import GameLibrary from '../../components/GameLibrary/GameLibrary';
import AchievementsRow from '../../components/AchievementsRow/AchievementsRow';

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

  // Exemplo de dados de achievements
  const achievementImages = [
    { id: 1, image: 'achievement.png', name: 'Achievement1' },
    { id: 2, image: 'achievement.png', name: 'Achievement2' },
    { id: 3, image: 'achievement.png', name: 'Achievement3' },
  ];

  const totalAchievements = 3;

  return (
    <div className={styles.dashboardContainer}>
      <Navbar userPhoto={userPhoto} userName={userName} />
      <GameLibrary games={gameCovers} totalGames={totalGames} />
      <AchievementsRow achievements={achievementImages} totalAchievements={totalAchievements} />
    </div>
  );
}

export default Dashboard;
