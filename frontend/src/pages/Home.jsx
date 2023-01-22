import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Createimage from '../components/Createimage'
import Imagecard from '../components/Imagecard'
import Navbar from '../components/Navbar'
import {  getimage, getuser } from '../redux/Slice'

function Home() {
    const value = useSelector(getuser)
    
  
  return (
    
    <div>
      <Navbar/>
      <Createimage/>
      <Imagecard/>
     
    </div>
  )
}

export default Home
