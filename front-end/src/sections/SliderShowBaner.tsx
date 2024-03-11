import React, { useState } from 'react'
import banner1 from '../images/banner-sleder/banner1.webp'
import banner2 from '../images/banner-sleder/banner2.webp'
import banner3 from '../images/banner-sleder/banner3.webp'
import banner4 from '../images/banner-sleder/banner4.webp'
import banner5 from '../images/banner-sleder/banner5.webp'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
const slides = [
    {
      url: banner1,
      title: "MỪNG KHAI TRƯƠNG",
      label: "Rộn ràng ưa đãi"
    },
    {
      url: banner2,
      title: "MỪNG 8/3",
      label: "Gia dụng giảm sốc"
    },
    {
      url: banner3,
      title:"OPPO RENO11 F 5G",
      label: "Săn deal xịn ngay"
    },
    {
      url: banner4,
      title: "TIVI CHÍNH HÃNG",
      label: "Ưa đãi cực sốc"
    },
    {
      url: banner5,
      title: "IPHONE 15 SERIES",
      label: "Gía tốt chốt ngay"
    },
  ];
function SliderShowBaner() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex: number) => {
      setCurrentIndex(slideIndex);
    };
  


  return (
    <div className='w-[100%] h-[376px] relative group z-0'>
    <div
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      className='w-full rounded-2xl bg-center bg-cover duration-500 h-[80%]'
    ></div>
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className=' flex w-full top-4 h-[20%]  overflow-y-auto'>
      <div className='option-slider flex w-full min-w-[690px]  h-full  justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={
              slideIndex !==currentIndex ? 
              'cursor-pointer w-[20%] h-[80%] flex items-center text-center text-[#343a40]' : 
              "cursor-pointer w-[20%] h-[80%] flex items-center  text-[#343a40] border-solid border-b-2 border-bg-banner font-bold"
          }    
          >
          <div className='text-center w-[150px] h-[80%] min-h-[45px]'>
              <div className='text-[14px]'>{slide.title}</div>
              <div className='text-[12px]'>{slide.label}</div>
          </div>
          </div>
        ))}
      </div>
      
    </div>
  </div>
  )
}

export default SliderShowBaner