import MoblieNav from './Navber/MoblieNav';
import TopNav from './Navber/TopNav'
import { useLocation } from 'react-router-dom';

const Navber = () => {
    const location = useLocation();

  const isRoomPage = location.pathname.startsWith("/rooms/");
  return (
    <div className={` border-b z-50 ${isRoomPage ? "" : " sticky top-0 "}   `}>
      <div className='md:block hidden'><TopNav/></div>
      <div className='md:hidden block'><MoblieNav/></div>
    </div>
  )
}

export default Navber
