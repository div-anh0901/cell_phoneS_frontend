import React,{useEffect, useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { DotMoveLeft, DotMoveRight } from './DotMoveCarouel';
import { FaRegHeart } from 'react-icons/fa';
type Props={
    data_v1: any[];
    data_v2: any[];
}

function DoubleSildeCustom({data_v1,data_v2}:Props) {
    const swiperRef_v1 = useRef<SwiperType>();
    const swiperRef_v2 = useRef<SwiperType>();
 

    function onPrev (){
        swiperRef_v1.current?.slidePrev()
        swiperRef_v2.current?.slidePrev()
    }
    function onNext (){
        swiperRef_v1.current?.slideNext()
        swiperRef_v2.current?.slideNext()
    }
  return (
    <div className='relative'  >
          <Swiper
            className='w-full h-full relative'
            spaceBetween={5}
            autoplay={{
              delay: 2000
            }}
            
            loop={true}
            breakpoints={
              {
                576: {
                  width: 576,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1024: {
                  width: 1024,
                  slidesPerView: 5,
                },
                1280: {
                  width: 1280,
                  slidesPerView: 6,
                },
              }
            }
            slidesPerView={6}
            onBeforeInit={(swiper:any) => {
                swiperRef_v1.current = swiper;
            }}
          >
          {
                          data_v1.map((data,index)=>(
                              <SwiperSlide key={index} className='w-[200px] shadow-slide-item_v2  capitalize relative bg-white rounded-[5px] text-[#343a40] p-[10px] m-[10px]'>
                                <div className='w-[200px] mb-[20px]'>
                                  <img className='w-[160px] m-auto h-[160px]' src={data.image} alt="" />
                                  <div className='w-full'>
                                      <div className='w-full text-[14px] font-semibold my-[10px] h-[65px] break-words'>{data.title}</div>
                                      <div className='text-[#d70018] text-[16px] font-semibold my-[10px]'>{data.costSale}₫ <span className='text-[#707070] text-[14px] line-through'> {data.costTrue}₫</span></div>
                                  </div>
                                  <div className='w-full h-[50px]'>
                                      <div className='bg-[#f3f4f6] text-[12px] rounded-[5px] p-1'>
                                        Trả góp 0% lãi, 0 trả trước, 0 phụ phí qua Samsung Finance+
                                      </div>
                                  </div>
                                  <div className='flex m-[10px] w-full items-center justify-between text-[#707070] text-[14px] text-right'>
                                    <div></div>
                                    <div className='flex w-[85px]'>
                                      <div>Yêu thích </div> <div className='text-[#d70018] font-semibold ml-[5px] text-[18px]'><FaRegHeart/></div>
                                    </div>
                                    <div className=" bg-bg-discount absolute m-dicount text-white rounded-dot-left font-bold h-[25px] left-[-15px] top-[-1px] w-[80px] text-center leading-[25px]">
                                      <p className='text-[12px]'>giảm {data.percentSale}</p>
                                      </div>
                                      <div className="text-[#0c53b7] absolute rounded-[5px] bg-white m-dicount border-[1px] border-[#0c53b7] border-solid  h-[20px] right-[0px] top-[0px] w-[70px] text-center leading-[20px]">
                                      <p className='text-[10px] '>trả góp {data.instalment}%</p>
                                      </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                          ))
                        }
          </Swiper>
          <Swiper
            className='w-full h-full relative'
            spaceBetween={5}
            autoplay={{
              delay: 2000
            }}
            
            loop={true}
            slidesPerView={6}
            onBeforeInit={(swiper:any) => {
                swiperRef_v2.current = swiper;
            }}
          >
          {
                          data_v2.map((data,index)=>(
                              <SwiperSlide key={index} className='w-[200px] shadow-slide-item_v2  capitalize relative bg-white rounded-[5px] text-[#343a40] p-[10px] m-[10px]'>
                                <div className='w-[200px] mb-[20px]'>
                                  <img className='w-[160px] m-auto h-[160px]' src={data.image} alt="" />
                                  <div className='w-full'>
                                      <div className='w-full text-[14px] font-semibold my-[10px] h-[65px] break-words'>{data.title}</div>
                                      <div className='text-[#d70018] text-[16px] font-semibold my-[10px]'>{data.costSale}₫ <span className='text-[#707070] text-[14px] line-through'> {data.costTrue}₫</span></div>
                                  </div>
                                  <div className='w-full h-[50px]'>
                                      <div className='bg-[#f3f4f6] text-[12px] rounded-[5px] p-1'>
                                        Trả góp 0% lãi, 0 trả trước, 0 phụ phí qua Samsung Finance+
                                      </div>
                                  </div>
                                  <div className='flex m-[10px] w-full items-center justify-between text-[#707070] text-[14px] text-right'>
                                    <div></div>
                                    <div className='flex w-[85px]'>
                                      <div>Yêu thích </div> <div className='text-[#d70018] font-semibold ml-[5px] text-[18px]'><FaRegHeart/></div>
                                    </div>
                                    <div className=" bg-bg-discount absolute m-dicount text-white rounded-dot-left font-bold h-[25px] left-[-15px] top-[-1px] w-[80px] text-center leading-[25px]">
                                      <p className='text-[12px]'>giảm {data.percentSale}</p>
                                      </div>
                                      <div className="text-[#0c53b7] absolute rounded-[5px] bg-white m-dicount border-[1px] border-[#0c53b7] border-solid  h-[20px] right-[0px] top-[0px] w-[70px] text-center leading-[20px]">
                                      <p className='text-[10px] '>trả góp {data.instalment}%</p>
                                      </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                          ))
                        }
          </Swiper>
            <div  onClick={onPrev}> <DotMoveLeft/></div>
            <div onClick={onNext}><DotMoveRight/></div>
          </div>
  )
}

export default DoubleSildeCustom