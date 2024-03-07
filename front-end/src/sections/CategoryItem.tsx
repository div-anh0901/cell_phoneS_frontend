import React from 'react'
import { PhoneMenu } from '../data'
type Props ={
    IsShow: boolean;
    setIsShowShow: ()=> void;
    setIsShowHide:()=> void;
}


function CaregoryItem({IsShow,setIsShowShow,setIsShowHide}:Props) {
    if(IsShow === false) return null;

    function handleClose (e:any){
        if(e.target.id)  setIsShowHide();
    }

  return (
    <div className='absolute w-[910px] top-1 left-[30%] bg-white z-9' onMouseEnter={setIsShowShow} onMouseLeave={setIsShowHide} id="wrapper" onClick={handleClose}>
        <div className=' w-[100%] rounded-[10px] shadow-md' >
            <div className='w-full flex'>
                {
                    PhoneMenu.map((data,index)=>(
                        <div key={index} className='p-[10px]'>
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