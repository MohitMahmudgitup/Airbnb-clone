import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryImage from '../components/GalleryImage'
import Inspiration2 from '../components/Inspiration2'
import Reserve from '../components/Reserve'
import Reviews from '../components/Reviews'
import Hosted from '../components/Hosted'
import Highlights from '../components/Highlights'
import TranslateNotice from '../components/TranslateNotice'
import About from '../components/About'
import Amenities from '../components/Amenities'
import DatePicker from '../components/DatePicker'
import RatingOverview from '../components/RatingOverview'
import ReviewCard from '../components/ReviewCard'
import LocationSection from '../components/LocationSection'
import HostSection from '../components/HostSection'
import ThingsToKnow from '../components/ThingsToKnow '
import GalleryImage1 from '../components/GalleryImage1'
import Footer from '../components/Footer'

const SingleProduct = () => {
  return (
    <>
    
    <div className='m-auto w-full sm:w-[1150px] relative'>
      <div className='sm:block hidden'> <GalleryImage /></div>
      <div className='block sm:hidden'><GalleryImage1/></div>
     


      <div className='absolute  sm:static top-[430px] z-40 sm:top-auto w-full bg-white sm:bg-none rounded-3xl sm:rounded-none '>
      
      <div className='py-6 sm:py-0 px-4 sm:px-0'>

      <div className='  flex sm:flex-row-reverse       sm:rounded-none   flex-col-reverse  justify-between'>
        <div className='sm:block hidden'><Reserve /></div>
        <div className='  sm:w-[60%] w-full  '>
          <Reviews />
          <Hosted />
          <Highlights />
          <TranslateNotice />
          <About />
          <Amenities />
          <DatePicker />
        </div>
      </div>
      
      <div>
        <RatingOverview />
        <ReviewCard/>
        <LocationSection/>
        <HostSection/>
        <ThingsToKnow />
      </div>

      </div>

      <div className='block sm:hidden border-t-8'>
      <Inspiration2/>
      <Footer/>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default SingleProduct
