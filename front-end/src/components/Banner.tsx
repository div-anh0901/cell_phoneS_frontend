import React, { useState } from 'react'
import logo from '../images/logo.png'
import logo2 from '../images/logo2.png'
import { PiNote } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FiTruck } from "react-icons/fi";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import PopupCaregoryComponent from './PopupCaregoryComponent';

type Prop = {
    setIsShowHide ?: ()=>void,
    setIsShowShow ?: ()=>void,
}
function Banner({setIsShowHide, setIsShowShow}:Prop) {

    const [showCategory, setShowCategory] = useState(false)

  return (
    <div className='banner-container bg-bg-banner text-white flex items-center justify-center '>
        <div className='zero:max-md-800:hidden md-800:block w-[81%]'>
            <div className='w-[100%] h-16 flex items-center justify-center'>
                <LogoCoponent/>
                <div className='zero:hidden md:block relative' onClick={()=> setShowCategory(!showCategory)}>
                    <div className='category flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px] cursor-pointer mr-1'>
                        <div className='icon text-[25px]'>
                            <PiNote/>
                        </div>
                        <span className='text-[12px] m-1'>
                            Danh mục
                        </span>
                    </div>
                    
                </div>
                <CitisComponent/>
                <DeviceSearchComponent/>

                <div className=' hover:bg-bg-baner-item flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px] cursor-pointer' >
                    <div className='icon text-[25px]'>
                        <LuPhone/>
                    </div>
                    <span className='text-[12px]'>
                        <span className='flex justify-between title'>
                            Gọi mua hàng <br />1800.2097
                        </span>
                    </span>
                </div>
                <div className='hover:bg-bg-baner-item flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px]  cursor-pointer'>
                    <div className='icon text-[25px]'>
                        <MdLocationOn/>
                    </div>
                    <span className='text-[12px]'>
                        <span className='flex justify-between title'>
                            Cửa hàng <br/> gần bạn
                        </span>
                    </span>
                </div>
                <div className='lg:block sm:hidden'>
                    <div className='hover:bg-bg-baner-item flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px]  cursor-pointer ' >
                        <div className='icon text-[25px]'>
                            <FiTruck/>
                        </div>
                        <span className='text-[12px] '>
                            <span className='flex justify-between title'>
                                Tra cứu <br/> đơn hàng
                            </span>
                        </span>
                    </div>
                </div>
            
                <CartComponent/>
                <div className='category text-[12px] flex items-center text-center h-[42px] w-[88px] py-[3px] px-[5px] rounded-[10px] cursor-pointer'>
                    <div className='icon text-[25px]'>
                        <FaRegUserCircle/>
                    </div>
                    Đăng nhập
                    
                </div>
            </div>
        </div>
        
        <div className='w-[90%] h-[105px] flex zero:max-md-800:block md-800:hidden'>
            <div className='flex h-[64px] items-center justify-between'>
                <LogoCoponent/>
                <CitisComponent/>
                <CartComponent/>
            </div>
            
            <DeviceSearchComponent/>
        </div>
        <PopupCaregoryComponent isShowCategory={showCategory} onClose={()=>setShowCategory(false)}/>
        
    </div>
  )
}

function CitisComponent (){
    return(
        <div className='category flex h-[42px] w-[130px] items-center py-[3px] px-[5px] rounded-[10px] mx-2 cursor-pointer mr-1'>
                <div className='icon text-[25px]'>
                    <MdLocationOn/>
                </div>
                <span className='text-[12px] m-1'>
                    <div className='flex justify-between'>
                        <span className='text-[10px]'>
                            xem giá tại
                        </span>
                        <span className=''>
                            <FaChevronDown/>
                        </span>
                        
                    </div>
                    <span className='text-[14px]'>Hồ Chí Minh</span>
                </span>
            </div>
    )
}

function CartComponent (){
    return(
        <div className='hover:bg-bg-baner-item flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px] mx-2 cursor-pointer'>
            <div className='icon text-[25px]'>
                <TbShoppingCart/>
            </div>
            <span className='text-[12px]'>
                <span className='flex justify-between title'>
                    Giỏ<br/> hàng
                </span>
            </span>
        </div>
    )
}

function DeviceSearchComponent (){
    function clickInput(){
       
    }
    return(
        <div className='search bg-white flex items-center p-[5px] md-800:w-[150px] lg:w-[200px] xl:w-[300px]  rounded-[10px] text-[#707070] mr-1'>
                <div className='h-[15px] text-[18px] px-[4px]'>
                    <FaSearch/>
                </div>
                <input onClick={clickInput} className='w-[100%]' placeholder='Bạn cần tìm j'/>
            </div>
    )
}
function LogoCoponent (){
    return(
        <span className='logo mr-1'>
        <img className='h-[33px] w-[180px] zero:max-lg:hidden' src={logo} alt="" />
        <img className='h-[33px] w-[50px] zero:max-lg:block lg:hidden' src={logo2} alt="" />
    </span>
    )
}



export default Banner