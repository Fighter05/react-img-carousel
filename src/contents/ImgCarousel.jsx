import React from 'react'
import { Link } from "react-router-dom";
import bg from '../images/bg1.jpg'
import ImageSlider from "../components/ImageSlider";

function ImgCarousel() {
  const slides = [
    { url: "http://localhost:3000/pic1.jpg", title: "darksky" },
    { url: "http://localhost:3000/pic2.jpg", title: "darksky" },
    { url: "http://localhost:3000/pic3.jpg", title: "darksky" },
    { url: "http://localhost:3000/pic4.jpg", title: "darksky" },
    { url: "http://localhost:3000/pic5.jpg", title: "darksky" },
  ];


  return (
      <div className='bg-gray-800 py-40 px-80 h-screen'>
        <div className='w-full h-full bg-white rounded-3xl p-10'>
          <p className='text-3xl font-bold text-center mb-6'>Image Carousel</p>
          <div className='h-4/5 w-3/5 inline-box mx-auto'>
            <ImageSlider slides={slides} />
          </div>
          <Link to = '/'>
            <button className='transition ease-in-out duration-300 p-3 hover:scale-110 text-white border-solid border-2 border-gray-800 bg-gray-800 rounded-2xl'>Go back</button>
          </Link>
        </div>
      </div>
  )
}

export default ImgCarousel
