
import { Button } from '@/components/ui/button';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import Image from "next/image"

function Page() {
  return (
    <>

       <section className='w-full mt-[98px]'>

        {/* top div 1 */}
        <div className='w-full'>

            {/* text div */}
            <div className='text-center'>
                <h1 className='text-[36px] leading-[54px] font-semibold text-[#000000]'>Get In Touch With Us</h1>
                <p className='text-[16px] leading-[24px]  text-[#9F9F9F]'>
                    For More Information About Our Product & Services. Please Feel Free To Drop Us <br/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>


            {/* main div */}
            <div className='flex justify-center mt-[128px] gap-[160px]'>

                {/* 1 */}
                <div className='flex flex-col gap-[57px]'>

                    <div className='flex gap-[30px]'>
                        <FaLocationDot size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Address</h2>
                            <p className='text-[16px] leading-[19px]'>236 5th SE Avenue, New <br/> York NY10000, United <br/> States</p>
                        </div>
                    </div>


                    <div className='flex gap-[30px]'>
                        <FaPhone size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Phone</h2>
                            <p className='text-[16px] leading-[19px]'>Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
                        </div>
                    </div>


                    <div className='flex gap-[30px]'>
                        <MdWatchLater size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Working Time</h2>
                            <p className='text-[16px] leading-[19px] mt-[7px]'>Monday-Friday: 9:00 -  <br/> 22:00 <br/>  Saturday-Sunday: 9:00 - <br/> 21:00</p>
                        </div>
                    </div>

                    
                </div> 



                {/* 2 */}
                <div className='flex flex-col gap-[36px]'>

                     {/* input 1 */}
                    <div className='flex flex-col gap-[22px]'>
                      <label className='text-[16px] leading-[24px] font-medium'>Your name</label>
                      <input type='text' placeholder='Abc'  className='w-[528px] h-[75px] py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>

                     {/* input 2 */}
                    <div className='flex flex-col gap-[22px]'>
                      <label className='text-[16px] leading-[24px] font-medium'>Email address</label>
                      <input type='email' placeholder='Abc@def.com'  className='w-[528px] h-[75px] py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>

                     {/* input 3 */}
                    <div className='flex flex-col gap-[22px]'>
                      <label className='text-[16px] leading-[24px] font-medium'>Subject</label>
                      <input type='text' placeholder='This is an optional'  className='w-[528px] h-[75px] py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>


                      {/* textarea 4 */}
                      <div className='flex flex-col gap-[22px]'>
                      <label className='text-[16px] leading-[24px] font-medium'>Message</label>
                      <textarea placeholder='Hi! i’d like to ask about' className='w-[528px] h-[120px] py-[26px] px-[30px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px]'>
                        Hi! id like to ask about</textarea>
                    </div>


                    <Button className='w-[237] h-[55px] text-[16px] leading-[24px] text-white bg-[#029FAE] hover:bg-[#02a0aee0] mt-[13px]'>Submit</Button>

                </div>
            </div>

        </div>


        {/* bottom div 2 */}
        <div className='w-full flex items-center gap-[132px] py-[100px] px-[66px] bg-[#F4F4F4] mt-[63px]'>

             {/* 1 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con1.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>High Quality</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>crafted from top materials</p>
                </div>
            </div>

             {/* 2 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con2.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>Warranty Protection</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>Over 2 years</p>
                </div>
            </div>

             {/* 3 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con3.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>24 / 7 Support</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>Dedicated support</p>
                </div>
            </div>

        </div>


       </section>

    </>
  )
}

export default Page
