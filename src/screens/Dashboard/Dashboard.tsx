import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'
import { findUser } from '../../api/user';
import { DecodedToken } from '../constants';

function Dashboard() {
  const [userData, setUserData] = useState<any>(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decodedToken: any = jwtDecode<DecodedToken>(token);
          if (decodedToken && 'id' in decodedToken) {
            const userId: number = decodedToken.id;
            const user = await findUser(userId);
            localStorage.setItem('user', JSON.stringify(user.result));
            setUserData(user.result);
          } else {
            console.error('Invalid token');
          }
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      } else {
        console.error('No token found');
      }
    };

    fetchData();
  }, []);

  const defaultProfilePic = 'nophoto.jpg';

  const handleSeeAll = async () => {
        navigate('/mycollection', { state: { games: userData.games } });
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
                      onClick={handleSeeAll}
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