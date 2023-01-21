import React from 'react'
import Createimage from '../components/Createimage'
import Imagecard from '../components/Imagecard'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar/>
      <Createimage/>
      <Imagecard/>
     
    </div>
  )
}

export default Home
