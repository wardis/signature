import React from 'react';
import './App.scss';
import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';

function App() {
  const userDetails = {
    firstname: 'Wardi',
    lastname: 'Smith',
    jobtitle: 'Marketer',
    company: "WARDI'S",
    phone: '111 222 3333',
    website: 'www.wardi-s.com',
    address: {
      line1: '2 rue de la prospère',
      line2: '75001, Paris, France'
    }
  };
  return (
    <div className='app'>
      <Sidebar />
      <Content userDetails={userDetails} />
    </div>
  );
}

export default App;
