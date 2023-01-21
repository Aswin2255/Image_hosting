import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

function Details() {
  return (
    <div>
    
    <div className='h-screen flex md:items-center mt-10'>
    <div className='max-w-md mx-auto grow md:-mt-24'>
  
        <Cards>
        <div className='flex gap-4 items-center justify-start  m-4  '>
            
            <div>
            <h3 className='font-bold text-xl'>User</h3>
           <h1>Posted on <Link className='hover:underline text-socialblue' to={'/propic'}>Change Profile Photo</Link></h1>
        </div>
            </div>
            <div className='mb-4'>
            
                    <p className='my-3 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illum eos dolorem fuga debitis quaerat ab? Ad vitae quae incidunt aperiam aliquid commodi officiis, iure non officia aliquam architecto! Quam.</p>
                    <div className='rounded-md overflow-hidden'>
                        <img src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80' alt='postimg'></img>
                    </div>
            
            </div>
            
           
          
           
            
         
           
            
        </Cards>
    </div>
  
</div>

    
 
</div>
    
    
  )
}

export default Details
