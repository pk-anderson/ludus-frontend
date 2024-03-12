import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './screens/Layout/layout';
import HomePage from './screens/HomePage/HomePage'; 
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Dashboard from './screens/Dashboard/Dashboard';
import Search from './screens/Search/Search';
import GameDetail from './screens/GameDetail/GameDetail';
import Collection from './screens/Collection/Collection';


function withLayout(Component: React.FC) {
  return (
    <Layout>
      <Component />
    </Layout>
  );
}

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={withLayout(Dashboard)} />
            <Route path="/search" element={withLayout(Search)} />
            <Route path="/games/:id" element={withLayout(GameDetail)} />
            <Route path="/mycollection" element={withLayout(Collection)} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
