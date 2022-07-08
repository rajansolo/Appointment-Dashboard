import React, {useState} from 'react';
import Navbar from '../component/navbar/Navbar';
import './appointment.css';
import calander from '../assets/calendar.png';
import close from '../assets/close.png';
import edit from '../assets/edit.png'


function Appointment() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    "noOfApp": "select the number of appointment",
    "appTime": "1pm - 2pm"
  });

  const handleChange = (e) => {
    setAppointmentDetails({
      ...appointmentDetails,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    <Navbar/>
      <div className='appointment'>
        <div className='appointment_upper_content'>
          <img src={calander} height="200px" width="200px"/>
          <select value={appointmentDetails.noOfApp} name="noOfApp" onChange={(e) => handleChange(e)}>
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
          <select value={appointmentDetails.appTime} name="appTime" onChange={(e) => handleChange(e)}>
            <option value="one">12pm - 1pm</option>
            <option value="1pm - 2pm">1pm - 2pm</option>
            <option value="2pm - 3pm">2pm - 3pm</option>
            <option value="3pm - 4pm">3pm - 4pm</option>
            <option value="4pm - 5pm">4pm - 5pm</option>
            <option value="5pm - 6pm">5pm - 6pm</option>
          </select>
          <button className='button_add'> Add </button>
        </div>
        <div className='appointment_lower_content'>
          <div className='edit_appointment'>
            <input placeholder="Recipient's username"/>
            <img src={edit}  alt="edit" height="20px" width="20px"/>
            <img src={close} alt="close" height="20px" width="20px"/> 
          </div>
          <div className='edit_appointment'>
            <input placeholder="Recipient's username"/>
            <img src={edit}  alt="edit" height="20px" width="20px"/>
            <img src={close} alt="close" height="20px" width="20px"/> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Appointment