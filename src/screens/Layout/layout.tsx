import React, { ReactNode } from 'react';
import Navbar from "../../components/Navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const userString = localStorage.getItem('user') ?? '';
  const user = JSON.parse(userString);
  const defaultPhoto = 'nophoto.jpg'
  const userPhoto = user?.profile_pic || defaultPhoto; 
  const userName = user?.username || 'Guest';

    return (
      <div>
        <Navbar userPhoto={userPhoto} userName={userName} />
        {children}
      </div>
    );
};

export default Layout;
