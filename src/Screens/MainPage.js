import React from 'react'
import ModalContainer from '../Components/ModalContainer/ModalContainer'
import Notifications from '../Components/Notifications/Notifications'
import DashBoard from '../Components/DashBoard/DashBoard'
import Stats from '../Components/Stats/Stats'
import RoomTypeData from '../Components/RoomTypeData/RoomTypeData'
import Awmenities from '../Components/Awmenities/Awmenities'
import CustomerReview from '../Components/CustomerReview/CustomerReview'
import OrderDetails from '../Components/OrderDetails/OrderDetails'
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineLogin } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import TodayTask from '../Components/TodayTask/TodayTask'
import RoomCards from '../Components/RoomCards/RoomCards'


export default function MainPage() {
  return (
    <div>
    <RoomCards/>

    {/* <TodayTask/> */}
        
        {/* <Stats
        backgroundColor='#BFEBFF'
        color='#008CCC'
        icon={<BsFillBookmarkFill  />}
        iconcolor='#008CCC'
      />
      <Stats
        backgroundColor='#D5FAE2'
        color='#16A34A'
        icon={<MdCalendarMonth  />}
        iconcolor='#16A34A'
      />
      <Stats
        backgroundColor='#E9D5FF'
        color='#7E22CE'
        icon={<HiOutlineLogin  />}
        iconcolor='#7E22CE'
      />
      <Stats
        backgroundColor='#EDCAB3'
        color='#EE670A'
        icon={<IoLogOut  />}
        iconcolor='#EE670A'
      />
         <Stats
        backgroundColor='#F6F6CE'
        color='#979A1C'
        icon={<FiEdit  />}
        iconcolor='#979A1C'
      /> */}
    </div>
  )
}
