'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

function AppBar() {
  return (
    <div className='px-6 flex items-center justify-between bg-[#0a0a0a] text-[#f9f9f9]'>
    <div className='container'>
        musical
    </div>
    <div>
        <button className='m-2 p-2 bg-white text-black rounded-md' onClick={()=>signIn()}>Sign In</button>
    </div>
    </div>
  )
}

export default AppBar