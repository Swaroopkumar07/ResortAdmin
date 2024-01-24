import React, { useState } from 'react'
import '../Stats/Stats.css'
import BusinessIcon from '@mui/icons-material/Business';
import { BsFillBookmarkFill } from "react-icons/bs";


export default function Stats({backgroundColor,color,icon,iconcolor}) {
  const [heading,setHeading] = useState('New Booking')
  const [number,setNumber]=useState(782)
  const statsBoxStyle = {
    border: '1px solid',
    width: '14vw',
    marginTop: '20px',
    marginLeft: '30px',
    borderRadius: '8px',
    height: '12vh',
    backgroundColor: backgroundColor, 
    borderColor: backgroundColor, 
  };
  const statsTextNumber = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: color,
  };
  const statsTextMatter = {
    fontSize: '13px',
    fontWeight: 'bold',
    marginBottom: '-10px',
    color: color,
  };
  const statsicon={
    color: iconcolor,
  }

  
  return (
    <div className='stats_box' style={statsBoxStyle}>
    <div className='stats_content'>
    <div>
    <p className='stats_text_matter' style={statsTextMatter}>{heading}</p>
    <p className='stats_text_number' style={statsTextNumber}>{number}</p>
    </div>
    {/* <BusinessIcon style={{marginTop:"10px"}}/> */}
    <div className='stats_icon_container'>
    {icon && React.cloneElement(
  icon,
  { className: 'stats_icon', style: statsicon }
)}
    </div>


    </div>
    </div>
  )
}
