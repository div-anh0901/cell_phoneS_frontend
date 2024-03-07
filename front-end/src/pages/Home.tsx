import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../sections/Category'
import { PhoneMenu } from '../data'
import CaregoryItem from '../sections/CategoryItem'

function Home() {

    const [IsShow, setIsShow] = useState(false);
  return (
    <div className='w-full'>
        <Banner setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)}/>
        <div className='w-full relative'>
            <div className='w-full'>
                <Category setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)}/>
                <CaregoryItem IsShow={IsShow} setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)}/>
            </div>
        </div>
    </div>
  )
}

export default Home