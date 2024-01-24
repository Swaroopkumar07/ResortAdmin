import React from 'react'
import '../CustomerReview/CustomerReview.css'
import Profile from '../../Images/profie.png'
import { Divider  } from '@mui/material'
import Rating from '@mui/material/Rating';

export default function CustomerReview() {
    const [value, setValue] = React.useState(2);
  return (
    <div className='review_box'>
        <p className='Review_title'>Latest Customer Review</p>
        <div className='review_content'>
        <div className='reviewer_image_data'>
        <img src={Profile}  className='reviewer_image'/>
        </div>
        <div className='basic_details'>
        <div className='reviewer_info'>
        <p className='reviewer_name'>JACK</p>
        </div>
        <div className='reviewer_info'>
        <p className='posted_date'>Posted on 26/04/2020</p>
        <Rating name="read-only" value={value} readOnly className='rating'  size="small"/>
        </div>
        <div className='reviewer_info'>
        <p className='review_given'>Staff are Excellent...</p>
        </div>
        <Divider className='divider'/>
        </div>


        </div>
    </div>
  )
}
