import React from 'react'
import ImageCard from './imageCard'
import Image from "next/image"


function Category() {
  return (
    <section className='w-full mt-[136]'>

        {/* heading */}
        <h1 className='text-[32px] leading-[35px] font-semibold text-[#272343]'>Top categories</h1>

        {/* Images main div */}
        <div className='w-full h-[424px] flex gap-[24px] mt-[40px]'>
            <ImageCard/>
        </div>


        {/* bottom pictures */}
        <div className='w-full h-[648px] grid grid-cols-2 gap-[24px] mt-[229px]'>

            {/* <p className='text-[34px] leading-[39px] transform rotate-190 '>Explore new and popular styles</p> */}

            {/* first full halff picture */}
            <div>
                <Image src={"/products/card1.png"} alt={"picture"} width={648} height={648} />
            </div>


              {/* choty choty div */}
            <div className='grid grid-cols-2 grid-rows-2 gap-[24px]'>
                <div>
                    <Image src={"/products/card2.png"} alt="chair2" width={312} height={312}/>
                </div>
                
                <div>
                    <Image src={"/products/card3.png"} alt="chair2" width={312} height={312}/>
                </div>

                <div>
                    <Image src={"/products/card4.png"} alt="chair2" width={312} height={312}/>
                </div>

                <div>
                    <Image src={"/products/card5.png"} alt="chair2" width={312} height={312}/>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Category