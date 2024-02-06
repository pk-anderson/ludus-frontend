import React, { ReactNode } from 'react';
import Navbar from "../../components/Navbar/Navbar";

interface LayoutProps {
  userPhoto: string;
  userName: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, userPhoto, userName }) => {
    return (
      <div>
        <Navbar userPhoto={userPhoto} userName={userName} />
        {children}
      </div>
    );
};

export default Layout;
