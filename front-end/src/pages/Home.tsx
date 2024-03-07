import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../sections/Category'
import { PhoneMenu } from '../data'
import CaregoryItem from '../sections/CategoryItem'

function Home() {

    const [IsShow, setIsShow] = useState(false);
    const [indexMenu,setIndexMenu] = useState<number>(0)
  return (
    <div className='w-full'>
        <Banner setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)}/>
        <div className='w-full relative'>
            <div className='w-full'>
                <Category setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)} setIndexMenu={(data:number)=>setIndexMenu(data) }/>
                <CaregoryItem IsShow={IsShow} setIsShowHide={()=>setIsShow(false)} setIsShowShow={()=>setIsShow(true)} indexMenu={indexMenu}/>
            </div>
        </div>
    </div>
  )
}

export default Home