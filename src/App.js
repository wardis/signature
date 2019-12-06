import React from 'react';
import './App.scss';
import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';

function App() {
  const userDetails = {
    firstname: 'John',
    lastname: 'Smith',
    jobtitle: 'Marketer',
    company: "WARDI'S",
    phone: '111 222 3333',
    website: 'www.wardi-s.com',
    address1: '2 rue prospère',
    address2: '75001, Paris, France'
  };
  return (
    <div className='app'>
      <Sidebar />
      <Content userDetails={userDetails} />
    </div>
  );
}

export default App;
