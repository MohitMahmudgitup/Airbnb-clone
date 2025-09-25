import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryImage from '../components/GalleryImage'
import Inspiration2 from '../components/Inspiration2'
import Reserve from '../components/Reserve'
import Reviews from '../components/Reviews'

const SingleProduct = () => {
  const p = useParams()
  console.log(p)
  return (
    <div className='m-auto w-[1100px]'>
      <GalleryImage />
      <div className=' h-[200vh] flex flex-row-reverse justify-between'>
        <div className='  '><Reserve /></div>
        <div className='  w-[60%] '>
          <Reviews />

        </div>



      </div>


      {/* <Inspiration2/> */}
    </div>
  )
}

export default SingleProduct
