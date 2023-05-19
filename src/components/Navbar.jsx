import { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/developing-serverless-functions.svg" alt='gobank' 
      className='w-[70px]'/>
      <h1 className={`font-poppins font-normal cursor-pointer text-[16px] ps-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500`}>GoBank</h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-o' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} 
          alt='menu'
          className='w-[25px] h-[25px] object-contain'
          onClick={() => setToggle((prev) => !prev)}
          />

          <div className=''>

          </div>
      </div>
    </nav>
  )
}

export default Navbar