import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { DotMoveLeft, DotMoveRight } from './DotMoveCarouel';
import { FaRegHeart } from 'react-icons/fa';
type Props={
    data: any[]
}

function SlidePromotion({data}:Props) {
    const swiperRef = useRef<SwiperType>();
  return (
    <div className='relative'  >
          <Swiper
            className='w-full h-full relative'
            spaceBetween={5}
            autoplay={{
              delay: 2000
            }}
            loop={true}
            slidesPerView={4}
            onBeforeInit={(swiper:any) => {
              swiperRef.current = swiper;
            }}
          >
          {
                          data.map((data,index)=>(
                              <SwiperSlide key={index} className='w-[200px] shadow-slide-item_v2  capitalize relative bg-white rounded-[5px] text-[#343a40] p-[10px] m-[10px]'>
                                <div className='w-[200px] mb-[20px]'>
                                  <img className='w-[160px] m-auto h-[160px]' src={data.image} alt="" />
                                </div>
                              </SwiperSlide>
                          ))
        }
          </Swiper>
            <div  onClick={() => swiperRef.current?.slidePrev()}> <DotMoveLeft/></div>
            <div onClick={() => swiperRef.current?.slideNext()}><DotMoveRight/></div>
          </div>
  )
}

export default SlidePromotion