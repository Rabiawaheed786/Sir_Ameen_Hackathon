import React from 'react'
import { Card } from './ui/card'
import Image from "next/image"
import { feature_data } from './constant/feature'

function Feature() {
  return (
    <>
    
       {feature_data.map((item, index) => {
        return(
            <Card className='h-full w-[263px] shadow-none border-none' key={index}>

              <div className='w-full h-[263px]'>
                <Image src={item.src} alt="image" width={270} height={263}/>
              </div>

             <div className='flex items-center justify-between text-[#272343] mt-[15px]'>
                <p className='text-[16px] leading-[20px]'>{item.heading}</p>

               <h3 className='text-[14px] leading-[16px] font-bold'>{item.price}</h3>
             </div>

       </Card>
        )
       })}
       
    
    </>
  )
}

export default Feature