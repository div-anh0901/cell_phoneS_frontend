import React, { useEffect, useState } from 'react'
import { ImageCustomMenuMobile } from '../images'
import { LaptopMenuMobile, PhoneMenuMobile, TabletMenuMobile } from '../data'

const Navbar =[
    {
        id:1,
        text: "Điện thoại",
        bg: "bg-bg-phone",
        image: ImageCustomMenuMobile.phone
    },
    {
        id:2,
        text: "Tablet",
        bg: "bg-bg-tablet",
        image: ImageCustomMenuMobile.tablet
    },
    {
        id:3,
        text: "Laptop",
        bg: "bg-bg-laptop",
        image: ImageCustomMenuMobile.latop
    },
    {
        id:4,
        text: "Âm thanh",
        bg: "bg-bg-sound",
        image: ImageCustomMenuMobile.audio
    },
    {
        id:5,
        text: "Đồng hồ",
        bg: "bg-bg-watch",
        image: ImageCustomMenuMobile.dong_ho
    },
    {
        id:6,
        text: "Camera",
        bg: "bg-bg-camera",
        image: ImageCustomMenuMobile.camera
    },
    {
        id:6,
        text: "Gia dụng, nhà thông minh",
        bg: "bg-white",
        image: ImageCustomMenuMobile.giadung
    },
    {
        id:7,
        text: "Phu kiện",
        bg: "bg-bg-accessory",
        image: ImageCustomMenuMobile.phu_kien
    },
    {
        id:8,
        text: "PC,Màn hình",
        bg: "bg-white",
        image: ImageCustomMenuMobile.monitor
    },
    {
        id:9,
        text: "Tivi",
        bg: "bg-bg-laptop",
        image: ImageCustomMenuMobile.tv
    },
    {
        id:10,
        text: "Thu cũ đổi mới",
        bg: "bg-bg-phone",
        image: ImageCustomMenuMobile.trade
    },
    {
        id:11,
        text: "Hàng cũ",
        bg: "bg-bg-laptop",
        image: ImageCustomMenuMobile.old
    },

    {
        id:12,
        text: "Tinh công nghệ",
        bg: "bg-bg-newpaper",
        image: ImageCustomMenuMobile.newpaper
    },

]


type Props = {
    IsShowMenuMobile: boolean
}

function BodyMenuFooter({IsShowMenuMobile}:Props) {
    const [isIndex, setIsIndex] = useState(0);
    const [dataNav, setDataNav] = useState(PhoneMenuMobile);
    

    
    useEffect(()=>{
        function fectData(){
            if(isIndex === 0){
                setDataNav(TabletMenuMobile)
            }
            else if(isIndex === 1){
                setDataNav(PhoneMenuMobile)
            }
            else if(isIndex === 2){
                setDataNav(LaptopMenuMobile)
            }else {
                setDataNav(LaptopMenuMobile)
            }
        }
        fectData()
    },[isIndex,dataNav])

    if(!IsShowMenuMobile){
        return null;
    }
  return (
    <div className='fixed md-800:hidden w-full bodyFooter bg-white text-black z-20 top-[64px]'>
        <div className='w-full h-full flex'>
            <div className='w-[100px] h-full overflow-y-auto'>
                {
                    Navbar.map((data,index)=>(
                        <div onClick={()=> setIsIndex(index)} key={index} className={'w-full m-auto h-[80px] bg-bg-tablet text-center flex items-center ' + data.bg}>
                            <div className='w-[80px] m-auto  text-center'>
                                <img className='w-[40px] h-[40px] m-auto' src={data.image} alt="" />
                                <div className='text-[13px] font-medium'>{data.text}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-[90%] h-full text-[#707070] overflow-y-auto p-2 '>
                <div className='w-full flex justify-between py-2'>
                    <div className='text-[16px] font-bold '>Điện thoại</div>  
                    <div className='text-[16px] '>Xem tất cả</div>  
                </div>
                {dataNav.map((data,index)=>(
                    <div key={index} style={{clear:"both" }} className='py-2'>
                        <div className='text-[16px] font-bold' >{data.title}</div>
                        <div className='w-full'>
                            <div className='flex w-100percenadd200px overflow-x-auto flex-wrap'>
                                {data.items.map((item, index1)=>(
                                    <div key={index1} >
                                   <NavbarItem isBrand={item?.isBrand} label={item.label} image={item.image}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

type PropsItems={
    label: String;
    image?: any;
    isBrand?: boolean;
}
function NavbarItem(data: PropsItems){
    if(data?.image.length !==0 && data.isBrand !== false ){
        return(
            <div className=' mx-[5px] cursor-pointer my-[5px] h-[30px] w-[70px] rounded-[10px] flex items-center justify-center border-solid border border-[#707070]'>
                <img  className='h-[12px] w-[50px]' src={data?.image} alt="" />
            </div>
        )
    } else if(data?.isBrand === false){
        return(
            <div className='mx-[5px] flex items-center cursor-pointer my-[5px] h-[90px] w-[90px] rounded-[10px] border-solid border border-[#707070]'>
                <div className='m-auto'>
                    <div><img  className='h-[50px] w-[50px] m-auto' src={data?.image} alt="" /></div> 
                    <div className='text-[12px]'>{data.label}</div>
                </div>
            </div>
        )
    }
    else {
        return(
            <>
                <div className='text-[12px] hover:bg-bg-baner-item cursor-pointer  p-[5px] mx-[5px] my-[5px] rounded-[10px] flex items-center justify-center border-solid border border-[#707070]'>
                    {data.label}
                </div>
            </>
        )
    }
    
    
}

export default BodyMenuFooter