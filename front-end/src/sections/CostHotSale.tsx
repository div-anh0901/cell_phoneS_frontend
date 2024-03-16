import React, { useRef } from 'react'
import { BG_DISCOUNT_ITEMS, ProductSale } from '../images'
import { FaRegHeart } from "react-icons/fa";
import { Carousel } from '@trendyol-js/react-carousel';
import { DotMoveLeft, DotMoveRight } from './DotMoveCarouel';
import { CostHostSale } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
function CostHotSale() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className='w-full h-full bg-bg-pink rounded-[10px] text-white '>
          <div className=''>
            <img  src={ProductSale.host_sale} alt="" />
          </div>
          <div className='relative'  >
          <Swiper
            className='w-full h-full relative'
            spaceBetween={5}
            autoplay={{
              delay: 2000
            }}
            
            loop={true}
            slidesPerView={5}
            onBeforeInit={(swiper:any) => {
              swiperRef.current = swiper;
            }}
          >
          {
                          CostHostSale.map((data,index)=>(
                              <SwiperSlide key={index} className='w-[220px] capitalize  relative bg-white rounded-[10px] text-[#343a40] p-[10px] m-[10px]'>
                                <div className='w-[220px] mb-[20px]'>
                                  <img className='w-[100%] m-auto h-[220px]' src={data.image} alt="" />
                                  <div className=''>
                                      <span className='text-[14px] font-semibold my-[10px]'>{data.title}</span>
                                      <div className='text-[#d70018] text-[16px] font-semibold my-[10px]'>{data.costSale}₫ <span className='text-[#707070] text-[14px]'> {data.costTrue}₫</span></div>
                                  </div>
                                  <div className='flex m-[10px] w-full items-center justify-between text-[#707070] text-[14px] text-right'>
                                    <div></div>
                                    <div className='flex w-[85px]'>
                                      <div>Yêu thích </div> <div className='text-[#d70018] font-semibold ml-[5px] text-[18px]'><FaRegHeart/></div>
                                    </div>
                                    <div className=" bg-bg-discount absolute m-dicount text-white rounded-dot-left font-bold h-[25px] left-[-15px] top-[-1px] w-[80px] text-center leading-[25px]">
                                      <p className='text-[12px]'>giảm {data.percentSale}</p>
                                      </div>
                                      <div className="text-[#0c53b7] absolute m-dicount border-[1px] border-[#0c53b7] border-solid  h-[20px] right-[5px] top-[5px] w-[70px] text-center leading-[20px]">
                                      <p className='text-[10px]'>trả góp {data.instalment}%</p>
                                      </div>
                                  </div>
                                
                                </div>
                              </SwiperSlide>
                          ))
                        }
          </Swiper>
            <button className='w-full h-full' onClick={() => swiperRef.current?.slidePrev()}> <DotMoveLeft/></button>
            <button className='w-full h-full' onClick={() => swiperRef.current?.slideNext()}><DotMoveRight/></button>
          </div>
    </div>
  )
}

export default CostHotSale