import React from 'react'
import ProductCard from './productCard'
import { OurProduct_Data } from './constant/ourProduct'

function OurProduct() {
  return (
    <>

       <section className='
       px-[10px] md:px-[0px]
       w-full 
       mt-[40px] md:mt-[173px] 
       mb-[60px] md:mb-[136px]'>

        {/* heading */}
        <div>
            <h1 className='text-[25px] md:text-[32px] leading-[35px] text-center font-semibold text-[#272343]'>Our Products</h1>
        </div>


        {/* our product main div */}
        <div className='
        w-full 
        grid 
        gap-y-[22px] md:gap-y-[0px]
        gap-[10px] md:gap-[24px] 
        grid-cols-2 md:grid-cols-4 
        grid-rows-4 md:grid-rows-2 
        mt-[20px] md:mt-[74px]'>
            <ProductCard data={OurProduct_Data}/>
        </div>


       </section>

    </>
  )
}

export default OurProduct

