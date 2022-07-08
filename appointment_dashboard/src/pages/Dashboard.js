import React, {useEffect} from 'react';
import LowerContent from '../component/content/lowerContent/LowerContent';
import UpperContent from '../component/content/upperContent/UpperContent';
import Navbar from '../component/navbar/Navbar';

function Dashboard() {
  
  return (
    <>
        <Navbar/>
        <UpperContent />
        <LowerContent />
    </>
  )
}

export default Dashboard