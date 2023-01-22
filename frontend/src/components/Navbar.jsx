import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getuser } from '../redux/Slice'
import { useCookies } from 'react-cookie'

function Navbar() {
   const [cookie,setcookie,removeCookie] = useCookies()
   const Navigate = useNavigate()
   const logout = ()=>{
     removeCookie("jwt")
     Navigate('/login')
   }
   const value = useSelector(getuser)
   console.log('sssssssssssssssssssssssssssssssssssssssss')
   console.log(value)
  return (
   <div className='bg-socialblue w-full h-14  '>
    <div className='float-left p-2 m-1'>
       <h1 className=' text-white font-bold text-2xl'>Image hosting</h1>
    </div>
    <div>
    <div className='float-right p-2 m-1 '>

<p onClick={logout}  className='flex gap-2 py-3   rounded-md   cursor-pointer hover:underline'>
                
                Logout</p>
</div>
    <div className='float-right mt-6 cursor-pointer'>
      
       <h1 className='hover:underline'>{value}</h1>
    </div>

    </div>
    
   
   
   </div>
  )
}

export default Navbar
