import React, { useState } from 'react'

import { IoMdPhonePortrait } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { IoLaptopOutline } from "react-icons/io5";
import { PiHeadphonesLight } from "react-icons/pi";
import { IoWatchOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import accessory from '../images/icon-cps-30.svg';
import { FaComputer } from "react-icons/fa6";
import { PiTelevisionSimple } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";
import { SiSonarsource } from "react-icons/si";

type Props ={
    setIsShowHide : ()=>void,
    setIsShowShow : ()=>void,
    setIndexMenu : (data: number)=> void,
  
}


function Category({setIsShowHide,setIsShowShow,setIndexMenu}:Props) {

    function handleHandleShow(data: number){
        setIsShowShow()
        setIndexMenu(data);
    }
    
  return (
    <div className='w-[220px] rounded-[10px] shadow-md z-0' >
        <div className='bg-white p-2 rounded text-[#343a40]'>
           <div 
            className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
            onMouseEnter={()=>handleHandleShow(1)}
            onMouseLeave={setIsShowHide}
           >
                <div className='flex h-[30px] items-center '>
                    <div className='text-[25px] mr-1' ><IoMdPhonePortrait/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Điện thoại</span>,<span className='hover:text-bg-banner'> Tablet</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(2)}
                onMouseLeave={setIsShowHide}
           >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoLaptopOutline/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Laptop</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(3)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><PiHeadphonesLight/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Âm thanh</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoWatchOutline/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Đồng hồ</span>, <span className='hover:text-bg-banner'>Camera</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoHomeOutline/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Gia dụng</span>,<span className='hover:text-bg-banner'> Smarthome</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px]'>
                    <div className='text-[25px] mr-1'> <SiSonarsource/></div>
                    </div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Phụ kiện</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><FaComputer/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>PC</span>,<span className='hover:text-bg-banner'>Màn hình</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><PiTelevisionSimple/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Tivi</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoMdPhonePortrait/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Thu mới đổi cũ</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoMdPhonePortrait/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Hàng cũ</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><PiSpeakerSimpleHighLight/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Khuyến mãi</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
           <div 
                className='text-[#343a40] font-bold flex h-[30px] cursor-pointer items-center justify-between'
                onMouseEnter={()=>handleHandleShow(4)}
                onMouseLeave={setIsShowHide}
            >
                <div className='flex h-[30px] items-center'>
                    <div className='text-[25px] mr-1'><IoNewspaperOutline/></div>
                    <div className='text-[12px] '><span className='hover:text-bg-banner'>Tin công nghệ</span></div>
                </div>
                <div className='text-[16px]'><FaChevronRight/></div>
           </div>
        </div>
    </div>
  )
}

export default Category