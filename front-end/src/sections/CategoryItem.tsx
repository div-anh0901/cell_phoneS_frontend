import React, { useEffect, useState } from 'react'
import { LaptopMenu, PhoneMenu,headPhone } from '../data'
type Props ={
    IsShow: boolean;
    setIsShowShow: ()=> void;
    setIsShowHide:()=> void;
    indexMenu: number;
}

function CaregoryItem({IsShow,setIsShowShow,setIsShowHide,indexMenu}:Props) {

    const [dataMenu,setDataMenu] = useState(PhoneMenu)
    

    function handleClose (e:any){
        if(e.target.id)  setIsShowHide();
    }

    useEffect(()=>{
        function fectData(){
            if(indexMenu===1){
                setDataMenu(PhoneMenu)
            }else if(indexMenu === 2){
                setDataMenu(LaptopMenu)
            }else if(indexMenu === 3) {
                setDataMenu(headPhone)
            }else {
                setDataMenu(PhoneMenu)
            }
        }
        fectData()

    },[indexMenu,dataMenu])
    if(IsShow === false) return null;

  return (
    <div className='absolute w-[910px] rounded-[10px] top-1 sm:left-[23%] xl-1500:left-[29%] bg-white z-10' onMouseEnter={setIsShowShow} onMouseLeave={setIsShowHide} id="wrapper" onClick={handleClose}>
        <div className=' w-[100%] rounded-[10px] shadow-md' >
            <div className='w-full'>
                {
                    dataMenu.map((data,index)=>(
                        <div key={index} className='p-[10px] float-left'>
                            <div className='font-bold p-[5px] text-[14px]' >{data.title}</div>  
                            {data.items.map((data_v1, index_v1)=>(
                                <div key={index_v1} className='text-[#707070] text-[14px] p-[5px] hover:text-bg-banner cursor-pointer' >{data_v1.label}</div>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default CaregoryItem