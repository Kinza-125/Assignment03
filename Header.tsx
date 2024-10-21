import React from 'react'
import Link from "next/link"
 const Header =()=> {
  return (

    <header className="bg-teal-600 text-white p-6 " >
        <h1 className="text-4xl font-bold">My Awesome Website</h1>
        
        <nav className="disply flex mx-96 mt-4">
          <>
        <p className="text-white hover:underline mx-4 "><Link href="/home">Home</Link></p>
         <h2 className="text-white hover:underline mx-4"> <Link href="/about">About</Link></h2>
          <p  className="text-white hover:underline mx-4 "><Link href="/service">Services</Link></p>
          <p className="text-white hover:underline mx-4"><Link href="/contact">Contact</Link></p>
        </>
        </nav>
        
      </header>
  );
};
export default Header
