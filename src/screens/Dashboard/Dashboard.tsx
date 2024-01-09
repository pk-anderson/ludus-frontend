import React from 'react';
import styles from './Dashboard.module.css';
import Navbar from '../../components/Navbar/Navbar';

function Dashboard() {

  const userPhoto = 'killua.png';
  const userName = 'Username';

  return (
    <div className={styles.dashboardContainer}>
    <Navbar userPhoto={userPhoto} userName={userName} />
    </div>
  );
}

export default Dashboard;
