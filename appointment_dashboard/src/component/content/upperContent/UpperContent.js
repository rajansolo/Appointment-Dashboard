import React, {useState} from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import './upperContent.css';
import database from '../../../database/data'
function UpperContent() {
  const[data, setData] = useState({
    'id': database.appointments.length + 1,
    'fullname': "",
    'email': "",
    'phone': database.private,
    'experience': "",
    'education' : "",
    'specialization': "",
    'aboutme': ""
    })
    const [displayData, setDisplayData] = useState({
      'id': database.appointments.length + 1,
      'fullname': "",
      'email': "",
      'phone': database.private,
      'experience': "",
      'education' : "",
      'specialization': "",
      'aboutme': ""
    })
  return (
    <div className='upper_content'>
        <LeftContent data={data} displayData={displayData} setDisplayData={setDisplayData}/>
        <RightContent data={data} setData={setData} displayData={displayData} setDisplayData={setDisplayData}/>
    </div>
  )
}

export default UpperContent