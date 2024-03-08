import React, { useState } from 'react'
import Category from '../sections/Category';


type Prop = {
    isShowCategory : boolean,
    onClose: ()=>void,
    setIndexMenu : (data: number)=> void,
    setIsShowHide : ()=>void,
    setIsShowShow : ()=>void,
}
function PopupCaregoryComponent({isShowCategory,setIsShowHide,setIsShowShow, onClose,setIndexMenu}:Prop){
    const handleClose = (e:any)=>{
        if(e.target.id==="wrapper" ) onClose();
    }
    if(isShowCategory === false) return null;

    return(
      <div className='w-full fixed inset-0 top-[64px] bg-black bg-opacity-25 backdrop-blur-sm z-10' id='wrapper' onClick={handleClose} >
        <div className='ml-[18%]'>
            <Category setIsShowHide={setIsShowHide} setIsShowShow={setIsShowShow} setIndexMenu={(data:number)=> setIndexMenu(data)}/>
        </div>
            
      </div>
    )
}

export default PopupCaregoryComponent