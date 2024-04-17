import React, { useRef } from 'react'
import { BG_DISCOUNT_ITEMS, ProductSale } from '../images'
import { FaRegHeart } from "react-icons/fa";
import { Carousel } from '@trendyol-js/react-carousel';
import { DotMoveLeft, DotMoveRight } from './DotMoveCarouel';
import { CostHostSale } from '../data';
import SliderCustom from './SliderCustom';
// Import Swiper React components

function CostHotSale() {

  return (
    <div className='w-full h-full bg-bg-pink rounded-[10px] text-white '>
          <div className=''>
            <img  src={ProductSale.host_sale} alt="" />
          </div>

          <SliderCustom data={CostHostSale} />
          
    </div>
  )
}

export default CostHotSale