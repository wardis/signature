import React, { useState } from 'react';

const Details = () => {
  const placeholder = {
    firstname: 'John',
    lastname: 'Smith',
    jobtitle: 'Marketer',
    company: "WARDI'S",
    phone: '111 222 3333',
    website: 'www.wardi-s.com',
    address1: '2 rue de la prospère',
    address2: '75001, Paris, France'
  };
  const [details, setDetails] = useState({});

  const onChangeHandler = (e) => {
    const newDetails = {...details, [e.target.name]: e.target.value}
    setDetails(newDetails)
  }

  return (
    <div className="details">
      <p>Details</p>
      <form className="details__form" onSubmit={()=> {}}>
        <div id='firstname'>
          <span>First Name</span>
          <input
            type='text'
            name='firstname'
            placeholder={placeholder.firstname}
            defaultValue={details.firstname}
            onChange={onChangeHandler}
          />
        </div>
        <div id='lastname'>
          <span>Last Name</span>
          <input
            type='text'
            name='lastname'
            placeholder={placeholder.lastname}
            defaultValue={details.lastname}
            onChange={onChangeHandler}
          />
        </div>
        <div id='jobtitle'>
          <span>Job Title</span>
          <input
            type='text'
            name='jobtitle'
            placeholder={placeholder.jobtitle}
            defaultValue={details.jobtitle}
            onChange={onChangeHandler}
          />
        </div>
        <div id='company'>
          <span>Company Name</span>
          <input
            type='text'
            name='company'
            placeholder={placeholder.company}
            defaultValue={details.company}
            onChange={onChangeHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default Details;
