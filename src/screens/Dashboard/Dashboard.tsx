import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import Button from '../../components/Button/Button';

function Dashboard() {
  const [userData, setUserData] = useState<any>(null); 

  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  const defaultProfilePic = 'nophoto.jpg';

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
                <hr className={styles.divider} />
              </div>
            </div>
          </div>
          <div className={styles.userData}>
            {userData.total_points && (
              <h2 className={styles.userPoints}>{userData.total_points} Points</h2>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
