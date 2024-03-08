import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../sections/Category'
import { PhoneMenu } from '../data'
import CaregoryItem from '../sections/CategoryItem'
import SliderShowBaner from '../sections/SliderShowBaner'
import ShowPromotions from '../sections/ShowPromotions'


function Home() {

    const [IsShow, setIsShow] = useState(false);
    const [indexMenu,setIndexMenu] = useState<number>(0);




  return (
    <div className='w-full'>
        <Banner 
          setIsShowHide={()=>setIsShow(false)} 
          setIsShowShow={()=>setIsShow(true)} 
          setIndexMenu={(data:number)=>setIndexMenu(data) }
          indexMenu={indexMenu}
          />
        <div className='w-full relative h-[376px] flex items-center justify-center my-[10px]'>
            <div className='sm:w-[100%] xl-1200:w-[1250px] h-[376px] flex items-center justify-between'>
              <div className='zero:max-md-860:hidden w-[220px]'>
                <Category 
                  setIsShowHide={()=>setIsShow(false)} 
                  setIsShowShow={()=>setIsShow(true)} 
                  setIndexMenu={(data:number)=>setIndexMenu(data) }/>
                <CaregoryItem 
                  IsShow={IsShow} 
                  setIsShowHide={()=>setIsShow(false)} 
                  setIsShowShow={()=>setIsShow(true)} 
                  indexMenu={indexMenu}/>
              </div>
              <div className='w-[55%] zero:max-lg:w-full h-full'>
                <SliderShowBaner/>
              </div>
              <div className='zero:max-lg:hidden w-[22%] h-full'>
                <ShowPromotions/>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home