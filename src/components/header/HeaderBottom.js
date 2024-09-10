import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from '../SideNavContent';

function HeaderBottom() {
    const [sidebar,setSidebar]=useState(false)
  return (
    <div className='w-full px-4 h-[36px] bg-amazon_light text-white flex items-center'>
      <ul className='flex items-center gap-2 text-sm tracking-wide'>
        <li onClick={()=>setSidebar(true)}className='gap-1 px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            <MenuIcon/>All
        </li>
        <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            Today's Deals
        </li>
        <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            Customer Service
        </li>
        <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            Gift Cards
        </li>
        <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            Registry
        </li>
        <li className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
            Sell
        </li>

        </ul>

    {sidebar && (
            <div className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50">
                <div className='w-full h-full relative'>
                    <div className="w-[350px] h-full bg-white border border-black">
                        <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                            <AccountCircleIcon/>
                            <h3 className="font-titleFont font-bold text-lg tracking-wide">Hello, Sign In</h3>
                        </div>
                        <SideNavContent title="Digital Content & Devices" one="Amazon Music" two="Kindle E-readers & Books" three="Amazon Appstore"/>
                        <SideNavContent title="Shop By Department" one="Electronics" two="Computers" three="Smart Home"/>
                        <SideNavContent title="Programs & Features" one="Gift Cards" two="Amazon live" three="International Shopping"/>
                        <SideNavContent title="Help & Settings" one="Your Account" two="Customer Service" three="Contact Us"/>
                    </div>
                    
                </div>
            </div>
        )
    }
    </div>

  );
}

export default HeaderBottom
