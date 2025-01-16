import React from 'react';
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa";
import { Input } from './ui/input';
import { Button } from './ui/button';

function Footer() {
  return (
    <footer className="w-full flex flex-col border-t-[1px] border-b-[1px] pt-[40px] md:pt-[80px] px-4 md:px-8 mt-[40px] md:mt-[60px]">
      <div className="w-full flex flex-wrap gap-[40px] md:gap-[80px]">
        {/* Section 1 */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <Image src={"/logo.png"} alt="logo" width={40} height={40} />
            <h2 className="text-[22px] md:text-[26px] leading-[26px] md:leading-[31px] font-medium">Comforty</h2>
          </div>
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#272343]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            <br /> Cras egestas purus.
          </p>
          <div className="flex items-center gap-[16px] md:gap-[32px]">
            <div className="w-[38px] h-[38px] flex items-center justify-center border-[1px] border-black rounded-full">
              <FaFacebook size={16} color="#007580" />
            </div>
            <FaTwitter size={16} color="#636270" />
            <FaInstagram size={16} color="#636270" />
            <FaPinterest size={16} color="#636270" />
            <FaYoutube size={16} color="#636270" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col gap-[12px] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px]">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">Category</h1>
          <div className="mt-[12px] md:mt-[20px]">
            <p>Armchair</p>
            <p>Wing Chair</p>
            <p className="underline text-[#007580]">Desk Chair</p>
            <p>Wooden Chair</p>
            <p>Park Bench</p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col gap-[12px] text-[14px] md:text-[16px] leading-[17px] md:leading-[20px]">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">Support</h1>
          <div className="mt-[12px] md:mt-[20px]">
            <p>Help & Support</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help</p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="flex flex-col gap-[16px] md:gap-[24px]">
          <h1 className="text-[14px] leading-[110%] tracking-[6%] text-[#9A9CAA] font-medium">Newsletter</h1>
          <div className="flex gap-[8px] md:gap-[12px] mt-[12px] md:mt-[20px]">
            <Input
              type="email"
              placeholder="Your email"
              className="text-[14px] md:text-[16px] leading-[16px] text-[#9A9CAA] py-[10px] md:py-[15px] px-[12px] md:px-[20px]"
            />
            <Button className="text-[14px] md:text-[16px] leading-[110%] font-semibold py-[10px] md:py-[14px] px-[16px] md:px-[24px] bg-[#029FAE]">
              Subscribe
            </Button>
          </div>
          <p className="text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-[#272343] mt-[10px] md:mt-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Nullam tincidunt erat enim.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-wrap items-center justify-between py-[16px] md:py-[24px] border-t-[1px] mt-[40px] md:mt-[60px]">
        <div className="text-[12px] md:text-[14px] leading-[18px] md:leading-[21px] text-[#9A9CAA]">
          @ 2021 - Blogy - Designed & Developed by <span>RABIA WAHEED</span>
        </div>
        <div className="mt-[12px] md:mt-0">
          <Image src={"/end.png"} alt="paypal" width={227} height={27} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

