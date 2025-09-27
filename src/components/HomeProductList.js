import React from 'react'
import SwiperProduct from './SwiperProduct'
import { pic } from '../pic/db';
const homesData = [
  {
    id: 1,
    title: 'Apartment in Kuala Lumpur',
    location: 'Kuala Lumpur',
    price: '$57 for 2 nights',
    rating: 4.87,
    image: pic.pic01,
  },
  {
    id: 2,
    title: 'Condo in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$65 for 2 nights',
    rating: 4.83,
    image: pic.pic09,
  },
  {
    id: 3,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$79 for 2 nights',
    rating: 4.87,
    image: pic.pic08,
  },
  {
    id: 4,
    title: 'Apartment in Kuala Lumpur',
    location: 'Kuala Lumpur',
    price: '$92 for 2 nights',
    rating: 4.88,
    image: pic.pic10,
  },
  {
    id: 5,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: pic.pic04,
  },
  {
    id: 6,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: pic.pic03,
  },
  {
    id: 7,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: pic.pic02,
  }, {
    id: 8,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: pic.pic01,
  },
  {
    id: 9,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: '',
  },
];

const HomeProductList = () => {
  return (
    <div>
      <SwiperProduct homes={homesData} sectionTitle="Popular homes in Kuala Lumpur" />
      <SwiperProduct homes={homesData} sectionTitle="Available next month in Bangkok" />
      <SwiperProduct homes={homesData} sectionTitle="Stay in London" />
      <SwiperProduct homes={homesData} sectionTitle="Available next month in Toronto" />
      <SwiperProduct homes={homesData} sectionTitle="Homes in Seoul" />
      <SwiperProduct homes={homesData} sectionTitle="Available next month in Osaka" />
      <SwiperProduct homes={homesData} sectionTitle="Places to stay in Tokyo" />
      <SwiperProduct homes={homesData} sectionTitle="Check out homes in Melbourne" />
      <SwiperProduct homes={homesData} sectionTitle="Popular homes in Busan" />
    </div>
  )
}

export default HomeProductList
