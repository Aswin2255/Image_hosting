import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Details from '../components/Details'
import Navbar from '../components/Navbar'
import { checkuser } from '../redux/Slice'

function Imagedetails() {
  const disp = useDispatch()
  const navigate = useNavigate()
  
    useEffect(()=>{
      disp(checkuser()).then((data)=>{
          console.log(data)
          if(!data.payload.status){
              navigate('/login')
          }
      })
  
  },[])
  return (
    <div>
        <Navbar/>
        <Details/>
      
    </div>
  )
}

export default Imagedetails
