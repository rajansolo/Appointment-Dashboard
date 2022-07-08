import React, {useState} from 'react';
import './lowercontent.css';
import data from '../../../database/data';
import {Link} from 'react-router-dom';


function LowerContent() {
    const [newData, setNewData] = useState(data.appointments)
    const Delete = (id) => {
        let temp = newData.filter(item => item.id != id);
        setNewData(temp)
        console.log(newData)
        console.log('newData', temp)
    }

  return (
      <div className='lower_content'>
        <div className='lower_content_header'>Booking appointment</div>
        <div className='lower_content_list'>
            {
                newData.map(item =>  {
                    return (
                        <div className='list'>
                            <p key={item.id}>{item.fullname}</p>
                            <div className='action_buttons'>
                                <button className='btn btn-red' onClick={() => Delete(item.id)}>cancel</button>
                                <Link to="/appointment"><button className='btn btn-blue'>connect now</button></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
}

export default LowerContent