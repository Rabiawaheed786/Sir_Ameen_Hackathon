import React from 'react'
import { Card } from './ui/card'
import Image from "next/image"
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import { Feat_data } from './constant/featureProduct'



function ProductCard({data}: {data: Feat_data[]}) {
  return (
    <>

       {data.map((item, index)=> {
        return(
            
          <Card className='
          h-full 
          f-1/2 md:w-full overflow-hidden shadow-none border-none ' key={index}>

        {/* image div 2 */}
        <div className=' transform hover:scale-[1.04] transition-transform duration-500 ease-in-out
        w-full
        h-[220px] md:h-[312px] 
        relative'>
            <Image src={item.src} alt="product1" layout='fill' objectFit='cover'/>

            {/* for float */}
         {item.badge == true &&
            <Badge className={`
              text-[10px] md:text-[13px] 
              leading-[14px] 
              text-white 
              py-[3px] md:py-[6px] 
              px-[8px] md:px-[10px] ${item.badgeColor}-500 absolute 
              top-[10px] md:top-[20px] 
              left-[10px] md:left-[20px]`}>{item.badgeText}</Badge>
         }
        </div>


        {/* text price div 2 */}
        <div className='flex items-center justify-between 
        mt-[5px] md:mt-[14px] pl-[1px] '>

            <div>
                <p className='
                text-[12px] md:text-[16px]
                leading-[20px] 
                text-[#007580]'>
                  {item.heading}</p>

                <div className='flex items-center gap-1 
                mt-[2px] md:mt-[10px]'>
                  <h2 className='
                  text-[14px] md:text-[18px] 
                  leading-[20px] text-[#272343] font-semibold'>${item.newPrice}</h2>
                  
                  {item.oldPrice_h2 == true && 
                    <h2 className='
                    text-[13px] md:text-[14px] leading-[15px] text-[#9A9CAA] line-through'>${item.oldPrice}</h2>
                  }
                </div>
            </div>

           {item.shopBg &&
            <div>
            <Button className={`
              h-[30px] md:h-[44px] 
              w-[30px] md:w-[44px] 
              rounded-[4px] md:rounded-[8px] ${item.shopBg}-500 `}>
               <LuShoppingCart size={24} className='
               text-[10px] md:text-[24px] '/>
            </Button>
           </div>
           }

        </div>

          </Card>
           
        )
       })}
      

    </>
  )
}

export default ProductCard