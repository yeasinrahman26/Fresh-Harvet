import React from 'react';
import social from '../assets/Social.png'
import visa from '../assets/visa.png'
import logo from '../assets/Logo.jpg'
import download from '../assets//Download App_.png'

const Footer = () => {
    return (
      <div className=" max-w-[1200px] mx-auto pt-20">
        {/* footer top */}
        <div className="space-y-5 mb-10">
          {/* logo section and navigation */}
          <div className="flex flex-col justify-between md:flex-row">
            <div className='flex-1/3'>
              <img className="max-w-[300px] pb-5" src={logo} alt="" />
            </div>
            <div className="grid grid-cols-3 gap-4 mx-2">
              {/* Column 1 */}
              <div>
                <ul className="space-y-3">
                  <li className="font-bold">Quick Link 1</li>
                  <li className="text-[#5F6066]">Home</li>
                  <li className="text-[#5F6066]">Shop</li>
                  <li className="text-[#5F6066]">About us</li>
                  <li className="text-[#5F6066]">Blog</li>
                  <li className="text-[#5F6066]">Detail Blog</li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="space-y-3">
                  <li className="font-bold">Quick Link 2</li>
                  <li className="text-[#5F6066]">Favorites</li>
                  <li className="text-[#5F6066]">Cart</li>
                  <li className="text-[#5F6066]">Sign in</li>
                  <li className="text-[#5F6066]">Register</li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <ul className="space-y-3">
                  <li className="font-bold">Contact</li>
                  <li className="text-[#5F6066]">1234 5678 90</li>
                 
                  <li className="text-[#5F6066]">
                    Tanjung Sari Street, Pontianak, Indonesia
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* download and payment */}
          <div className="flex flex-col gap-5 justify-between items-center md:flex-row">
            <img src={download} alt="" />
            <img src={visa} alt="" />
          </div>
        </div>
        <footer className=" border-t-2 border-base-300  text-base-content p-4">
          <section className="flex flex-col-reverse justify-between  items-center md:flex-row">
            <div>
              <p>
                Copyright © {new Date().getFullYear()} - All right reserved by
                Banana studio
              </p>
            </div>
            <div>
              <img src={social} alt="" />
            </div>
          </section>
        </footer>
      </div>
    );
};

export default Footer;