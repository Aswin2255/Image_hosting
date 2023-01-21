import React from 'react'

function Navbar() {
  return (
   <div className='bg-socialblue w-full h-14  '>
    <div className='float-left p-2 m-1'>
       <h1 className=' text-white font-bold text-2xl'>Image hosting</h1>
    </div>
    <div>
    <div className='float-right p-2 m-1 '>

<p  className='flex gap-2 py-3   rounded-md   cursor-pointer hover:underline'>
                
                Logout</p>
</div>
    <div className='float-right mt-6 cursor-pointer'>
       <h1 className='hover:underline'>Username</h1>
    </div>

    </div>
    
   
   
   </div>
  )
}

export default Navbar
