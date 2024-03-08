import React from 'react'
import baner1 from '../images/baner-show/ipad-gen9-right-banner-08thang3.webp'
import baner2 from '../images/baner-show/right-sv.webp'
import baner3 from '../images/baner-show/right-banner-s23-8thang3.webp'
function ShowPromotions() {
  return (
    <div>
        <div className='my-[5px]'>
            <img className='rounded-[10px]'  src={baner1} alt="" />
        </div>
        <div className='my-[5px]'>
            <img className='rounded-[10px]' src={baner2} alt="" />
        </div>
        <div className='my-[5px]'>
            <img  className='rounded-[10px]' src={baner3} alt="" />
        </div>
    </div>
  )
}

export default ShowPromotions