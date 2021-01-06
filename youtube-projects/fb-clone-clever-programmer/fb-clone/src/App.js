import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';

function App() {
  const user = null;
  
  return (
    // BEM naming convention
    <div className="app">
      
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
    
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
      
      
    </div>
  );
}

export default App;
