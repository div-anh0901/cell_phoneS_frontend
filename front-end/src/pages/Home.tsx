import React, { useState } from 'react'
import Banner from '../components/Banner'
import Category from '../sections/Category'
import { PhoneMenu } from '../data'
import CaregoryItem from '../sections/CategoryItem'
import SliderShowBaner from '../sections/SliderShowBaner'
import ShowPromotions from '../sections/ShowPromotions'
import MenuFooter from '../sections/MenuFooter'
import BodyMenuFooter from '../sections/BodyMenuFooter'
import LayoutHome from '../layouts/LayoutHome'
import CostHotSale from '../sections/CostHotSale'


function Home() {

  return (
    <div className='w-full relative'>
        <LayoutHome/>
        <div className='w-full h-full relative flex items-center justify-center'> 
          <div className='zero:w-[100%] xl-1200:w-[1250px] flex items-center justify-between h-full' >
            <CostHotSale/>
          </div>
        </div>
    </div>
  )
}

export default Home