import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryImage from '../components/GalleryImage'
import Inspiration2 from '../components/Inspiration2'

const SingleProduct = () => {
     const p = useParams()
    console.log( p)
  return (
    <div>
     <GalleryImage/>
     <Inspiration2/>
    </div>
  )
}

export default SingleProduct
