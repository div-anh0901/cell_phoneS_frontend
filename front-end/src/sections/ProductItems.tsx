import React from 'react'
import { FaRegHeart } from 'react-icons/fa';

type Props ={
    image : any;
    title: String;
    costSale: String;
    percentSale: String;
    instalment: String;
    costTrue: String;
}
function ProductItems(data: Props) {
  return (
    <div className='w-[200px] mb-[20px]'>
        <img className='w-[160px] m-auto h-[160px]' src={data.image} alt="" />
        <div className=''>
            <span className='text-[14px] font-semibold my-[10px]'>{data.title}</span>
            <div className='text-[#d70018] text-[16px] font-semibold my-[10px]'>{data.costSale}₫ <span className='text-[#707070] text-[14px] line-through'> {data.costTrue}₫</span></div>
        </div>
        <div className='w-full h-[50px]'>
            <div className='bg-[#f3f4f6] text-[12px] rounded-[5px] p-1'>
                Trả góp 0% lãi, 0 trả trước, 0 phụ phí qua Samsung Finance+
            </div>
        </div>
        <div className='flex m-[10px] w-full items-center justify-between text-[#707070] text-[14px] text-right'>
        <div></div>
        <div className='flex w-[85px]'>
            <div>Yêu thích </div> <div className='text-[#d70018] font-semibold ml-[5px] text-[18px]'><FaRegHeart/></div>
        </div>
        <div className=" bg-bg-discount absolute m-dicount text-white rounded-dot-left font-bold h-[25px] left-[-15px] top-[-1px] w-[80px] text-center leading-[25px]">
            <p className='text-[12px]'>giảm {data.percentSale}</p>
            </div>
            <div className="text-[#0c53b7] absolute rounded-[5px] m-dicount border-[1px] border-[#0c53b7] border-solid  h-[20px] right-[0px] top-[0px] w-[70px] text-center leading-[20px]">
            <p className='text-[10px] '>trả góp {data.instalment}%</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItems