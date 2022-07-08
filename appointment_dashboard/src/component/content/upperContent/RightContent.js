import React, {useState} from 'react';
import './upperContent.css';
import database from '../../../database/data'

function RightContent({data, setData, setDisplayData, displayData}) {

    const handleChange = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        setDisplayData(data)
        setData({
            'id': database.appointments.length + 1,
            'fullname': "",
            'email': "",
            'phone': database.private,
            'experience': "",
            'education' : "",
            'specialization': "",
            'aboutme': ""
        })
        console.log(data)
        console.log('---------')
        console.log(displayData)
    }



  return (
    <div className='right_content subcontent'>
        <form onSubmit={submit}>
            <label>
                <p>Full Name:</p>
                <input className="input_field" name="fullname" type="text" placeholder='full name' value={data.fullname} onChange={(e) => handleChange(e)}/> 
            </label>    
            <label>
                <p>Email Address:</p>
                <input className="input_field" name="email" type="text" placeholder='email' value={data.email} onChange={(e) => handleChange(e)}/> 
            </label>
            <label>
                <p>Phone Number:</p>
                <input className="input_field" name="phone" type="number" placeholder='phone number' value={data.phone} onChange={(e) => handleChange(e)}/> 
            </label>
            <label>
                <p>Experience:</p>
                <input className="input_field" name="experience" type="number" placeholder='experience in years' value={data.experience} onChange={(e) => handleChange(e)}/> 
            </label>
            <label>
                <p>Education Qualification:</p>
                <input className="input_field" name="education" type="text" placeholder='educational qualification' value={data.education} onChange={(e) => handleChange(e)}/> 
            </label>
            <label>
                <p>Spelialization:</p>
                <input className="input_field" name="specialization" type="text" placeholder='spelialization' value={data.specialization} onChange={(e) => handleChange(e)}/> 
            </label>
            <label>
                <p>About me:</p>
                <input className="input_field" name="aboutme" type="text" placeholder='about me' value={data.aboutme} onChange={(e) => handleChange(e)}/> 
            </label>
            <input type="submit" className='button_submit profile_button' value="submit"/>
        </form>
    </div>
  )
}

export default RightContent