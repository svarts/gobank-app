import { useState } from 'react'
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import styles from '../style';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src="https://ik.imagekit.io/laracasts/series/thumbnails/svg/developing-serverless-functions.svg" alt='gobank' 
      className='w-[70px]'/>
      <h1 className={`font-poppins font-normal cursor-pointer text-[16px] bg-gradient-to-r from-violet-500 via-purple-600 to-blue-950 inline-block text-transparent bg-clip-text`}>GoBank</h1>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
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

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gradient-to-tr from-lightPrimary to-purplePrimary ... absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>
                  {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar