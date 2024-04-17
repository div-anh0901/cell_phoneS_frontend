import React from 'react'

type Props = {
  filter : any[],
  title: String
}
function TitleProducts({filter,title}:Props) {
  return (
    <div className='h-full w-full my-[10px] flex items-center justify-between'>
        <div className=''>
            <p className='uppercase font-bold text-[#444] text-[22px]'>{title}</p>
        </div>
        <div className=''>
                {
                    filter.map((data,index)=>(
                        <span className='bg-[#f3f4f6] cursor-pointer border-solid border-[1px] rounded-[10px] p-[10px] border-[#e5e7eb] text-[13px] mx-[5px]' key={index}>{data.label}</span>
                    ))
                }
        </div>
    </div>
  )
}

export default TitleProducts