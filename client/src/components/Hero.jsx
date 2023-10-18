import React from 'react';
import SearchIcon from '../assets/search-icon.svg';
import Bookstack from '../assets/book-stack.svg';
import CurvedBg from '../assets/hero-curved-bg.svg';

const Hero = () => {
  return (


    <>
        <div className='w-full h-128 flex pl-10'>

            <div className='w-1/2 h-128'>

                <h1 className='font-bold pt-40  text-6xl'>
                    FIND AND BUY <br /> A BOOK
                </h1>

                <p className=' pt-3 text tracking-wide'> 
                    find your favorite book and read it here for free
                </p>

                <div className="flex relative items-center pt-5">

                <input type="search" className="w-96 h-10 bg-gray-100 placeholder:pl-10 text-xs" placeholder='Search Book' />
                <img src={SearchIcon} alt="searchicon" className='absolute pl-2 h-5'/>

                </div>

            </div>

            <div className='w-1/2 h-128 bg-herobg bg-contain bg-right bg-no-repeat overflow-hidden grid items-center'>
            <img src={Bookstack} alt="books" className='pl-24 ml-10 w-full'/>
            </div>

        </div>
    </>
  );
};

export default Hero;
