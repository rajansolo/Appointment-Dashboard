import React from 'react';
import './upperContent.css';
import avatar from '../../../assets/avatar.png';

function LeftContent({data, displayData}) {
  return (
    <div className='left_content subcontent'>
        <div className='profile'>
            <img className='profile_avatar' src={avatar} height="300px" width="300px"/>
        </div>
        <h6>{displayData?.fullname.toUpperCase()}</h6>
        <p>{displayData?.specialization}</p>
        <p>{displayData?.aboutme}</p>
        <h6>USA, CARLIFORNIA</h6>
        <div className='buttons'>
            <button className='button_follow profile_button'>Follow</button>
            <button className='button_message profile_button'>Message</button>
        </div>
    </div>
  )
}

export default LeftContent