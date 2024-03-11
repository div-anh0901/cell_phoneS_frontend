import React, { useState } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { PiNote } from "react-icons/pi";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbCodeDots } from "react-icons/tb";


const menu = [
    {
    
        icons: <IoHomeOutline/>,
        text: "Trang chủ"
    },
    {
    
        icons: <PiNote/>,
        text: "Danh mục"
    },
    {
    
        icons: <BiHomeAlt2/>,
        text: "Cửa hàng"
    },
    {
    
        icons: <FaRegCircleUser/>,
        text: "Đăng nhập"
    },
    {
    
        icons: <TbCodeDots/>,
        text: "Xem thêm"
    },
]
type Props={
    onclose: ()=>void;
    ontoggle:()=> void;
}
function MenuFooter({onclose,ontoggle}:Props) {
    const [indexMenu , setIndexMenu] = useState(0);
    function clickMoveMenu (index: number){
        setIndexMenu(index)
        if(index===1){
            ontoggle()
        }else {
            onclose()
        }
    }



  return (
    <div className='w-full md-800:hidden fixed bottom-0 h-[64px] text-[#707070] shadow-menu z-20'>
        <div className='flex w-full h-[64px] items-center shadow-menu '>
            {menu.map((data,index)=>(
            <div 
                className={+ indexMenu !== index ? 'w-[20%] text-center' : "w-[20%] text-center text-bg-banner" } 
                key={index}
                onClick={()=>clickMoveMenu(index)}
                >
                 <div className='text-[20px] w-[25px] m-auto'>
                    {data.icons}
                 </div>
                 <div className='text-[12px] font-bold'>{data.text}</div> 
             </div>
            ))}
           
            
        </div>
    </div>
  )
}

export default MenuFooter