import React from 'react'
import TopNav from './Navber/TopNav'
import ButtomNav from './Navber/ButtomNav'
import { useLocation, useParams } from 'react-router-dom';

const Navber = () => {
    const location = useLocation();

  const isRoomPage = location.pathname.startsWith("/rooms/");
  console.log(isRoomPage)
  return (
    <div className={` border-b z-50 ${isRoomPage ? "" : "sticky top-0 "}   `}>
      <TopNav/>
      {/* <ButtomNav/> */}
    </div>
  )
}

export default Navber
