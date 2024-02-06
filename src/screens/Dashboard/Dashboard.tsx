import React from 'react';
import styles from './Dashboard.module.css';
import GameLibrary from '../../components/GameLibrary/GameLibrary';
import AchievementsRow from '../../components/AchievementsRow/AchievementsRow';

function Dashboard() {

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
      <GameLibrary games={gameCovers} totalGames={totalGames} />
      <AchievementsRow achievements={achievementImages} totalAchievements={totalAchievements} />
    </div>
  );
}

export default Dashboard;
