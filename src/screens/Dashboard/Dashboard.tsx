import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState<any>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log(userData)
      setUserData(userData);
    }
  }, []);

  const defaultProfilePic = 'nophoto.jpg';

  const handleGameClick = (game: any) => {
    navigate(`/games/${game.id}`, { state: { game } });
  };

  return (
    <div className={styles.dashboardContainer}>
      {userData && (
        <div className={styles.userInfo}>
          <div className={styles.userContainer}>
            <div className={styles.userPhotoContainer}>
              {userData.profile_pic ? (
                <img src={userData.profile_pic} alt="User" className={styles.userPhoto} />
              ) : (
                <img src={defaultProfilePic} alt="Default User" className={styles.userPhoto} />
              )}
              <div className={styles.userData}>
                {userData.total_points && (
                  <h2 className={styles.userPoints}>{userData.total_points} Points</h2>
                )}
              </div>
            </div>
              <div className={styles.userNameContainer}>
                <p className={styles.username}>{userData.username}</p>
                  <div className={styles.collectionContainer}>
                    <p className={styles.myCollection}>My Collection</p>
                    <Button
                      text="See All"
                      height={40}
                      width={80} 
                      backgroundColor="#ca8324" 
                      textSize={16}
                      textColor="#ffffff"
                      borderRadius={25}
                    />
                  </div>
                <div className={styles.dividerContainer}>
                  <hr className={styles.divider} />
                  <div className={styles.gamesContainer}>
                    {userData.games && userData.games.slice(0, 4).map((game: any) => (
                      <Link className={styles.link} to={`/games/${game.id}`} state={{ result: game }}>
                        <div key={game.id} className={styles.gameContainer}>
                          <img src={game.cover?.url} alt={game.name} className={styles.gameCover} />
                          <p className={styles.gameTitle}>{game.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;