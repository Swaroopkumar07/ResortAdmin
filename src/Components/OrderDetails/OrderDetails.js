import React, { useState } from 'react'
import '../OrderDetails/OrderDetails.css'
import { Button } from '@mui/material'
import { Padding } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function OrderDetails() {
    const [orderID,setOrderID]=useState('98448Y348')
    const [personName,setPersonName]=useState('John Doe')
    const [phoneNumber,setPhoneNumber] = useState('895378445')
    const [roomType,setRoomType]=useState('Standard /AC')
    const [price,setPrice]=useState(2500)
    const [paid,setPaid]=useState(2500)
    const [adults,setAdults]=useState(2)
    const [child,setChild]=useState(2)
    const [rooms,setRooms]=useState(2)
    const [bookingDate,setBookingData]=useState('dd-mm-yyyy')
    const [paymentType,setPaymentType] = useState('dd-mm-yyyy')
    const [checkinDate,setCheckinDate] =useState('dd-mm-yyyy')
    const [checkOutDate,setCheckOutDate]=useState('dd-mm-yyyy')


    return (
        <div className='order_box'>
            <div className='order_details'>
                <div className='order_id'>
                    <p >Order ID: {orderID}</p>
                </div>
                <p className='odered_person'>{personName}</p>
                <p className='person_number'>Phone: +91 {phoneNumber}</p>
            </div>
            <div className='order_details2'>
                <p>Room:{roomType}</p>
                <p>Price: ₹ {price}/-</p>
                <p>Paid:  ₹ {paid}/-</p>

            </div>
            <div className='order_details2'>
                <p>Adults:{adults}</p>
                <p>child :{child}</p>
                <p>Room:{roomType}</p>
            </div>
            <div className='order_date'>
                <p>{bookingDate} </p>
            </div>
            <div className='order_date'>
                <p>{paymentType}</p>
            </div>
            <div className='order_date'>
                <p>{checkinDate}</p>
            </div>
            <div className='order_date'>
                <p>{checkOutDate}</p>
            </div>
            <div className='assing_button_and_icon'> 
            <CheckIcon className='assing_icon'/>
            <p className='assign_button'>Assign</p>
            </div>
            <div className='assing_button_and_icon'> 
            <ClearIcon className='cancle_icon'/>
            <p className='cancle_button'>Cancle</p>
            </div>

        </div>
    )
}
