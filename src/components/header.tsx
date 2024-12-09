import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { IoAlertCircleOutline } from "react-icons/io5";
import Image from "next/image"
import { LuShoppingCart } from "react-icons/lu";
import { Button } from './ui/button';
import Link from "next/link"


function Header() {
  return (
    <>

       <div className='w-full flex flex-col'>


        {/* top div 1 */}
        <div className='h-[45px] flex items-center justify-between py-[14px] text-[#FFFFFF] bg-[#272343]'>
          <div className='flex items-center gap-[8px]'>
          <FaCheck size={16} />
          <p className='text-[13px] leading-[14.3px]'>Free shipping on all orders over $50</p>
          </div>

         {/* top right icons */}
          <div>

            <div className='flex gap-[24px] text-[13px] leading-[16px]'>
            <div>
                <DropdownMenu>

                    <DropdownMenuTrigger className=' flex items-center gap-[6px] focus:outline-none hover:cursor-pointer '>
                    Eng
                    <ChevronDown size={7} />
                    </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Spanish</DropdownMenuItem>
                    <DropdownMenuItem>Russian</DropdownMenuItem>
                    <DropdownMenuItem>Urdu</DropdownMenuItem>
                </DropdownMenuContent>

                </DropdownMenu>
            </div>

            <p>Faqs</p>

            <div className='flex items-center gap-[6px]'>
            <IoAlertCircleOutline />
            <p>Need Help</p>
            </div>

            </div>
          </div>

        </div>


         {/* second div 2 */}
        <div className='flex items-center justify-between bg-[#F0F2F3] py-[20px] '> 

          <div className='flex items-center gap-[8px]'>
           <Image src={"/logo.png"} alt="logo" width={40} height={40}/>
            <h2 className='text-[26px] leading-[31px] font-medium'>Comforty</h2>
          </div>

          <div className='flex items-center gap-[8px] py-[11px] px-[16px] bg-white rounded-[8px] '>
            <LuShoppingCart size={22}/>
            <p className='text-[12px] leading-[13px] font-medium'>Cart</p>
            <Button size={"icon"} className='h-[20px] w-[20px] rounded-full bg-[#007580]'>2</Button>
          </div>

        </div>


        {/* third div 3 */}
        <div className='flex items-center justify-between py-[29.5px] border-b-[1px]'>
          <ul className='flex gap-[32px]'>
            <Link href={"/"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Home</li></Link>
            <Link href={"/shopy"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Shop</li></Link>
            <Link href={"/products"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Product</li></Link>
            <Link href={"/pagesRoute"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>Pages</li></Link>
            <Link href={"/about-us"}><li className='text-[14px] leading-[15px] font-medium hover:text-[#007580] '>About</li></Link>
          </ul>

          <div className='flex gap-[8px] items-center'>
            <p className='text-[14px] leading-[15px] text-[#636270]'>Contact:</p>
            <p className='text-[14px] leading-[15px] font-medium'>(808) 555-0111</p>
          </div>
        </div>

       </div>

    </>
  )
}

export default Header