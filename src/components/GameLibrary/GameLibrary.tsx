import React from 'react';
import styles from './GameLibrary.module.css';
import Button from '../Button/Button';

interface GameLibraryProps {
  games: string[];
  totalGames: number;
}

const GameLibrary: React.FC<GameLibraryProps> = ({ games, totalGames }) => {
  const renderGames = () => {
    return games.map((game, index) => (
      <img key={index} src={game} alt={`Game ${index}`} className={styles.gameCover} />
    ));
  };

  return (
    <div className={styles.gameLibrary}>
      <div className={styles.libraryHeader}>
        <h2>Your Library</h2>
        <p>Total Games: {totalGames}</p>
      </div>
      <div className={styles.gamesRow}>
        {renderGames()}
      </div>
      <div className={styles.viewAllButton}>
        <Button
            text="View All"
            height={35}
            width={120}
            backgroundColor="#ca8324"
            textSize={16}
            textColor="#ffffff"
            borderRadius={25}
        />
      </div>
    </div>
  );
};

export default GameLibrary;
