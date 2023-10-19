import React from 'react';
import CartIcon from '../assets/cart-icon.svg';


const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-transparent p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-black text-2xl font-medium" href="/">BOOKSTORE</a>
        <ul className="flex space-x-4 text-black">
          <li><a href="/">
              <img src={CartIcon} alt="Carticon" />
            </a></li>
          <li><a href="/"><button className='bg-white px-5 py-1 rounded-xl font-medium'>Login</button></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
