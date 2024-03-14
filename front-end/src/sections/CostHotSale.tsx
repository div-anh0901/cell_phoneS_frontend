import React from 'react'
import { ProductSale } from '../images'
import { FaRegHeart } from "react-icons/fa";
import { Carousel } from '@trendyol-js/react-carousel';


import { DotMoveLeft, DotMoveRight } from './DotMoveCarouel';
import { CostHostSale } from '../data';
function CostHotSale() {
  return (
    <div className='w-full h-full bg-bg-pink rounded-[10px] text-white '>
          <div className=''>
            <img  src={ProductSale.host_sale} alt="" />
          </div>
          <div className='relative'  >
          <Carousel className='w-full' dynamic={true} responsive={true} leftArrow={<DotMoveLeft/>} rightArrow={<DotMoveRight/>} show={5} slide={2} transition={0.5}>
            {
              CostHostSale.map((data,index)=>{
                  <div className='w-[230px] bg-white rounded-[10px] text-[#343a40] p-[10px] m-[10px]'>
                    <div className='w-[200px] mb-[20px]'>
                      <img className='w-[100%] m-auto h-[170px]' src={data.image} alt="" />
                      <div className=''>
                          <span className='text-[14px] font-semibold my-[10px]'>{data.title}</span>
                          <div className='text-[#d70018] text-[16px] font-semibold my-[10px]'>{data.costSale}₫ <span className='text-[#707070] text-[14px]'> {data.costTrue}₫</span></div>
                      </div>
                      <div className='flex m-[10px] w-full items-center justify-between text-[#707070] text-[14px] text-right'>
                        <div></div>
                        <div className='flex w-[85px]'>
                          <div>Yêu thích </div> <div className='text-[#d70018] font-semibold ml-[5px] text-[18px]'><FaRegHeart/></div>
                        </div>
                      </div>
                    </div>
                  </div>
              })
            }
          </Carousel>
          </div>
    </div>
  )
}

export default CostHotSale