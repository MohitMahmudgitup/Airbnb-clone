import React from 'react'
import SwiperProduct from './SwiperProduct'
const homesData = [
  {
    id: 1,
    title: 'Apartment in Kuala Lumpur',
    location: 'Kuala Lumpur',
    price: '$57 for 2 nights',
    rating: 4.87,
    image: 'https://picsum.photos/400/300?random=2',
  },
  {
    id: 2,
    title: 'Condo in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$65 for 2 nights',
    rating: 4.83,
    image: 'https://picsum.photos/400/300?random=3',
  },
  {
    id: 3,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$79 for 2 nights',
    rating: 4.87,
    image: 'https://picsum.photos/400/300?random=4',
  },
  {
    id: 4,
    title: 'Apartment in Kuala Lumpur',
    location: 'Kuala Lumpur',
    price: '$92 for 2 nights',
    rating: 4.88,
    image: 'https://picsum.photos/400/300?random=5',
  },
  {
    id: 5,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: 'https://picsum.photos/400/300?random=6',
  },
  {
    id: 6,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: 'https://picsum.photos/400/300?random=7',
  },
  {
    id: 7,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: 'https://picsum.photos/400/300?random=8',
  }, {
    id: 8,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: 'https://picsum.photos/400/300?random=9',
  },
  {
    id: 9,
    title: 'Apartment in Bukit Bintang',
    location: 'Bukit Bintang',
    price: '$116 for 2 nights',
    rating: 4.97,
    image: 'https://picsum.photos/400/300?random=10',
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
