import React from 'react'

const Navbar =() => {
  return (
    <nav className='bg-slate-900 text-white flex justify-between px-4 h-16 items-center'>
        <div className="logo font-bold text-lg">GetMeAChai!</div>
        <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul>
        </nav>
  )
}

export default Navbar