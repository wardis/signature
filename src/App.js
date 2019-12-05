import React from 'react';
import './App.scss';
import Content from './components/layout/Content';
import Sidebar from './components/layout/Sidebar';

function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
