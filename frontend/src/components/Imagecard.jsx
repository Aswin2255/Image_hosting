import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getallimage, getimage, getloader } from '../redux/Slice'
import Cards from './Cards'



function Imagecard() {
    const images = useSelector(getimage)
    
    const Navigate = useNavigate()
    console.log(images.length)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getallimage()).then((data)=>{
        console.log(data)
        if(!data.payload.status){
            console.log('qwdnj')
            Navigate('/login')
        }
       })
    
    },[])
   
  return (
    <>
    
      
        <div className=' grid grid-cols-2 gap-3 md:grid-cols-4 mt-5'>
        {
         images.length ? images.map((e,i)=>{
            let image =  require(`../images/${e.image}`) ? require(`../images/${e.image}`) : '' 
            console.log(image)
            return(

                <Link  key={e._id} to={`/details/${e._id}`}>
                <Cards key={e._id}>
                 <div className="w-full rounded-lg shadow-md lg:max-w-sm">
                     <img
                         className="object-cover w-full h-48"
                         src={ image  ? image   : ''}
                         alt="image"
                     />
                     
                         
                     
                    
                 </div>
                 <p className='text-right'>Posted by : {e.user.username}</p>
                 </Cards>
                </Link> 
            )
          
            
        }): <h1>No data ....</h1>
        }
      
      
    

</div> 

      
    
     
    </>
   
   
      
    
  )
}

export default Imagecard
