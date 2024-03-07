import React, { useState } from 'react'
import Category from '../sections/Category';


type Prop = {
    isShowCategory : boolean,
    onClose: ()=>void,
}
function PopupCaregoryComponent({isShowCategory, onClose}:Prop){
    const [IsShow, setIsShow] = useState(false);
   
    const handleClose = (e:any)=>{
        if(e.target.id==="wrapper" ) onClose();
    }
    if(isShowCategory === false) return null;

    return(
      <div className='absolute inset-0 top-[64px] bg-black bg-opacity-25 backdrop-blur-sm z-1' id='wrapper' onClick={handleClose} >
            <Category setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)}/>
      </div>
    )
}

export default PopupCaregoryComponent