import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// context
import { UserAuth } from './contexts/UserContext';

import Header from './components/Header';
import Footer from './components/Footer';

import './global.css';

function App() {
  return (
    <BrowserRouter>
      <UserAuth>    
        <Header />
        <main className='app-body'>
          <Routes />
        </main> 
        <Footer />
      </UserAuth>
    </BrowserRouter>
  );
}

export default App;
