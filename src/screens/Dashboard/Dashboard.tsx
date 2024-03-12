import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';

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
          <div className={styles.userPhotoContainer}>
            {userData.profile_pic ? (
              <img src={userData.profile_pic} alt="User" className={styles.userPhoto} />
            ) : (
              <img src={defaultProfilePic} alt="Default User" className={styles.userPhoto} />
            )}
            <p className={styles.username}>{userData.username}</p>
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
