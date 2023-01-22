import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getdetails, getimgdetails } from '../redux/Slice'
import Cards from './Cards'

function Details() {
  const details = useSelector(getdetails)
  console.log(details)
  const {id} = useParams()
  console.log(id)
  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(getimgdetails(id))
  },[])
  console.log(id)
  return (
    <>
    {
      details && details.map((e,i)=>{
        return(
        <div key={e._id}>
    
        <div className='h-screen flex md:items-center mt-10'>
        <div className='max-w-md mx-auto grow md:-mt-24'>
      
            <Cards>
            <div className='flex gap-4 items-center justify-start  m-4  '>
                
                <div>
                  <p>Posted by</p>
                <h3 className='font-bold text-xl'> {e.user.username}</h3>
              
            </div>
                </div>
                <div className='mb-4'>
                
                      
                        <div className='rounded-md overflow-hidden'>
                            <img src={require(`../images/${e.image}`)} alt='postimg'></img>
                        </div>
                
                </div>
                
               
              
               
                
             
               
                
            </Cards>
        </div>
      
    </div>
    
        
     
    </div>
        )
      })
    }
    </>
  
    
    
  )
}

export default Details
