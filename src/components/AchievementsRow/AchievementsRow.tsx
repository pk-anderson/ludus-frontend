import React from 'react';
import styles from './AchievementsRow.module.css';
import Button from '../Button/Button';

interface AchievementsRowProps {
  achievements: { id: number; image: string; name: string }[];
  totalAchievements: number;
}

const AchievementsRow: React.FC<AchievementsRowProps> = ({ achievements, totalAchievements }) => {
  const renderAchievements = () => {
    return achievements.map((achievement) => (
      <div key={achievement.id} className={styles.achievement}>
        <img src={achievement.image} alt={achievement.name} className={styles.achievementImage} />
        <p className={styles.achievementName}>{achievement.name}</p>
      </div>
    ));
  };

  return (
    <div className={styles.achievementsRow}>
      <div className={styles.achievementsHeader}>
        <h2>Achievements</h2>
        <p>Total Achievements: {totalAchievements}</p>
      </div>
      <div className={styles.achievementsImages}>
        {renderAchievements()}
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

export default AchievementsRow;
