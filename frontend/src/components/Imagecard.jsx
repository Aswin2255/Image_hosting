import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

function Imagecard() {
  return (
    <>
     <div className=' grid grid-cols-2 gap-3 md:grid-cols-4 mt-5'>
       <Link to='/details'>
       <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
            
                
            
           
        </div>
        <p className='text-right'>Posted by : Aswinnnn</p>
        </Cards>
       </Link> 
        <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
           
        </div>
        
        </Cards>
        <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
           
        </div>
        
        </Cards>
        <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
           
        </div>
        
        </Cards>
        <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
           
        </div>
        
        </Cards>
        <Cards>
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
            <img
                className="object-cover w-full h-48"
                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                alt="image"
            />
           
        </div>
        
        </Cards>

   
       
 
      
        

    

</div>
    </>
   
   
      
    
  )
}

export default Imagecard
