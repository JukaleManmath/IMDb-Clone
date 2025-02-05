import React from 'react';
import Logo from '/src/images/Logo1.jpg';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
     <div className='bg-neutral-200 shadow-stone-400 shadow-md flex items-center space-x-8 pl-3 py-4 '>
        <img src={Logo} alt='' className='h-[50px] w-[60px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'/>
        <Link to="/" className='font-bold text-xl text-zinc-900 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 '>Movies</Link>
        <Link to="/fav" className='font-bold text-xl  text-zinc-900 p-2 
        transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105'>Favourites</Link>
        <div className='font-bold text-xl text-blue-400 '>MJ-Movies 🎥 </div>
     </div>
  )
}

export default Navbar