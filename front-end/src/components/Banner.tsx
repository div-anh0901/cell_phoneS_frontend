import React from 'react'
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
function Banner() {

  return (
    <div className='banner-container bg-bg-banner text-white flex items-center justify-center '>
        <div className='zero:max-md-800:hidden md-800:block w-[81%]'>
            <div className='w-[100%] h-16 flex items-center justify-center'>
                <LogoCoponent/>
                <div className='zero:hidden md:block ' data-modal-target="default-modal" data-modal-toggle="default-modal">
                    <div className='category flex h-[42px] items-center py-[3px] px-[5px] rounded-[10px] cursor-pointer mr-1 relative'>
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

        <PopupCaregoryComponent/>
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


function PopupCaregoryComponent(){
    return(
        <div id="default-modal"  aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-2xl max-h-full">
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            
        </div>
    </div>
</div>
    )
}
export default Banner