import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './screens/Layout/layout';
import HomePage from './screens/HomePage/HomePage'; 
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Dashboard from './screens/Dashboard/Dashboard';
import Search from './screens/Search/Search';
import GameDetail from './screens/GameDetail/GameDetail';


function withLayout(Component: React.FC, userPhoto: string, userName: string) {
  return (
    <Layout userPhoto={userPhoto} userName={userName}>
      <Component />
    </Layout>
  );
}

function App() {
  const userPhoto = 'killua.png'; 
  const userName = 'Username';

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={withLayout(Dashboard, userPhoto, userName)} />
          <Route path="/search" element={withLayout(Search, userPhoto, userName)} />
          <Route path="/games/:id" element={withLayout(GameDetail, userPhoto, userName)} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
