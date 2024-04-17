import React, { useReducer, useRef, useState } from 'react'
import Banner from '../components/Banner'
import Category from '../sections/Category'
import { ListHotSmartPhone, ListMayTinhBangHotShow, PhoneMenu, filterHotLaptopShow, filterIpad } from '../data'

import LayoutHome from '../layouts/LayoutHome'
import CostHotSale from '../sections/CostHotSale'
import TitleProducts from '../sections/TitleProducts'
import { Swiper as SwiperType } from 'swiper';
import SliderCustom from '../sections/SliderCustom'
import DoubleSildeCustom from '../sections/DoubleSildeCustom'
import { filterHotSmartPhone,ListLaptopHotShow } from '../data'

function Home() {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className='w-full relative'>
        <LayoutHome/>
        <div className='w-full h-full relative flex items-center justify-center'> 
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full' >
            <CostHotSale/>
          </div>
        </div>
        {/* Smartphone Hot Show */}
        <div className='w-full h-full relative flex items-center justify-center'> 
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full'>
            <TitleProducts title="Điện thoại nổi bật nhất" filter={filterHotSmartPhone}/>
          </div>
        </div>
        <div className='w-full h-full relative flex items-center justify-center'>
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full' >
            <div className='w-full h-full rounded-[10px] text-white '>
              <DoubleSildeCustom data_v1={ListHotSmartPhone} data_v2={ListHotSmartPhone}/>
            </div>
          </div>
        </div>
        {/* Smartphone Hot Show */}
        {/* Laptop Hot Show */}
        <div className='w-full h-full relative flex items-center justify-center'> 
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full'>
            <TitleProducts title="Laptop" filter={filterHotLaptopShow}/>  
          </div>
        </div>
        <div className='w-full h-full relative flex items-center justify-center'>
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full' >
            <div className='w-full h-full rounded-[10px] text-white '>
              <DoubleSildeCustom data_v1={ListLaptopHotShow} data_v2={ListLaptopHotShow}/>
            </div>
          </div>
        </div>

        {/* Laptop Hot Show */}
        {/* May tinh bang hot show */}
        <div className='w-full h-full relative flex items-center justify-center'> 
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full'>
            <TitleProducts title="Máy tính bảng" filter={filterIpad}/>  
          </div>
        </div>
        <div className='w-full h-full relative flex items-center justify-center'>
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full' >
            <div className='w-full h-full rounded-[10px] text-white '>
              <SliderCustom data={ListMayTinhBangHotShow} />
            </div>
          </div>
        </div>
        {/* May tinh bang hot show */}
    </div>
  )
}

export default Home