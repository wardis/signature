import React from 'react';
import Preview from '../Preview';

const Content = (props) => {
  return (
    <div className='content'>
      <h1>Email signature</h1>
      <Preview userDetails={props.userDetails} />
    </div>
  );
};

export default Content;
